import { Controller, Post, Body } from '@nestjs/common';
import { StudentsService } from './students.service';
import { student } from './students.entity';


@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService)    {}

    // Creating New Student
    @Post()
    async createStudent(@Body() data: Partial<student>): Promise<student> {
        return this.studentService.createStudent(data);
    }


    
}
