import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8POC';

  constructor(private http: HttpClient) { }
  callApi() {
    // this.http.get('https://reqres.in/api/users?page=2')
    // this.http.get('https://svytla.adm.aamc.org:4200/cim-apps/#/')
    this.http.get('https://www.irctc.co.in/nget/')
      .subscribe(data => {
        console.log(data);
      })
  }
}
