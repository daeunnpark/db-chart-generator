package com.example.dbchartgenerator.model;

import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;


import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Index;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.search.annotations.FieldBridge;
import org.hibernate.search.bridge.builtin.IntegerBridge;
//import org.hibernate.annotations.GenericGenerator;


/**
 * Represents database table of passengers, primary key is passengerid
 * Integer fields are treated as String
 */
@Entity
@Table(name = "Passengers")
@Indexed
public class Passenger {

  @Id
  @FieldBridge(impl = IntegerBridge.class)
  private Integer passengerid;

  @Field
  @FieldBridge(impl = IntegerBridge.class)
  private Integer survived;

  @Field
  @FieldBridge(impl = IntegerBridge.class)
  private Integer pclass;

  @Field
  private String name;

  @Field
  private String sex;

  @Field
  @FieldBridge(impl = IntegerBridge.class)
  private Integer age;

  @Field
  @FieldBridge(impl = IntegerBridge.class)
  private Integer sibsp;

  @Field
  private String parch;

  @Field
  private String ticket;

  @Field
  private String fare;

  @Field
  private String cabin;

  @Field
  private String embarked;

  /**
   * Default Passenger constructor
   */
  public Passenger(Integer passengerid, Integer survived, String name,
                          String sex, Integer age, Integer sibsp,
                          String parch, String ticket, String fare,
                                    String cabin, String embarked) {

          super();
          this.passengerid = passengerid;
          this.survived = survived;
          this.name = name;
          this.sex = sex;
          this.age = age;
          this.sibsp = sibsp;
          this.parch = parch;
          this.ticket = ticket;
          this.fare = fare;
          this.cabin = cabin;
          this.embarked = embarked;
  }


// TODO: remove getter/setter?
  /**
   * Returns value of passengerid
   * @return
   */
  public Integer getPassengerid() {
          return this.passengerid;
  }

  /**
   * Sets new value of passengerid
   * @param
   */
  public void setPassengerid(Integer passengerid) {
          this.passengerid = passengerid;
  }

  /**
   * Returns value of survived
   * @return
   */
  public Integer getSurvived() {
          return this.survived;
  }

  /**
   * Sets new value of survived
   * @param
   */
  public void setSurvived(Integer survived) {
          this.survived = survived;
  }

  /**
   * Returns value of pclass
   * @return
   */
  public Integer getPclass() {
          return this.pclass;
  }

  /**
   * Sets new value of pclass
   * @param
   */
  public void setPclass(Integer pclass) {
          this.pclass = pclass;
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
   * Returns value of sex
   * @return
   */
  public String getSex() {
          return this.sex;
  }

  /**
   * Sets new value of sex
   * @param
   */
  public void setSex(String sex) {
          this.sex = sex;
  }

  /**
   * Returns value of age
   * @return
   */
  public Integer getAge() {
          return this.age;
  }

  /**
   * Sets new value of age
   * @param
   */
  public void setAge(Integer age) {
          this.age = age;
  }

  /**
   * Returns value of sibsp
   * @return
   */
  public Integer getSibsp() {
          return this.sibsp;
  }

  /**
   * Sets new value of sibsp
   * @param
   */
  public void setSibsp(Integer sibsp) {
          this.sibsp = sibsp;
  }

  /**
   * Returns value of parch
   * @return
   */
  public String getParch() {
          return this.parch;
  }

  /**
   * Sets new value of parch
   * @param
   */
  public void setParch(String parch) {
          this.parch = parch;
  }

  /**
   * Returns value of ticket
   * @return
   */
  public String getTicket() {
          return this.ticket;
  }

  /**
   * Sets new value of ticket
   * @param
   */
  public void setTicket(String ticket) {
          this.ticket = ticket;
  }

  /**
   * Returns value of fare
   * @return
   */
  public String getFare() {
          return this.fare;
  }

  /**
   * Sets new value of fare
   * @param
   */
  public void setFare(String fare) {
          this.fare = fare;
  }

  /**
   * Returns value of cabin
   * @return
   */
  public String getCabin() {
          return this.cabin;
  }

  /**
   * Sets new value of cabin
   * @param
   */
  public void setCabin(String cabin) {
          this.cabin = cabin;
  }

  /**
   * Returns value of embarked
   * @return
   */
  public String getEmbarked() {
          return this.embarked;
  }

  /**
   * Sets new value of embarked
   * @param
   */
  public void setEmbarked(String embarked) {
          this.embarked = embarked;
  }

  /**
   * Default empty Passenger constructor
   */
  public Passenger() {
          super();
  }


}
