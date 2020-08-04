import { Component } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { UserInfo } from '../models/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  subscriptions: Subscription[] = [];
  searchResult: UserInfo[] = [];

  onLoadClick() {
    const users: UserInfo[] = [
      { firstName: "User", lastName: "One", email: "user.one@gmail.com" },
      { firstName: "User", lastName: "Two", email: "user.two@gmail.com" },
      { firstName: "User", lastName: "Three", email: "user.three@gmail.com" },
      { firstName: "User", lastName: "Four", email: "user.four@gmail.com" },
      { firstName: "User", lastName: "Five", email: "user.five@gmail.com" },
      { firstName: "User", lastName: "Six", email: "user.six@gmail.com" },
      { firstName: "User", lastName: "Seven", email: "user.seven@gmail.com" },
      { firstName: "User", lastName: "Eight", email: "user.eight@gmail.com" },
      { firstName: "User", lastName: "Nine", email: "user.nine@gmail.com" },
      { firstName: "User", lastName: "Ten", email: "user.ten@gmail.com" },
    ];

    const subscription = of(users.filter(x => Math.random() > 0.5)).subscribe(result => {
      setTimeout(() => {
        // this.searchResult = Math.random() > 0.25 ? result : [];
        this.searchResult = result;
      }, 500);
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
