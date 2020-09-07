import { Component, OnInit, ɵConsole } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-admin-edit-item',
  templateUrl: './admin-edit-item.component.html',
  styleUrls: ['./admin-edit-item.component.css']
})
export class AdminEditItemComponent implements OnInit {
  id={token:''}
  ItemList=[]
  public urlParams="";
  private param={token:'', adminToken:''}
  private item={
    name:"",
    description:"",
    date:"",
    imageUrl:"",
    amount: 1,
    price:""}
  constructor(private _eventServive:EventService,private _auth: AuthService, private _router:Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    var url=new URLSearchParams(location.search).toString();
    console.log( url)
    this.param.token =url.substring(4,url.length);
    this.param.adminToken=localStorage.getItem('token')
    this._auth.verifyItem(this.param)
    .subscribe(
      res => {
        this.ItemList=[]
            this.ItemList.push(res);
  
      },err =>console.log(err)          
        )
  }

  editItem(){
    console.log(this.item.amount)
    if(this.item.name != ''){
      this.ItemList[0].name = this.item.name
    }else{}
    if(this.item.description != ''){
      this.ItemList[0].description = this.item.description
    }else{}
    if(this.item.amount !== null){
      this.ItemList[0].amount = this.item.amount
    }else{}
    if(this.item.price != ''){
      this.ItemList[0].price = this.item.price
    }else{}
    if(this.item.date != ''){
      this.ItemList[0].date = this.item.date
    }else{}
    this._auth.editItem(this.ItemList[0])
    .subscribe(
      res=>{
        
      }
    )
  }
  cancel(){
    this._router.navigate(["/adminItemManagePage"])
  }

}
