import { Request, Response } from "express";
import { CreateBookService } from "../services/CreateBookService";


export class CreateBookController{
    async handle(request: Request, response: Response){
        const { name, author, publishing_company, category_id } = request.body
        
        const service = new CreateBookService()

        const result = await service.execute({
            name,
            author,
            publishing_company,
            category_id
        })

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result) 
    }
}