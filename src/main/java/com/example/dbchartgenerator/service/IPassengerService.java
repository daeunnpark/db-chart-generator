package com.example.dbchartgenerator.service;

import java.util.List;
import java.util.Optional;

import com.example.dbchartgenerator.model.Passenger;


/**
 * Interface implementing CRUD functionalities
 */
public interface IPassengerService {

  List<Passenger> findAll();
  Optional<Passenger> findById(Integer id);
  void save(Passenger p);
  void delete(Passenger p);
  void deleteAll();

}
