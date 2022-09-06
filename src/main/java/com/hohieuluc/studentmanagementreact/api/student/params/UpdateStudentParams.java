package com.hohieuluc.studentmanagementreact.api.student.params;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateStudentParams {
    @NotBlank
    private String teams;
}
