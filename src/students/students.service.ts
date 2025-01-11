import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { student } from './students.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(student)
        private readonly studentRepository: Repository<student>,
    ) {}


    // Create Functions for students
    async createStudent(data: Partial<student>): Promise<student> {
        const student = this.studentRepository.create(data);
        return this.studentRepository.save(student);
    }

    // Read and Find Function
    async getStudents(): Promise<student[]> {
        return this.studentRepository.find()
    }

    async getStudentsByID(id: number): Promise<student> {
        const student = await this.studentRepository.findOneBy({ id });
        if (!student) {
            throw new NotFoundException('Student with ID ${id} not found');
        }

        return student; 
    }
    
       // Update Function
       async updateStudent(id: number, data: Partial<student>): Promise<student> {
        const student = await this.getStudentsByID(id);
        Object.assign(student, data);
        return this.studentRepository.save(student);
    }

     // Deleting Function
     async deleteStudent(id: number): Promise<void> {
        const result = await this.studentRepository.delete(id);
        if(result.affected === 0 ){
            throw new NotFoundException('Student with ID ${id} was not found');
        }
    }


}
