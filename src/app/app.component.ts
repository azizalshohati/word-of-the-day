import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-of-the-day'; 


  // public app: AppService[];

  // constructor( private appService: AppService) { }

  // public getApp(): void{
  //   this.appService.getApp().subscribe
  // }

}
NgModule({
  // Static, that is compiler configuration
  declarations: [], // Configure the selectors
  entryComponents: [], // Generate the host factory

  // Runtime, or injector configuration
  providers: [], // Runtime injector configuration

  // Composability / Grouping
  imports: [], // composing NgModules together
  exports: [] // making NgModules available to other parts of the app
})

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}