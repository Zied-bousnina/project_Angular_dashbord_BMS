import { Component, OnInit } from '@angular/core';
import { Admin } from '../../classes/admin';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin =new Admin()
  notAdmin: boolean =false;
  isAdmin:Admin[]=[]

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  verif(admin:Admin){
    this.isAdmin = this.service.Admin.filter(r=>r.email ==admin.email && r.password ==admin.password)
    if(this.isAdmin.length ){
      this.router.navigate(['admin'])
      this.service.auth(true)
    }else{
      this.notAdmin ==true
    }

  }

}
