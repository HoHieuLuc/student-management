package com.hohieuluc.studentmanagementreact.api.student;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hohieuluc.studentmanagementreact.api.student.params.UpdateStudentParams;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/api/v1/student")
@SecurityRequirement(name = "bearerAuth")
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping
    public List<StudentEntity> getAll() {
        return studentService.getAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public StudentEntity create(@RequestBody @Valid StudentEntity student) {
        return studentService.create(student);
    }

    @PatchMapping("/{id}")
    public StudentEntity update(
            @PathVariable("id") long id,
            @RequestBody @Valid UpdateStudentParams updateStudentParams) {
        return studentService.update(id, updateStudentParams);
    }

    @DeleteMapping("/{id}")
    public StudentEntity delete(@PathVariable("id") long id) {
        return studentService.delete(id);
    }
}
