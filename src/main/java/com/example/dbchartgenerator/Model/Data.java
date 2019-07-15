package com.example.dbchartgenerator.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "DataTable")
public class Data {



    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String name;

    private String email;


    /**
  	* Default Data constructor
  	*/
  	public Data(String id, String name, String email) {
  		super();
  		this.id = id;
  		this.name = name;
  		this.email = email;
  	}

	//Getter/Setters for rest of fields, etc...


	/**
	* Returns value of id
	* @return
	*/
	public String getId() {
		return this.id;
	}

	/**
	* Sets new value of id
	* @param
	*/
	public void setId(String id) {
		this.id = id;
	}

	/**
	* Returns value of name
	* @return
	*/
	public String getName() {
		return this.name;
	}

	/**
	* Sets new value of name
	* @param
	*/
	public void setName(String name) {
		this.name = name;
	}

	/**
	* Returns value of email
	* @return
	*/
	public String getEmail() {
		return this.email;
	}

	/**
	* Sets new value of email
	* @param
	*/
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	* Default empty Data constructor
	*/
	public Data() {
		super();
	}


}
