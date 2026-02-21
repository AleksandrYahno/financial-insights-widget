describe('Critical: premium controls which slots are visible', () => {
  const stubUser = (premium: boolean) => {
    cy.intercept('GET', '**/user', {
      statusCode: 200,
      body: { premium },
    });
  };

  const stubQuantRanking = () => {
    cy.intercept('GET', '**/quant-ranking', {
      statusCode: 200,
      body: {
        sector: 'Technology',
        industry: 'Software',
        rankings: {
          overall: { rank: 100, total: 500 },
          sector: { rank: 10, total: 50 },
          industry: { rank: 1, total: 5 },
        },
      },
    });
  };

  const stubRatingsSummary = () => {
    cy.intercept('GET', '**/ratings-summary', {
      statusCode: 200,
      body: {
        SA_Analysts: { rating: 'HOLD', score: 3 },
        Wall_Street: { rating: 'BUY', score: 4 },
        Quant: { rating: 'HOLD', score: 3.5 },
      },
    });
  };

  const stubFactorGrades = () => {
    cy.intercept('GET', '**/factor-grades/now', {
      statusCode: 200,
      body: { Valuation: { current: 'F' }, Growth: { current: 'D' } },
    });
    cy.intercept('GET', '**/factor-grades/3m', {
      statusCode: 200,
      body: { Valuation: 'F', Growth: 'C' },
    });
    cy.intercept('GET', '**/factor-grades/6m', {
      statusCode: 200,
      body: { data: [['Valuation', 'F'], ['Growth', 'D']] },
    });
  };

  it('when user is not premium, only Quant Ranking slot is visible', () => {
    stubUser(false);
    stubQuantRanking();

    cy.visit('/');

    cy.get('[data-testid="financial-insights-rail"]').should('be.visible');
    cy.get('[data-testid="slot-quant-ranking"]').should('be.visible');
    cy.get('[data-testid="slot-ratings-summary"]').should('not.exist');
    cy.get('[data-testid="slot-factor-grades"]').should('not.exist');
  });

  it('when user is premium, all three slots are visible', () => {
    stubUser(true);
    stubQuantRanking();
    stubRatingsSummary();
    stubFactorGrades();

    cy.visit('/');

    cy.get('[data-testid="financial-insights-rail"]').should('be.visible');
    cy.get('[data-testid="slot-ratings-summary"]').should('be.visible');
    cy.get('[data-testid="slot-factor-grades"]').should('be.visible');
    cy.get('[data-testid="slot-quant-ranking"]').should('be.visible');
  });
});
