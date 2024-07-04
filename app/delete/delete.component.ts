import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  email: string = '';
  password: string = '';
  user: string = '';
  msg: string = '';
  
  constructor(private util: NodeUtilityService, private router: Router) {
    let u: any = localStorage.getItem('user');
  this.user = u;
  if(u == null || u == ''){
    this.router.navigateByUrl('/home')
  }
  }
  onSubmit(form: any) {
    this.util
      .delete(form.value.email, form.value.password)
      .subscribe((data) => {
        if (data.status) {
          console.log(data)
          localStorage.removeItem('user');
          this.msg = data.message;
          this.router.navigateByUrl('/home');
        } 
        else {
          console.log(data)
          this.msg = data.message;
          this.router.navigateByUrl('/delete');
        }
      });
}
}
