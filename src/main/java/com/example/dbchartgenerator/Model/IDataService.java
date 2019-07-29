package com.example.dbchartgenerator.Model;

import org.springframework.stereotype.Service;

import com.example.dbchartgenerator.Model.Data;

import java.util.List;
import java.util.Optional;

public interface IDataService {

  List<Data> findAll();
  Optional<Data> findById(Integer id);
  void saveData(Data data);
  void deleteData(Data data);
  void deleteAll();

}
