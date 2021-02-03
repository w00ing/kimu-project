import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Topic } from "src/entity/ProductClassification";

export default class CreateTopics implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    let topicNames = ["심플", "위트", "큐트", "어반", "자연", "음식", "동물", "인물"];

    for (let topic of topicNames) {
      await factory(Topic)().create({ name: topic });
    }
  }
}
