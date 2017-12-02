import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/client'
import { Promise } from 'q';

@Injectable()
export class ClientService {


  clients: Observable<any[]>;


  constructor(public af: AngularFireDatabase) {
    this.clients = this.af.list('/clients').valueChanges();
  }

  getClients() {
    return this.clients;
  }


  newClient(client: Client) {
    let key = new Date().getTime();
    client.key = key.toString();
    return this.af.object('/clients/'+key).set(client);
  }

  getClientById(key: string) {
    return this.af.list('/clients/',ref => ref.orderByChild('key').equalTo(key)).valueChanges();
  }

  updateClient(client:Client){
    return this.af.object('/clients/'+client.key).set(client);
  }
  deleteClient(client:Client){
    return this.af.object('/clients/'+client.key).remove();
    
  }
}
