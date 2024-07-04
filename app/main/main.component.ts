import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

interface Expense {
  category: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  expenses: Expense[] = [];
  totalAmount: number = 0;
  selectedCategory: string = '';
  amount: number = 0;
  date: string = '';
  user: string = '';
  msg: string = '';

  constructor(private util: NodeUtilityService, private router: Router) {
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('/home');
    }
    this.util.display1(this.user).subscribe((data) => {
      if (data.status) {
        this.expenses = data.list;
        this.totalAmount = data.total;
        this.msg = data.message;
      }
      this.msg = data.message;
    });
  }

  addExpense(form: any): void {
    if (this.selectedCategory === '') {
      alert('Please select a category');
      return;
    }
    if (isNaN(form.value.amount) || form.value.amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (!form.value.date.trim()) {
      alert('Please select a date');
      return;
    }

    const expense: Expense = {
      category: this.selectedCategory,
      amount: form.value.amount,
      date: form.value.date
    };
    this.expenses.push(expense);
    this.onSubmit(form);
    this.totalAmount += form.value.amount;
    this.selectedCategory=''
    this.date=''
  }

  deleteExpense(index: number, amount: number, category: string, date: string): void {
    this.del(amount, category, date);
    this.expenses.splice(index, 1);
    this.totalAmount -= amount;
  }

  logout(): void {
    localStorage.removeItem("user");
    this.router.navigateByUrl('/home');
  }

  onSubmit(form: any) {
    this.util.insert1(this.user, form.value.category, form.value.amount, form.value.date)
      .subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
        } else {
          this.msg = data.message;
        }
      });
  }

  del(amount: number, category: string, date: string): void {
    this.util.delete1(amount, category, date)
      .subscribe((data) => {
        if (data.status) {
          console.log(data);
          this.msg = data.message;
        } else {
          console.log(data);
          this.msg = data.message;
        }
      });
  }
}
