import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  key: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(public clientService: ClientService,
    public router: Router,
    public flashMessageService: FlashMessagesService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.key = this.route.snapshot.params['key'];
    this.clientService.getClientById(this.key).subscribe((client)=>{
      console.log(client);
    })
  }

}
