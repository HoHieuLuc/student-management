package com.hohieuluc.studentmanagementreact.api.student;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.hohieuluc.studentmanagementreact.application.validation.EnumValidator;

import lombok.Data;
import lombok.experimental.Accessors;

enum Gender {
    M,
    F
}

@Data
@Accessors(chain = true)
@Entity
@Table(name = "students")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String name;

    @Email(message = "Email không hợp lệ")
    private String email;

    @EnumValidator(
        enumClass = Gender.class,
        message = "Giới tính không hợp lệ" 
    )
    private String gender;

    @NotBlank
    private String teams;
}
