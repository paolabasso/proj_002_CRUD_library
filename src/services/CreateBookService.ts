import { AppDataSource } from "../database/dataSource"
import { Book } from "../entities/Book"
import { Category } from "../entities/Category"


type BookRequest = {
    name: string,
    author: string,
    publishing_company: string,
    category_id: string
    
}


export class CreateBookService{
    async execute({name, author, publishing_company, category_id}: BookRequest): Promise<Book | Error>{
        const repo = AppDataSource.getRepository(Book)
        const repoCategory = AppDataSource.getRepository(Category)

        if(!(await repoCategory.findOneBy( {id: category_id} ))){
            return new Error("Category does not exists")
        }

        const book = repo.create({name, author, publishing_company, category_id})
        
        await repo.save(book)

        return book
    }
}