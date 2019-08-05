package com.example.dbchartgenerator.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.dbchartgenerator.model.Passenger;
import com.example.dbchartgenerator.repository.PassengerRepository;


/**
 * Service class overriding default CRUD functionality
 */
@Service
public class PassengerService implements IPassengerService {

  @Autowired
  private PassengerRepository passengerRepository;

  @Override
  public void save(Passenger p){
    passengerRepository.save(p);
  }

  @Override
  public void delete(Passenger p){
    passengerRepository.delete(p);
  }

  @Override
  public void deleteAll(){
    passengerRepository.deleteAll();
  }
  @Override
  public Optional<Passenger> findById(Integer id){
    return passengerRepository.findById(id);
  }
}
