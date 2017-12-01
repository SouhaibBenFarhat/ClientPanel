import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {Client} from '../models/client'

@Injectable()
export class ClientService {


  clients: Observable<any[]>;
  client: AngularFireObject<any>;


  constructor(public af: AngularFireDatabase) {
    this.clients = this.af.list('/clients').valueChanges();  
   }
   
   getClients(){
    return this.clients;
  }
}
