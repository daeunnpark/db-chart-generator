package com.example.dbchartgenerator.Model;

import org.springframework.stereotype.Service;

import com.example.dbchartgenerator.Model.Data;

import java.util.List;

public interface IDataService {

  List<Data> findAll();
  Data findById(Integer id);
  void saveData(Data data);
  void deleteData(Data data);

}
