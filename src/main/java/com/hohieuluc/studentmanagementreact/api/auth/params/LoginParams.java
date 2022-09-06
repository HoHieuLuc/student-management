package com.hohieuluc.studentmanagementreact.api.auth.params;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginParams {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
