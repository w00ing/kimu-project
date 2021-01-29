import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Product } from "src/entity/Product";
import { Category, Subcategory, Topic } from "src/entity/ProductClassification";
import { getRandom } from "src/utils/helperFunctions";
import { OptionChoice, ProductOption } from "src/entity/ProductOption";

export default class CreateProducts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Category)()
      .map(
        async (category: Category): Promise<Category> => {
          const topicRepo = getRepository(Topic);
          const subcategories: Subcategory[] = await factory(Subcategory)()
            .map(
              async (subcategory: Subcategory): Promise<Subcategory> => {
                const products: Product[] = await factory(Product)()
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
                      const topicsArray = await topicRepo.find();
                      const topics = getRandom(topicsArray, 5);
                      product.topics = topics;
                      return product;
                    },
                  )
                  .createMany(5);
                subcategory.products = products;
                return subcategory;
              },
            )
            .createMany(5);
          category.subcategories = subcategories;
          return category;
        },
      )
      .createMany(10);
  }
}
