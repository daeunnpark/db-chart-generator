package com.example.dbchartgenerator.Model;
import com.example.dbchartgenerator.Model.Passenger;
import com.example.dbchartgenerator.Model.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PassengerService implements IPassengerService {

  @Autowired
  private PassengerRepository passengerRepository;

  @Override
  public List<Passenger> findAll() {
          return (List<Passenger>) passengerRepository.findAll();
  }

  @Override
  public Optional<Passenger> findById(Integer id){
          return passengerRepository.findById(id);
  }

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
}
