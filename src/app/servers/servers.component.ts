import { Component, EnvironmentInjector, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl:'./servers.component.html'
})
export class ServersComponent implements OnInit {
allowNewServer= false;
serverCreationStatus='No server was created!'
serverName='';
serverCreated=false;
servers =['testServer1', 'testServer2']

constructor(){
  setTimeout(()=>
  {
    this.allowNewServer=true;
  }, 2000)
}

ngOnInit(): void {
  
}
onCreateServer(){
  this.serverCreated= true;
  this.servers.push(this.serverName);
  this.serverCreationStatus='Server was created'+this.serverName
}
onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement> event.target).value;
}
}
