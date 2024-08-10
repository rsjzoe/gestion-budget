
export default {
  schema: "./drizzle/schema/*.js",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "expo",
  dbCredentials: {
    url: "./drizzle/database.db",
  },
};
