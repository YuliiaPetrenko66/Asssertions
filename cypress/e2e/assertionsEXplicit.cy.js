describe('Explicit assertions', () => {
    it('How to perform explicit assertions', () => {
        cy.visit('/commands/assertions');
    
        cy.get ('.table.table-bordered.assertion-table tr').eq(3).then( tableRaw => {
            expect(tableRaw).to.have.attr('class');
             expect(tableRaw).to.have.class('success');
            //cy.wrap(tableRaw).click()

            expect(tableRaw.attr('class')).to.eq('success');
            expect(tableRaw.attr('class')).to.equal('success');
            expect(tableRaw.attr('class')).to.equals('success');

            expect(tableRaw.attr('class')).to.eql('success');
            expect(tableRaw.attr('class')).to.eqls('success');

            const obj = {
                name:"Dima",
                key2:{
                    key2:"1"
                }
            }

            const obj2 = {
                name:"Dima",
                key2:{
                    key2:"1"
                }
            }

            expect(obj).to.eqls(obj2);
            expect(obj).to.eqls(obj2);

            // expect(obj).to.eq(obj2);
            // expect(obj).to.equal(obj2);
            // expect(obj).to.equals(obj2);

     const obj3 = obj;

     expect(obj).to.eqls(obj3);
     expect(obj).to.eqls(obj3);

     expect(obj).to.eq(obj3);
     expect(obj).to.equal(obj3);
     expect(obj).to.equals(obj3);



     cy.get ('.table.table-bordered.assertion-table tr td').eq(3).then( cell => {
        expect(cell).to.have.text("Column content");
        expect(cell).to.have.html("Column content");
        expect(cell).to.contain("Column content");

        expect(cell.text()).to.contains("Column content");
        expect(cell.text()).to.include("Column content");


        expect(cell).to.not.have.text("1234");
        expect(cell).to.not.have.html("124");
        expect(cell).to.not.contain("1234");
        
        expect(cell.text()).to.not.contains("1234");
        expect(cell.text()).to.not.include("1234");
        })
    })
    
    
  })
})