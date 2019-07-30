package com.example.dbchartgenerator.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.dbchartgenerator.model.Passenger;


/**
 * PassengerRepository Interface extending Spring CrudRepository
 */
public interface PassengerRepository extends CrudRepository<Passenger, Integer> {

}
