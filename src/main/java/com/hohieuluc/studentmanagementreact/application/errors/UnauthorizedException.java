package com.hohieuluc.studentmanagementreact.application.errors;

import org.springframework.http.HttpStatus;

public class UnauthorizedException extends CustomException{

    public UnauthorizedException(String message) {
        super(message, HttpStatus.UNAUTHORIZED);
    }
    
}
