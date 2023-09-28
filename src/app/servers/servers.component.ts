import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allownewServer= false
  serverName = ''
  newServerCreation = 'No sever Found!'
  constructor(){
    setTimeout(() => {
      this.allownewServer = true
    }, 5000);
  }
  onEventServerCreate(){
    this.newServerCreation = 'Okay 1 server is now created!'
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
