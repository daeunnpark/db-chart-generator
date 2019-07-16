package com.example.dbchartgenerator.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "DataTable")
public class Data {



    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name = "col1")
    private String col1;
    @Column(name = "col2")
    private String col2;
    /*
    private String col3;
    private String col4;
    private String col5;

    private String col6;
    private String col7;
    private String col8;
    private String col9;
    private String col10;
    */





	/**
	* Returns value of id
	* @return
	*/
	public Integer getId() {
		return this.id;
	}

	/**
	* Sets new value of id
	* @param
	*/
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	* Returns value of col1
	* @return
	*/
	public String getCol1() {
		return this.col1;
	}

	/**
	* Sets new value of col1
	* @param
	*/
	public void setCol1(String col1) {
		this.col1 = col1;
	}

	/**
	* Returns value of col2
	* @return
	*/
	public String getCol2() {
		return this.col2;
	}

	/**
	* Sets new value of col2
	* @param
	*/
	public void setCol2(String col2) {
		this.col2 = col2;
	}
}
