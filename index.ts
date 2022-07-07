import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Profile } from './src/profile/entity/profile.entity';
import { User } from './src/user/entity/user.entity';

const appdataSource = new DataSource({
  type: "mysql",
  host: "db-meowpati-nest-graphql-server.cz7ly2fxamok.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  username: "admin",
  password: "rucloset4823!",
  database: "basic",
  entities: [User, Profile],
  synchronize: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
});

appdataSource.initialize().then(() => {
  console.log("hello");
});
