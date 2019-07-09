package com.example.dbchartgenerator.Repo;

import org.springframework.data.repository.CrudRepository;

import com.example.dbchartgenerator.Model.Data;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface DataRepo extends CrudRepository<Data, Long> {

}
