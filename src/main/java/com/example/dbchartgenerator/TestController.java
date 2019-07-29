package com.example.dbchartgenerator;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;


import java.util.List;

import org.springframework.http.converter.HttpMessageNotReadableException;

import com.example.dbchartgenerator.Model.Passenger;

import java.util.Optional;

import com.example.dbchartgenerator.Model.SearchService;
import com.example.dbchartgenerator.Model.PassengerService;


@RestController
@RequestMapping(path="/db")
public class TestController {

  @Autowired
  PassengerService passengerService;

  @Autowired
  SearchService searchservice;

    @PostMapping("/addAll")
  	public ResponseEntity addAllPassengers(@RequestBody Passenger[] passengers){
        passengerService.deleteAll();

        for (Passenger p: passengers) {
            addPassenger(p);
        }

  		return new ResponseEntity(HttpStatus.OK);
  	}

    @PostMapping("/add")
  	public ResponseEntity addPassenger(@RequestBody Passenger p) {

      Passenger existingPassenger = (passengerService.findById(p.getPassengerid())).orElse(null);

      if(existingPassenger==null){
        passengerService.save(p);
      } else {
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
      }

      return new ResponseEntity(HttpStatus.OK);
  	}

    @PutMapping("/update")
    public ResponseEntity updatePassenger(@RequestBody Passenger p) {

      passengerService.save(p);

  		return new ResponseEntity(HttpStatus.OK);
  	}

    @DeleteMapping("/delete")
  	public ResponseEntity deletePassenger(@RequestBody Passenger p) {

      passengerService.delete(p);

  		return new ResponseEntity(HttpStatus.OK);
  	}

    @GetMapping("/search")
    public ResponseEntity search(@RequestParam String keyword) {

      System.out.println(keyword);

    List searchResults = null;
    try {
      searchResults = searchservice.search(keyword);
    }
    catch (Exception ex) {
      // here you should handle unexpected errors
      // ...
      // throw ex;
    }
      return new ResponseEntity(HttpStatus.OK);
    }


  	@GetMapping(path="/all")
  	public @ResponseBody Iterable<Passenger> getAllPassengers() {
  		return passengerService.findAll();
  	}

}

      // ResponseEntity<Void>
//  System.out.println(PassengerService.findAll().size());
//System.out.println(PassengerService.findAll().size());
//return new ResponseEntity<Void>(HttpStatus.OK);
