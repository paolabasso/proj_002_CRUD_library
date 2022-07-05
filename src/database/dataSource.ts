import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config()


const connection = {
    host: process.env.TYPEORM_HOST,
    user: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    namedb: process.env.TYPEORM_DATABASE,
    port: process.env.TYPEORM_PORT
}


export const AppDataSource = new DataSource({
    type: "mysql",
    host: connection.host,
    port: 3306,
    username: connection.user,
    password: connection.password,
    database: connection.namedb,
    entities: ["./src/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.log(err.message)
        console.error("Error during Data Source initialization!")

    })

