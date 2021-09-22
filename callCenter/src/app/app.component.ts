import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router'
declare const M:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router:Router) { }
  title = 'Blubirch Appario';
  navpath():string{
    return location.href;
  }
  ngOnInit(){

  }
  ngAfterViewChecked(){
    M.AutoInit();
    
  }
  moveTo(str:String){
    this.router.navigate([str]);
  }
  isSplash():boolean{
    var spl:boolean=false;
    if(location.href.includes("splash")){
      spl=true;
    }
    return spl;
  }

}
