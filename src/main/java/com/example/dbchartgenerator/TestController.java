package com.example.dbchartgenerator;

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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.http.converter.HttpMessageNotReadableException;

import com.example.dbchartgenerator.Model.Data;

import java.util.Optional;

import com.example.dbchartgenerator.Model.DataService;


@RestController
@RequestMapping(path="/db")
public class TestController {

  @Autowired
  DataService dataService;


  	@RequestMapping(value= "/addAllData", method = RequestMethod.POST)
  	public @ResponseBody String addAllData (@RequestBody Data[] data) throws Exception{

        //System.out.println(data.length);

        for (Data d: data) {
            addData(d);
        }

  		return "Saved";
  	}


    @RequestMapping(value= "/addData", method = RequestMethod.POST)
  	public ResponseEntity addData (@RequestBody Data data) {

      Data existingData = (dataService.findById(data.getPassengerid())).orElse(null);

      if(existingData==null){
        dataService.saveData(data);
      } else {
        System.out.println(existingData.getPassengerid());
        System.out.println("EXISTINGGGG");
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
      }

    return new ResponseEntity(HttpStatus.OK);
  	}

    @RequestMapping(value= "/updateData", method = RequestMethod.POST)
    public @ResponseBody String updateData (@RequestBody Data data) {

      Data existingData = (dataService.findById(data.getPassengerid())).orElse(null);
      dataService.saveData(data);

  		return "Saved";
  	}

    @RequestMapping(value= "/deleteData", method = RequestMethod.POST)
  	public @ResponseBody String deleteData (@RequestBody Data data) {

      dataService.deleteData(data);

  		return "Saved";
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
