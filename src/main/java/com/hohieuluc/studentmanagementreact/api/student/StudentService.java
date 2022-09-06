package com.hohieuluc.studentmanagementreact.api.student;

import java.text.MessageFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hohieuluc.studentmanagementreact.api.student.params.UpdateStudentParams;
import com.hohieuluc.studentmanagementreact.application.errors.NotFoundException;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    private StudentEntity studentFinder(long id) {
        // @formatter:off
        return studentRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(
                        MessageFormat.format(
                            "Student with id {0} does not exist", id)
                        )
                );
        // @formatter:on
    }

    public List<StudentEntity> getAll() {
        return studentRepository.findAll();
    }

    public StudentEntity create(StudentEntity student) {
        student.setId(-999);
        return studentRepository.save(student);
    }

    public StudentEntity update(long id, UpdateStudentParams updateStudentParams) {
        StudentEntity student = studentFinder(id);
        student.setTeams(updateStudentParams.getTeams());
        return studentRepository.save(student);
    }

    public StudentEntity delete(long id) {
        StudentEntity student = studentFinder(id);
        studentRepository.delete(student);
        return student;
    }

}
