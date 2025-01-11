import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
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

    // Finding Student by ID
    @Get()
    async getStudent(): Promise<student[]> {
        return this.studentService.getStudents();
    }

    @Get(':id')
    async getStudentsByID(@Param('id') id: number): Promise<student> {
        return this.studentService.getStudentsByID(id);
    }
    
        // Updating Student details
        @Put(':id')
        async updateStudent(
            @Param('id') id:number,
            @Body()data: Partial<student>,
        ): Promise<student> {
            return this.studentService.updateStudent(id, data);
        }

}
