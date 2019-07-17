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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;


import com.example.dbchartgenerator.Model.Data;

import com.example.dbchartgenerator.Model.DataRepository;


@RestController
@RequestMapping(path="/demo")
public class TestController {
  @Autowired
  private DataRepository dataRepository;

  	@GetMapping(path="/add") // Map ONLY GET Requests
  	public @ResponseBody String addNewUser (@RequestParam Integer PassengerId,
     @RequestParam Integer Survived) {


      /*
      @RequestParam Integer Pclass,
      @RequestParam String Name,
      @RequestParam String Sex,
      @RequestParam Integer Age,
      @RequestParam String SibSp,
      @RequestParam String Parch,
      @RequestParam String Ticket,
      @RequestParam String Fare,
      @RequestParam String Cabin,
      @RequestParam String Embarked

      */

  		Data n = new Data();
      n.setPassengerId(PassengerId);
      n.setSurvived(Survived);

  		dataRepository.save(n);

  		return "Saved";
  	}

  	@GetMapping(path="/all")
  	public @ResponseBody Iterable<Data> getAllUsers() {
  		// This returns a JSON or XML with the users
  		return dataRepository.findAll();
  	}

}
