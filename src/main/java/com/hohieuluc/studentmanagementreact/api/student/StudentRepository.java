package com.hohieuluc.studentmanagementreact.api.student;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<StudentEntity, Long> {
    List<StudentEntity> findAll();
}
