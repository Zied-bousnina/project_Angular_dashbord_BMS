import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../../services/service.service';
import { Device } from '../../../../classes/device';
import { DescriptionDevice } from '../../../../classes/description-device';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  device:Device[]=[]
  description:DescriptionDevice[]=[]

  constructor(private router:ActivatedRoute, private service:ServiceService) {
   }

  ngOnInit(): void {
    this.device = this.service.devices.filter(r=>r.id ==this.router.snapshot.params['id'] )
    this.description = this.service.desciption.filter(r=>r.id_device ==this.router.snapshot.params['id'])
    console.log(this.device)
    console.log(this.description)

  }

}
