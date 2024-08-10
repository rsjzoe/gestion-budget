import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const depenses = sqliteTable("depenses", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  category: text("category").notNull(),
  label: text("label").notNull(),
  montant: integer("montant").notNull(),
});
