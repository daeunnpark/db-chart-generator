package com.example.dbchartgenerator.Model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dbchartgenerator.Model.Data;
import com.example.dbchartgenerator.Model.DataRepository;


@Service
public class DataService implements IDataService {

    @Autowired
    private DataRepository dataRepository;

    @Override
    public List<Data> findAll() {
        return (List<Data>) dataRepository.findAll();
    }

    /*
    @Override
    List<Data> findById(String id){
      return (List<Data>) dataRepository.findById(id);
    }

*/
    @Override
    public void saveOrUpdateData(Data data){
      dataRepository.save(data);

    }
  	public void deleteData(Data data){
      dataRepository.delete(data);
    }
}
