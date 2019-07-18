package com.example.dbchartgenerator;

import java.util.Map;
import java.util.HashMap;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;



import org.hibernate.SessionFactory;
import org.hibernate.Transaction;


import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;


import com.example.dbchartgenerator.Model.Data;

import com.example.dbchartgenerator.Model.DataRepository;


@RestController
@RequestMapping(path="/demo")
public class TestController {
  @Autowired
  private DataRepository dataRepository;

  	@RequestMapping(value= "/add", method = RequestMethod.POST)
  	public @ResponseBody String addNewUser (@RequestBody Data[] data) {

    for (Data d: data) {
        dataRepository.save(d);
    }

  		return "Saved";
  	}

  	@GetMapping(path="/all")
  	public @ResponseBody Iterable<Data> getAllUsers() {
  		// This returns a JSON or XML with the users
  		return dataRepository.findAll();
  	}

}
