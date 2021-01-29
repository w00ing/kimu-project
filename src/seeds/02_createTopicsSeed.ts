import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Topic } from "src/entity/ProductClassification";

export default class CreateTopics implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Topic)().createMany(10);
  }
}
