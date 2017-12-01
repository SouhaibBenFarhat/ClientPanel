import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    balance: 0,
    email: '',
    phone: ''
  }



  constructor() { }

  ngOnInit() {
  }

}
