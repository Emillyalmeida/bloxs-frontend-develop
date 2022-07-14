context("App", () => {
  it("Enters in the aplication", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
  });

  it("test dark mode", () => {
    cy.viewport(1440, 900);

    cy.get("header > div > button").click();

    cy.get("header > div > button").click();
  });

  it("Test load more news", () => {
    cy.viewport(1440, 900);

    cy.get(".bNUSwa div:first").trigger("mouseover");
    cy.get(".bNUSwa div:first svg:last").click();
    cy.contains("mini-Itaipú");

    cy.get(".bNUSwa div:first").trigger("mouseover");
    cy.get(".bNUSwa div:first svg:last").click();
    cy.contains("Arion Geração");
  });
});
