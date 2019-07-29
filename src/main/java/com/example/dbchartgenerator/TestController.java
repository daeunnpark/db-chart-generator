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

import com.example.dbchartgenerator.Model.Data;

import java.util.Optional;

import com.example.dbchartgenerator.Model.SearchService;
import com.example.dbchartgenerator.Model.DataService;


@RestController
@RequestMapping(path="/db")
public class TestController {

  @Autowired
  DataService dataService;

  @Autowired
  SearchService searchservice;

    @PostMapping("/addAllData")
  	public ResponseEntity addAllData(@RequestBody Data[] data){
        dataService.deleteAll();

        for (Data d: data) {
            addData(d);
        }

  		return new ResponseEntity(HttpStatus.OK);
  	}

    @PostMapping("/addData")
  	public ResponseEntity addData(@RequestBody Data data) {

      Data existingData = (dataService.findById(data.getPassengerid())).orElse(null);

      if(existingData==null){
        dataService.saveData(data);
      } else {
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
      }

      return new ResponseEntity(HttpStatus.OK);
  	}

    @PutMapping("/updateData")
    public ResponseEntity updateData(@RequestBody Data data) {

      dataService.saveData(data);

  		return new ResponseEntity(HttpStatus.OK);
  	}

    @DeleteMapping("/deleteData")
  	public ResponseEntity deleteData(@RequestBody Data data) {

      dataService.deleteData(data);

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
  	public @ResponseBody Iterable<Data> getAllUsers() {
  		return dataService.findAll();
  	}

}

      // ResponseEntity<Void>
//  System.out.println(dataService.findAll().size());
//System.out.println(dataService.findAll().size());
//return new ResponseEntity<Void>(HttpStatus.OK);
