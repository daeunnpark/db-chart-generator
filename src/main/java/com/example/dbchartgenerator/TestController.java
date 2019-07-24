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


import com.example.dbchartgenerator.Model.Data;


import com.example.dbchartgenerator.Model.DataService;


@RestController
@RequestMapping(path="/db")
public class TestController {

  @Autowired
  DataService dataService;


  	@RequestMapping(value= "/addAllData", method = RequestMethod.POST)
  	public @ResponseBody String addAllNewData (@RequestBody Data[] data) {

      // ResponseEntity<Void>
      for (Data d: data) {
          dataService.saveData(d);
      }
      //return new ResponseEntity<Void>(HttpStatus.OK);

  		return "Saved";
  	}

    @RequestMapping(value= "/addOrUpdateData", method = RequestMethod.POST)
  	public @ResponseBody String addOrUpdateData (@RequestBody Data data) {

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
