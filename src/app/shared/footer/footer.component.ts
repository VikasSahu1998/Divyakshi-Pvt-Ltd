import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ipAddress!: string;
  constructor(private api: ApiService,) { }

    // this.getIP();
  
  // getIP() {
  //   this.api.getIPAddress().subscribe((res: any) => {
  //     this.ipAddress = res.ip;
  //   });
  // }
  
  ngOnInit() {


}
}