import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    users: {
      id: string;
      name: string;
      avatar_url: string;
      login: string;
      session_id?: string;
      created_at: string;
    };
    meals: {
      id: string;
      name: string;
      description: string;
      date_time: string;
      is_diet: boolean;
      user_id?: string;
    };
  }
}
