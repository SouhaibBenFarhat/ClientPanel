import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client;
  key: string;

  constructor(
    public clientService: ClientService,
    public router: Router,
    public flashMessagesService: FlashMessagesService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.route.snapshot.params['key'];
    this.clientService.getClientById(this.key).subscribe(client => {
      this.client = client[0] as Client;
    });

  }

}
