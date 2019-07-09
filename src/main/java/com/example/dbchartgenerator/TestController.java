package com.example.dbchartgenerator;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.dbchartgenerator.Model.Data;
import com.example.dbchartgenerator.Repo.DataRepo;


@RestController
public class TestController {
    @RequestMapping(value = "/echo")
    public String echo(@RequestParam (value = "request", defaultValue = "Hello!") String request) {

      return request;
    }

}
