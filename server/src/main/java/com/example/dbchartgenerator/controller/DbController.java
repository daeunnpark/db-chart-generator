package com.example.dbchartgenerator.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.example.dbchartgenerator.model.Passenger;
import com.example.dbchartgenerator.service.SearchService;
import com.example.dbchartgenerator.service.PassengerService;


/**
 * Controller to handle API request from frontend
 * @param path="/db" path required
 */
@RestController
@RequestMapping(path="/db")
public class DbController {

  @Autowired
  PassengerService passengerService;

  @Autowired
  SearchService searchService;

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
    public @ResponseBody ResponseEntity<Object>  search(@RequestParam String keyword) {
      List <Passenger> result = searchService.search(keyword);
      return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

}
