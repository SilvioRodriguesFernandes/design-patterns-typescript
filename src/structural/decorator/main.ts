import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { Tshirt } from './product/t-shirt';

const tShirt = new Tshirt();
const stampedTshirt = new ProductStampDecorator(tShirt);
const customizedTshirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(stampedTshirt.getPrice(), stampedTshirt.getName());
console.log(customizedTshirt.getPrice(), customizedTshirt.getName());
