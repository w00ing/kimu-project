import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Category, Subcategory } from "src/entity/ProductClassification";

export default class CreateCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const categoryRepo = getRepository(Category);
    let categoryNames = ["아트워크", "굿즈"];

    for (let category of categoryNames) {
      await factory(Category)().create({ name: category });
    }

    let subcategoryNames_01 = ["아트시그니처", "아트포스터", "미니아트시그니처"];
    const category_01 = await categoryRepo.findOne({ name: "아트워크" });
    for (let subcategory_01 of subcategoryNames_01) {
      await factory(Subcategory)().create({ name: subcategory_01, category: category_01 });
    }

    let subcategoryNames_02 = [
      "콜라보레이션 굿즈",
      "컬러링",
      "폰케이스",
      "노트",
      "포스트카드",
      "키톡",
      "뱃지",
    ];
    const category_02 = await categoryRepo.findOne({ name: "굿즈" });
    for (let subcategory_02 of subcategoryNames_02) {
      await factory(Subcategory)().create({ name: subcategory_02, category: category_02 });
    }
  }
}
