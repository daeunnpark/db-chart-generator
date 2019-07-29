package com.example.dbchartgenerator.Model;
import com.example.dbchartgenerator.Model.Passenger;
import org.apache.lucene.search.Query;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class SearchService {

  // Spring will inject here the entity manager object
   @PersistenceContext
   private EntityManager entityManager;

   /**
    * A basic search for the entity Passenger. The search is done by exact match per
    * keywords on fields name, city and email.
    *
    * @param text The query text.
    */
   public List search(String text) {
    System.out.println("STARTS WITH " + text);
     // get the full text entity manager
     FullTextEntityManager fullTextEntityManager =
         org.hibernate.search.jpa.Search.
         getFullTextEntityManager(entityManager);


    System.out.println("11111");
     // create the query using Hibernate Search query DSL
     QueryBuilder queryBuilder =
         fullTextEntityManager.getSearchFactory()
         .buildQueryBuilder().forEntity(Passenger.class).get();

System.out.println("2222");
     // a very basic query by keywords
     org.apache.lucene.search.Query query =
         queryBuilder
           .keyword()
           .onFields("name")
           .matching(text)
           .createQuery();

System.out.println("3333");
     // wrap Lucene query in an Hibernate Query object
     org.hibernate.search.jpa.FullTextQuery jpaQuery =
         fullTextEntityManager.createFullTextQuery(query, Passenger.class);

System.out.println("4444");
     // execute search and return results (sorted by relevance as default)
     @SuppressWarnings("unchecked")
     List results = jpaQuery.getResultList();

      System.out.println("END WITH " + results);
     return results;
   } // method search

}
