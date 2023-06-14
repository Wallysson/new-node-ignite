import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { parseISO } from "date-fns";
import { countMeals } from "../helpers/countMeals";
import { checkSessionIdExists } from "../middlewares/check-session-id-exists";

interface UpdatedMeal {
  name?: string;
  description?: string;
  date_time?: string;
  is_diet?: boolean;
}

export async function mealsRoutes(app: FastifyInstance) {
  // Get meals
  app.get(
    "/",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const userId = request.id;
      const meals = await knex("meals").where("user_id", userId).select();

      return {
        meals,
      };
    }
  );

  // Get meal
  app.get(
    "/:id",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const userId = request.id;

      const getMealParamsSearch = z.object({
        id: z.string().uuid(),
      });

      const { id } = getMealParamsSearch.parse(request.params);

      const meal = await knex("meals")
        .where("id", id)
        .andWhere("user_id", userId)
        .first();

      return { meal };
    }
  );

  // Create meal
  app.post(
    "/",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const userId = request.id;

      const createMealBodySchema = z.object({
        name: z.string(),
        description: z.string().optional(),
        date_time: z.string(),
        is_diet: z.boolean(),
      });

      const user_id = userId;

      const { name, description, is_diet, date_time } =
        createMealBodySchema.parse(request.body);

      const parsedDateTime = date_time ? parseISO(date_time) : new Date();

      await knex("meals").insert({
        id: randomUUID(),
        name,
        description,
        is_diet,
        date_time: parsedDateTime.toString(),
        user_id,
      });

      return reply.status(201).send("Meal created successfully.");
    }
  );

  // Delete meal
  app.delete(
    "/:id",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const userId = request.id;

      const getMealParamsSearch = z.object({
        id: z.string().uuid(),
      });

      const { id } = getMealParamsSearch.parse(request.params);

      await knex("meals").delete().where("id", id).andWhere("user_id", userId);
    }
  );

  // Edit meal
  app.put(
    "/:id",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const userId = request.id;

      const updatetMealParamsSearch = z.object({
        id: z.string().uuid(),
      });

      const { id } = updatetMealParamsSearch.parse(request.params);

      const updateMealBodySchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        date_time: z.string().optional(),
        is_diet: z.boolean().optional(),
      });

      const { name, description, is_diet, date_time } =
        updateMealBodySchema.parse(request.body);

      const updatedMeal: UpdatedMeal = {};

      if (name !== undefined) {
        updatedMeal.name = name;
      }

      if (description !== undefined) {
        updatedMeal.description = description;
      }

      if (date_time !== undefined) {
        updatedMeal.date_time = date_time;
      }

      if (is_diet !== undefined) {
        updatedMeal.is_diet = is_diet;
      }

      await knex("meals")
        .where("id", id)
        .andWhere("user_id", userId)
        .update(updatedMeal);

      return reply.status(200).send("Meal updated successfully.");
    }
  );

  app.get(
    "/users/:userId",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getUserMealsParamsSearch = z.object({
        userId: z.string().uuid(),
      });

      const { userId } = getUserMealsParamsSearch.parse(request.params);

      const meals = await knex("meals").select().where("user_id", userId);

      return {
        meals,
      };
    }
  );

  app.get(
    "/summary/:userId",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getUserSummaryParamsSearch = z.object({
        userId: z.string().uuid(),
      });

      const { userId } = getUserSummaryParamsSearch.parse(request.params);

      const [total, onDiet, offDiet] = await Promise.all([
        countMeals(userId),
        countMeals(userId, true),
        countMeals(userId, false),
      ]);

      const meals = await knex("meals")
        .select()
        .where("user_id", userId)
        .orderBy("date_time");

      let currentSequence = 0;
      let maxSequence = 0;

      for (const meal of meals) {
        if (meal.is_diet) {
          currentSequence++;
          if (currentSequence > maxSequence) {
            maxSequence = currentSequence;
          }
        } else {
          currentSequence = 0;
        }
      }

      return { total, onDiet, offDiet, maxDietSequence: maxSequence };
    }
  );
}
