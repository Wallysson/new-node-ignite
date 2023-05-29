import crypto from "node:crypto";
import { FastifyInstance } from "fastify";
import { knex } from "../database";

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/hello", async () => {
    const transactions = await knex("transactions")
      .select("*")
      .where("id", "8b7efa2f-9282-4c41-a3f2-55cba62e26cb");

    return transactions;
  });
}
