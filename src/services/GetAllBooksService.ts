import { AppDataSource } from "../database/dataSource";
import { Book } from "../entities/Book";


export class GetAllBooksService{
    async execute(){
        const repo = AppDataSource.getRepository(Book)

        const books = await  repo.find({
            relations: ["category"],
        })

        return books
    }
}