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
  client: Client = null;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(public clientService: ClientService,
    public router: Router,
    public flashMessagesService: FlashMessagesService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.key = this.route.snapshot.params['key'];
    this.clientService.getClientById(this.key).subscribe((data) => {
      this.client = data[0] as Client;
      console.log(this.client);
      if (this.client.balance > 0) {
        this.hasBalance = true;
      }
    })
  }

  onDeleteClick(){
    this.clientService.deleteClient(this.client).then(()=>{
      this.flashMessagesService.show('Client Deleted', { cssClass: 'alert alert-info', timeout: 4000 });
      this.showBalanceUpdateInput = false;
      this.router.navigate(['/']);
    })
  }

  updateBalance(){
    this.clientService.updateClient(this.client).then((client)=>{
      this.flashMessagesService.show('Client Updated', { cssClass: 'alert alert-success', timeout: 4000 });
      this.showBalanceUpdateInput = false;
      this.router.navigate(['/client/'+this.client.key]);

    });

  }

}
