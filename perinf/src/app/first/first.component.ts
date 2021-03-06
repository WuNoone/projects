import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  constructor(private router: Router,
    private appComponent: AppComponent) { }
  data = {
    name: '',
    sex: '男',
    age: '',
    tel: '',
    address: '',
  };

  onSaveInputClick(name: string, sex: string, age: number, tel: number, address: string): void {
    const userInformation = {
      name: this.data.name,
      sex: this.data.sex,
      age: age,
      tel: tel,
      address: address,
    };

    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    localStorage.setItem('information', JSON.stringify(userInformation));
    this.router.navigate(['edit']);
    this.appComponent.show = false;
  }

  ngOnInit() {
  }

}
