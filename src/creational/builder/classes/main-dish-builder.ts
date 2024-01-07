import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 25);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Filé', 45);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Pepsi', 6);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Mouse Chocolate', 15);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
