import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students')
export class student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ unique: true})
    email: string

    @CreateDateColumn()
    enrollmentDate: Date

    @CreateDateColumn()
    createdAt: Date
    
    @CreateDateColumn()
    updatedAt: Date

}