package com.example.dbchartgenerator.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // Each row
public class Data {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String email;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

  public void setName(String n){
    this.name = n;
  }

  public void setEmail(String nemail){
    this.email = nemail;
  }

	//Getter/Setters for rest of fields, etc...

}
