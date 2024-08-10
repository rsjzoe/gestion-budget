import { drizzle } from "drizzle-orm/expo-sqlite";
import * as schema from "./schema";
import { openDatabaseSync } from "expo-sqlite/next";

const expo = openDatabaseSync("assistant.db");
export const db = drizzle(expo, { schema });
