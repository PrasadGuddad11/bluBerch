import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    document.getElementById("headtag")?.setAttribute("style","opacity:0;");
    document.getElementById("foottag")?.setAttribute("style","opacity:0;");
    document.getElementById("sidetag")?.setAttribute("style","opacity:0;");
    
    setTimeout(()=>{
      document.getElementById("headtag")?.setAttribute("style","opacity:1;");
      document.getElementById("foottag")?.setAttribute("style","opacity:1;");
      document.getElementById("sidetag")?.setAttribute("style","opacity:1;");
      this.router.navigate(['home']);
    },3000);    
  }

}
