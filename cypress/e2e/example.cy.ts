// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Vue3 旅日記");
  });
});
describe("My Second Test", () => {
  it("articles check", () => {
    cy.visit("/article/1");
    cy.contains("h1", "Vite + Volarの開発体験について");
  });
});
