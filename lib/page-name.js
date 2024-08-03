export function pageName(page) {
  if (page.includes("/compta")) return "Finances";
  throw new Error("Page not existing, add it in lib/page-name.ts");
}
