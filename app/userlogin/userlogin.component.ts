import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  email: string = '';
  password: string = '';
  user: string = '';
  msg: string = '';
  constructor(private util: NodeUtilityService, private router: Router) {
    localStorage.removeItem("user");
  }
  onSubmit(form: any) {
    this.util
      .login(form.value.email, form.value.password)
      .subscribe((data) => {
        if (data.status) {
          localStorage.setItem('user', form.value.email);
          this.msg = data.message;
          this.router.navigateByUrl('/main');
        } else {
          this.msg = data.message;
          this.router.navigateByUrl('/userlogin');
        }
      });
  }


}
