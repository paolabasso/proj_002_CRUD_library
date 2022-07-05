import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import {v4 as uuid} from "uuid"
import { Category } from "./Category"

@Entity("books")
export class Book {

    @PrimaryColumn()
    id: string

    @Column()
    name: string
    
    @Column("text")
    author: string

    @Column()
    publishing_company: string

    @Column()
    category_id: string

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category

    @CreateDateColumn()
    created_at: Date


    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}