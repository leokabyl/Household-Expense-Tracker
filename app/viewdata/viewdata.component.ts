import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrl: './viewdata.component.css'
})
export class ViewdataComponent {
  user:string='';
  expense:any='';
  msg:string='';
  constructor(private util:NodeUtilityService,private router:Router){
    let u: any = localStorage.getItem('user');
    this.user = u;
    if(u == null || u == ''){
      this.router.navigateByUrl('/home')
    }
    this.util.display1(this.user).subscribe((data) => {
      if (data.status) {
        this.expense = data.list;
        this.msg = data.message;
      }
      this.msg = data.message;
    }); 
  
  }
  del(index:number,amount:number,category:string,date:string){
    
    this.util
        .delete1(amount,category,date)
        .subscribe((data) => {
          if (data.status) {
            console.log(data)
            this.msg = data.message;
            //this.router.navigateByUrl('/home');
          } 
          else {
            console.log(data)
            this.msg = data.message;
            //this.router.navigateByUrl('/delete');
          }
        });
        this.expense.splice(index, 1);
   }
   
}
