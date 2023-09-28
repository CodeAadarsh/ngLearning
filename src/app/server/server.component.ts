import { Component } from "@angular/core";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class serverComponent{
    serverId:number= 12;
    serverStatus:string = "hello";
    getServerStatus(){
        return this.serverStatus
    }
}