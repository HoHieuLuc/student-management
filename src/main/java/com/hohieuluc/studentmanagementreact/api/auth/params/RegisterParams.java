package com.hohieuluc.studentmanagementreact.api.auth.params;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class RegisterParams {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
}
