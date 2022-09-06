package com.hohieuluc.studentmanagementreact.api;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class ReactEntryPoint implements ErrorController {
    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    @ResponseStatus(value = HttpStatus.OK)
    public String error() {
        return "forward:/index.html";
    }

    public String getErrorPath() {
        return PATH;
    }
}
