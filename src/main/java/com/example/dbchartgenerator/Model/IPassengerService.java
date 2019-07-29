package com.example.dbchartgenerator.Model;
import com.example.dbchartgenerator.Model.Passenger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface IPassengerService {

List<Passenger> findAll();
Optional<Passenger> findById(Integer id);
void save(Passenger p);
void delete(Passenger p);
void deleteAll();

}
