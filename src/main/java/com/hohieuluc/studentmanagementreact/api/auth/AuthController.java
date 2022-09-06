package com.hohieuluc.studentmanagementreact.api.auth;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hohieuluc.studentmanagementreact.api.auth.params.LoginParams;
import com.hohieuluc.studentmanagementreact.api.auth.params.RegisterParams;
import com.hohieuluc.studentmanagementreact.api.user.UserEntity;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    JwtEncoder encoder;

    @Autowired
    AuthService authService;

    @GetMapping("/me")
    @Operation(security = @SecurityRequirement(name = "bearerAuth"))
    public UserEntity me(Authentication authentication) {
        return authService.me(authentication.getName());
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody @Valid LoginParams loginParams) {
        return authService.login(loginParams);
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody @Valid RegisterParams registerParams) {
        return authService.register(registerParams);
    }
}
