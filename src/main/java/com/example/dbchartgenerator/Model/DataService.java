package com.example.dbchartgenerator.Model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbchartgenerator.Model.Data;
import com.example.dbchartgenerator.Model.DataRepository;

import java.util.List;
import java.util.Optional;


@Service
public class DataService implements IDataService {

  @Autowired
  private DataRepository dataRepository;

  @Override
  public List<Data> findAll() {
          return (List<Data>) dataRepository.findAll();
  }

  @Override
  public Optional<Data> findById(Integer id){
          return dataRepository.findById(id);
  }

  @Override
  public void saveData(Data data){
          dataRepository.save(data);
  }

  @Override
  public void deleteData(Data data){
          dataRepository.delete(data);
  }
}
