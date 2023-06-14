import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { randomUUID } from "node:crypto";
import { z } from "zod";

interface UpdatedUser {
  name?: string;
  avatar_url?: string;
  login?: string;
}

export async function usersRoutes(app: FastifyInstance) {
  // Get users
  app.get("/", async () => {
    const users = await knex("users").select();

    return {
      users,
    };
  });

  // Get user
  app.get("/:id", async (request) => {
    const getUserParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getUserParamsSchema.parse(request.params);

    const user = await knex("users").where("id", id).first();

    return { user };
  });

  // Create user
  app.post("/", async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      avatar_url: z.string(),
      login: z.string(),
    });

    const { name, login, avatar_url } = createUserBodySchema.parse(
      request.body
    );

    let sessionId = request.cookies.sessionId;

    if (!sessionId) {
      sessionId = randomUUID();

      reply.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 30 days
      });
    }

    await knex("users").insert({
      id: randomUUID(),
      name,
      avatar_url,
      login,
      session_id: sessionId,
    });

    return reply.status(201).send("User created successfully.");
  });

  // Delete user
  app.delete("/:id", async (request) => {
    const getUserParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getUserParamsSchema.parse(request.params);

    await knex("users").delete().where("id", id);
  });

  // Edit user
  app.put("/:id", async (request, reply) => {
    const updateUserParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = updateUserParamsSchema.parse(request.params);

    const updateUserBodySchema = z.object({
      name: z.string().optional(),
      avatar_url: z.string().optional(),
      login: z.string().optional(),
    });

    const { name, login, avatar_url } = updateUserBodySchema.parse(
      request.body
    );

    const updatedUser: UpdatedUser = {};

    if (name) {
      updatedUser.name = name;
    }

    if (avatar_url) {
      updatedUser.avatar_url = avatar_url;
    }

    if (login) {
      updatedUser.login = login;
    }

    await knex("users").where("id", id).update(updatedUser);

    return reply.status(200).send("User updated successfully.");
  });
}
