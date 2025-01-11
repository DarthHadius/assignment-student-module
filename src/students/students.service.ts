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

   
}
