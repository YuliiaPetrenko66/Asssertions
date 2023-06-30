describe('Parametrized test for Toastr', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Modal & Overlays"]').click();
        cy.get('[title="Toastr"]').click();
    });

    const toastVerifying = [{
        testData: [
            {
                position: 'top-right',
                title: 'Top-right',
                content: 'Toast: top-right',
                time: '87000',
                type: 'primary'
            },
            {
                position: 'top-left',
                title: 'Top-left',
                content: 'Toast: top-left',
                time: '87000',
                type: 'success'
            },
            {
                position: 'bottom-left',
                title: 'Bottom-left',
                content: 'Toast: bottom-left',
                time: '87000',
                type: 'info'
            },
            {
                position: 'bottom-right',
                title: 'Bottom-right',
                content: 'Toast: bottom-right',
                time: '87000',
                type: 'warning'
            },

        ],
        expectedResult: [
            {
                icon: 'email',
                title: 'Top-right',
                content: 'Toast: top-right',
                color: 'rgb(233, 29, 99)',
                position: {
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start'
                }
            },
            {
                icon: 'checkmark',
                title: 'Top-left',
                content: 'Toast: top-left',
                color: 'rgb(96, 175, 32)',
                position: {
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }
            },
            {
                icon: 'question-mark',
                title: 'Bottom-left',
                content: 'Toast: bottom-left',
                color: 'rgb(4, 149, 238)',
                position: {
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end'
                }
            },
            {
                icon: 'alert-triangle',
                title: 'Bottom-right',
                content: 'Toast: bottom-right',
                color: 'rgb(255, 159, 5)',
                position: {
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }
            },
        ]
    }];

    toastVerifying.forEach(({ testData, expectedResult }) => {
        testData.forEach((test, index) => {
            const expected = expectedResult[index];
            it(`Test for text form "${test.title}"`, () => {

                cy.get("nb-select.mat-ripple.position-select button[type='button']").click({ multiple: true });
                cy.get("nb-option").contains(test.position).click();

                cy.get("input[name = 'title']").clear().type(test.title);
                cy.get("input[name = 'content']").clear().type(test.content);
                cy.get("input[name = 'timeout']").clear().type(test.time);

                cy.get("nb-select.mat-ripple.appearance-outline.size-medium.status-basic.shape-rectangle.nb-transition button[type='button']").click({ multiple: true });
                cy.get("nb-option").contains(test.type).click();

                cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();

                cy.get('.cdk-overlay-container')
                    .find('div[dir="ltr"]')
                    .invoke('css', 'justify-content')
                    .should('equal', expected.position.justifyContent);

                cy.get('.cdk-overlay-container')
                    .find('div[dir="ltr"]')
                    .invoke('css', 'align-items')
                    .should('equal', expected.position.alignItems);

                cy.get(`nb-icon[ng-reflect-config="[object Object]"] svg g[data-name='Layer 2'] g[data-name='${expected.icon}']`)
                    .should('have.attr', 'data-name', expected.icon);

                cy.get('.title')
                    .contains(expected.title)
                    .should(($title) => {
                        const regex = new RegExp(expected.title, 'i');
                        expect($title.text()).to.match(regex);
                    });
                
                cy.get('div.message').should('contain', expected.content)
                    .then((content) => {
                        expect(content.text()).to.equal(expected.content);
                    });

                cy.get('nb-toastr-container')
                    .find('nb-toast')
                    .should('be.visible')
                    .and('have.css', 'background-color', expected.color);


            });

        });
    });
});


