package com.example.dbchartgenerator.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dbchartgenerator.model.Passenger;
import com.example.dbchartgenerator.service.SearchService;
import com.example.dbchartgenerator.service.PassengerService;


@RestController
@RequestMapping(path="/db")
public class DbController {

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
    public @ResponseBody ResponseEntity<Object>  search(@RequestParam String keyword) {

      List <Passenger> result = null;

    try {

      result = searchservice.search(keyword);

      if(result.size()>0){
        for(Passenger p : result){
          System.out.println("Id: "+ p.getPassengerid() + " Age: " + p.getAge() + "Name: " + p.getName() );
  		  }
      }else{
        System.out.println("NO RESULT");
      }
    }
    catch (Exception ex) {
      // here you should handle unexpected errors
      // ...
      // throw ex;
    }
      return new ResponseEntity<Object>(result, HttpStatus.OK);
    }


  	@GetMapping(path="/all")
  	public @ResponseBody Iterable<Passenger> getAllPassengers() {
  		return passengerService.findAll();
  	}

}
