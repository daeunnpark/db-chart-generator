package com.example.dbchartgenerator.service;

import java.util.List;
import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import org.apache.lucene.search.Query;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.hibernate.search.jpa.FullTextEntityManager;

import com.example.dbchartgenerator.model.Passenger;


/**
 * SearchService class using Hibernate Search
 */
@Service
public class SearchService {

  private final EntityManager entityManager;

  @Autowired
  public SearchService(final EntityManagerFactory entityManagerFactory) {
          this.entityManager = entityManagerFactory.createEntityManager();
  }

  @PostConstruct
  public void initializeSearch() {

          try {
                  FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(entityManager);
                  fullTextEntityManager.createIndexer().startAndWait();
          } catch (InterruptedException e) {
                  // TODO Auto-generated catch block
                  e.printStackTrace();
          }
  }

  @Transactional
  public List<Passenger> fuzzySearch(String searchTerm){

          FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(entityManager);
          QueryBuilder qb = fullTextEntityManager.getSearchFactory().buildQueryBuilder().forEntity(Passenger.class).get();
          Query luceneQuery = qb.keyword().fuzzy().withEditDistanceUpTo(1).withPrefixLength(1).onFields("name")
                              .matching(searchTerm).createQuery();

          javax.persistence.Query jpaQuery = fullTextEntityManager.createFullTextQuery(luceneQuery, Passenger.class);

          List<Passenger> PassengerList = null;
          try {
                  PassengerList  = jpaQuery.getResultList();

          } catch (NoResultException nre) {
                  //logger.warn("No result found");

          }

          return PassengerList;

  }
}
