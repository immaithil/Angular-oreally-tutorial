import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:'.app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus= "No server was created";
  serverName='InitialName';
  serverCreated=false;
  userName="";
  disableUserButton=(this.userName=="")?false:true;
  servers=['TestServer','SecondServer','ThirdServer']
  showSecret=false;
  log=[];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  } 
  
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName)
    this.serverCreationStatus='Server was created! Name is '+this.serverName;
  }
  onUpdateServerName(event:any){
    //console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  onClickAddUser(){
    this.userName=""
  }
  onToggleDetails(){
    this.showSecret=!this.showSecret;
    this.log.push(this.log.length+1)
  }

}
