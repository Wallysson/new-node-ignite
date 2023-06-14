import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("meals", (table) => {
    table.uuid("id").primary();
    table.text("name").notNullable();
    table.text("description");
    table.timestamp("date_time").defaultTo(knex.fn.now()).notNullable();
    table.boolean("is_diet").notNullable();
    table
      .uuid("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("meals");
}
