import './commands';

declare global {
    namespace Cypress {
      interface Chainable {
    hasPseudoElement: (subject: JQueryWithSelector<HTMLElement>, pseudo: string) => Chainable<JQueryWithSelector>;
      }
    }
  }