import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.scss']
})
export class UserActiveComponent implements OnInit {

   userArr: any[] = [];
   constructor(private _activeRouter: ActivatedRoute) {
     this._activeRouter.data.subscribe((res) => {
       console.log(res);
       let user = res['userdata'];
       // console.log(userArr);
       this.userArr = user.filter((u: any) => u.id % 2 !== 0);
       console.log(this.userArr);
     });
   }

  ngOnInit(): void {
  }

}
