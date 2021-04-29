import { Component, OnInit } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
    selector : 'app-general',
    templateUrl : './general.component.html',
    styleUrls : ['./general.component.css'],
    providers : [CommonService]
})
export class GeneralComponent implements OnInit {
    constructor(private userService : CommonService) {

    }

    ngOnInit(){
       this.userService.getAllUsers()
       .then( users =>{
           const resp = users['data'];
           console.log(resp)
       })
       .then(res => {
           console.log(res)
       })
    }
}