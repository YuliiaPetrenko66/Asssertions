describe('Implicit assertions', () => {
  it('How to perform implicit assertions', () => {
    cy.visit('/commands/assertions');
    cy.get ('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.class', 'success')
    // cy.get ('table.table-bordered.assertion-table tr').then(tableRaws =>{
    //   for(let i = 0; i < tableRaws.length; i++){
    //     tableRaws[i].firstElementChild('tr').attr('class').includes('success')){
    //       cy.wrap(tableRaws[i]).should('have.class', 'success')
    //     }
    //   }
    // })
    cy.get ('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', 'Column content');
    cy.get ('.table.table-bordered.assertion-table tr td').eq(3).should('include.text', "Column content");
    cy.get ('.table.table-bordered.assertion-table tr td').eq(3).should('have.html', 'Column content');

    cy.get ('.table.table-bordered.assertion-table tr td').eq(3).should('not.contain', '12345');
    cy.get ('.table.table-bordered.assertion-table tr td').eq(3).should('not.have.html', '12345');
    cy.get ('.table.table-bordered.assertion-table tr td').eq(3).should('not.have.text', '12345');
    cy.get ('.table.table-bordered.assertion-table tr td').eq(3).should('not.include.text', '12345');

    
    cy.get ('.table.table-bordered.assertion-table tr th')
    .eq(4)
    .invoke('text')
    .then(parseFloat)
    .should('be.greaterThan', 1);

    cy.visit('/commands/querying');
    cy.get('#inputName').type("Hello World!").should('have.value','Hello World!');
    cy.get('#inputName').clear().type("Hello World!").invoke('val').should('equal', 'Hello World!' );

cy.visit('/commands/traversal'); 
cy.get('.traversal-disabled .btn.btn-default').first().should('be.disabled');
cy.get('.traversal-disabled .btn.btn-default').last().should('be.enabled');

cy.visit('/commands/assertions');
cy.get ('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color', 'rgb(223, 240, 216)')
    //.and('eq', 'rgb(223, 240, 216)')
    // .and('be.visible')

    cy.visit('/commands/assertions');
cy.get ('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color', 'rgb(223, 240, 216)')
    .and('be.visible')

    cy.get ('#should a')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'https://on.cypress.io/should')

  })
})