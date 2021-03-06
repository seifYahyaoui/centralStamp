/**
 * Created by seif on 5/23/17.
 */

import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Person} from "../model/model";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class NVRSerices {

  public url : string = "http://localhost:8080/persons";

  constructor(private _http: Http){

  }

  // public getAllPersons(){
  //
  //   return this._http.get('http://localhost:8080/persons/all')
  //     .map(response => response.json());
  // }

   public getAllPersons():Observable<Person[]> {

     return this._http.get('http://localhost:8080/persons/all')
       .map(response => {
         let persons = [];
         let res = response.json();

         for(var i = 0; i < res.length;i++){
           console.log('index : '+ i)
           let person: Person = new Person();

           person.id = res[i].id;
           person.firstName = res[i].firstName;
           person.lastName = res[i].lastName;
           person.age = res[i].age;
           persons.push(person);
         };
         return persons;
       });
   }


}
