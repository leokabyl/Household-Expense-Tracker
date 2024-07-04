import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // Import NgForm for form validation

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
msg:string='';
constructor(private util:NodeUtilityService,private router:Router){}
onSubmit(form: NgForm) {
  if (form.invalid) { // Check if the form is invalid
    this.msg = 'Please correct the errors in the form.';
    return;
  }
  // Handle form submission logic here
  this.msg = 'Form submitted successfully!';
  this.Submit(form)
}
 Submit(form: any) {
 this.util
 .insert(form.value.name, 
   form.value.email, 
   form.value.age, 
   form.value.gender, 
   form.value.phone, 
   form.value.password, 
   form.value.confirm_password
 )
 .subscribe((data) => {
 if (data.status) {
  this.msg = data.message;
  this.router.navigateByUrl('/userlogin');

 } 
 else
 {
  this.msg = data.message;
  this.router.navigateByUrl('/register');
 }
 });
 }
}
