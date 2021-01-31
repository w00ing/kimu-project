import Faker from "faker";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Product } from "src/entity/Product";
import { Category, Subcategory, Topic } from "src/entity/ProductClassification";
import { getRandom } from "src/utils/helperFunctions";
import { OptionChoice, ProductOption } from "src/entity/ProductOption";

export default class CreateProducts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const topicRepo = getRepository(Topic);
    const subcategoryRepo = getRepository(Subcategory);
    const topicsArray = await topicRepo.find();
    const subcategoriesArray = await subcategoryRepo.find();
    await factory(Product)()
      .map(
        async (product: Product): Promise<Product> => {
          const productOptions: ProductOption[] = await factory(ProductOption)()
            .map(async (productOption: ProductOption) => {
              const optionChoices = await factory(OptionChoice)().createMany(5);
              productOption.optionChoices = optionChoices;
              return productOption;
            })
            .createMany(5);
          product.productOptions = productOptions;
          const topics: Topic[] = getRandom(topicsArray, 5);
          const subcategory: Subcategory = getRandom(subcategoriesArray, 1)[0];
          product.topics = topics;
          product.subcategory = subcategory;
          return product;
        },
      )
      .createMany(100);
  }
}
