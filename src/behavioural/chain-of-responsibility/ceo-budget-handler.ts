import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class CeoBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('O Ceo trata qualquer orçamento.');
    budget.approved = true;
    return budget;
  }
}
