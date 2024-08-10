import { db } from "@/drizzle/drizzle";
import { depenses } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export class Depenses {
  static findMany() {
    return db.query.depenses.findMany();
  }
  static async insert(depense) {
    const data = await db.insert(depenses).values(depense).returning();
    return data[0];
  }

  static async delete(id) {
    return db.delete(depenses).where(eq(depenses.id, id)).returning();
  }
}
