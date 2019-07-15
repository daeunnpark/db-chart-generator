package com.example.dbchartgenerator.Model;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.dbchartgenerator.Model.Data;

public interface IDataService{
  List <Data> findAll();
  /*List<Data> findById(String id);*/
  void saveOrUpdateData(Data data);
	void deleteData(Data data);
}
