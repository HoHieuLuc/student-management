package com.hohieuluc.studentmanagementreact.api.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hohieuluc.studentmanagementreact.api.auth.params.LoginParams;
import com.hohieuluc.studentmanagementreact.api.auth.params.RegisterParams;
import com.hohieuluc.studentmanagementreact.api.user.UserEntity;
import com.hohieuluc.studentmanagementreact.api.user.UserRepository;
import com.hohieuluc.studentmanagementreact.application.errors.UnauthorizedException;
import com.hohieuluc.studentmanagementreact.application.security.JsonWebTokenUtils;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    JsonWebTokenUtils jsonWebTokenUtils;

    @Autowired
    PasswordEncoder passwordEncoder;

    public UserEntity me(String username) {
        // @formatter:off
        return userRepository
                .findByUsername(username)
                .orElseThrow(() -> 
                        new UnauthorizedException("Token không hợp lệ, hãy thử đăng nhập lại")
                );
        // @formatter:on
    }

    public Map<String, Object> login(LoginParams loginParams) {
        // @formatter:off
        UserEntity user = userRepository
                .findByUsername(loginParams.getUsername())
                .orElseThrow(() -> 
                        new UnauthorizedException("Sai tài khoản hoặc mật khẩu")
                );
        // @formatter:on

        if (!passwordEncoder.matches(loginParams.getPassword(), user.getPassword())) {
            throw new UnauthorizedException("Sai tài khoản hoặc mật khẩu");
        }

        String token = jsonWebTokenUtils.generateToken(user.getUsername());

        Map<String, Object> response = new HashMap<String, Object>();
        response.put("token", token);
        response.put("type", "bearer");
        return response;
    }

    public ResponseEntity<Object> register(RegisterParams registerParams) {
        UserEntity user = new UserEntity()
                .setUsername(registerParams.getUsername())
                .setPassword(passwordEncoder.encode(registerParams.getPassword()))
                .setFirstName(registerParams.getFirstName())
                .setLastName(registerParams.getLastName());
        userRepository.save(user);

        String token = jsonWebTokenUtils.generateToken(user.getUsername());
        Map<String, Object> response = new HashMap<String, Object>();

        response.put("token", token);
        response.put("type", "bearer");
        response.put("user", user);
        return new ResponseEntity<Object>(response, HttpStatus.CREATED);
    }
}
