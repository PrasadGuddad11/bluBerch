import { Component ,OnInit} from '@angular/core';
declare const M:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Blubirch Appario';
  ngOnInit(){

  }
  ngAfterViewChecked(){
    M.AutoInit();
    
  }


}
