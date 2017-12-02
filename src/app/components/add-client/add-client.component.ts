import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  disableBalanceOnAdd: boolean = true;
  client: Client = {
    key:'',
    firstName: '',
    lastName: '',
    balance: 0,
    email: '',
    phone: ''
  }



  constructor(public flashMessagesService: FlashMessagesService, public router: Router, public clientService : ClientService) {

  }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }


    if (!valid) {
      this.flashMessagesService.show('Please Fill in all fields', { cssClass: 'alert alert-danger', timeout: 4000 });
      this.router.navigate(['add-client']);
    } else {

      this.clientService.newClient(value).then((client)=>{
        this.flashMessagesService.show('Client Successufully added', { cssClass: 'alert alert-success', timeout: 4000 });
        this.router.navigate(['/']);
      },reject=>{
        console.log('error');
      });

    }


  }

}
