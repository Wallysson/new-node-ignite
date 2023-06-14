import { knex } from "../database";

export async function countMeals(userId: string, isDiet?: boolean) {
    const query = knex("meals")
      .count("id", { as: "qtd" })
      .where("user_id", userId);
  
    if (isDiet !== undefined) {
      query.andWhere("is_diet", isDiet);
    }
  
    return query.first();
  }