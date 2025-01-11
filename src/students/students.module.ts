import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './students.entity';



@Module({
    imports: [TypeOrmModule.forFeature([student])],
    providers: [StudentsService],
    controllers: [StudentsController]
})
export class StudentsModule {}
