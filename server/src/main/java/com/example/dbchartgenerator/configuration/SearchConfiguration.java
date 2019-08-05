package com.example.dbchartgenerator.configuration;

import javax.persistence.EntityManagerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.dbchartgenerator.service.SearchService;

/**
 * Configuration class for SearchService
 */

@Configuration
public class SearchConfiguration {

	@Autowired
	private EntityManagerFactory entityManagerFactory;

	@Bean
	SearchService searchService() {
		SearchService searchService = new SearchService(entityManagerFactory);
		searchService.initializeSearch();
		return searchService;
	}

}
