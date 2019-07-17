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
public class Data{

    @Id
    //@GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer PassengerId;
    private Integer Survived;
    private Integer Pclass;
    private String Name;
    private String Sex;
    private Integer Age;
    private String SibSp;
    private String Parch;
    private String Ticket;
    private String Fare;
    private String Cabin;
    private String Embarked;




	/**
	* Returns value of PassengerId
	* @return
	*/
	public Integer getPassengerId() {
		return this.PassengerId;
	}

	/**
	* Sets new value of PassengerId
	* @param
	*/
	public void setPassengerId(Integer PassengerId) {
		this.PassengerId = PassengerId;
	}

	/**
	* Returns value of Survived
	* @return
	*/
	public Integer getSurvived() {
		return this.Survived;
	}

	/**
	* Sets new value of Survived
	* @param
	*/
	public void setSurvived(Integer Survived) {
		this.Survived = Survived;
	}

	/**
	* Returns value of Name
	* @return
	*/
	public String getName() {
		return this.Name;
	}

	/**
	* Sets new value of Name
	* @param
	*/
	public void setName(String Name) {
		this.Name = Name;
	}

	/**
	* Returns value of Sex
	* @return
	*/
	public String getSex() {
		return this.Sex;
	}

	/**
	* Sets new value of Sex
	* @param
	*/
	public void setSex(String Sex) {
		this.Sex = Sex;
	}

	/**
	* Returns value of Age
	* @return
	*/
	public Integer getAge() {
		return this.Age;
	}

	/**
	* Sets new value of Age
	* @param
	*/
	public void setAge(Integer Age) {
		this.Age = Age;
	}

	/**
	* Returns value of SibSp
	* @return
	*/
	public String getSibSp() {
		return this.SibSp;
	}

	/**
	* Sets new value of SibSp
	* @param
	*/
	public void setSibSp(String SibSp) {
		this.SibSp = SibSp;
	}

	/**
	* Returns value of Parch
	* @return
	*/
	public String getParch() {
		return this.Parch;
	}

	/**
	* Sets new value of Parch
	* @param
	*/
	public void setParch(String Parch) {
		this.Parch = Parch;
	}

	/**
	* Returns value of Ticket
	* @return
	*/
	public String getTicket() {
		return this.Ticket;
	}

	/**
	* Sets new value of Ticket
	* @param
	*/
	public void setTicket(String Ticket) {
		this.Ticket = Ticket;
	}

	/**
	* Returns value of Fare
	* @return
	*/
	public String getFare() {
		return this.Fare;
	}

	/**
	* Sets new value of Fare
	* @param
	*/
	public void setFare(String Fare) {
		this.Fare = Fare;
	}

	/**
	* Returns value of Cabin
	* @return
	*/
	public String getCabin() {
		return this.Cabin;
	}

	/**
	* Sets new value of Cabin
	* @param
	*/
	public void setCabin(String Cabin) {
		this.Cabin = Cabin;
	}

	/**
	* Returns value of Embarked
	* @return
	*/
	public String getEmbarked() {
		return this.Embarked;
	}

	/**
	* Sets new value of Embarked
	* @param
	*/
	public void setEmbarked(String Embarked) {
		this.Embarked = Embarked;
	}
}
