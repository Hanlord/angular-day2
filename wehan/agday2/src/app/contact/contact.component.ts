import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = new FormControl("");
  name2 = new FormControl("");
  email = new FormControl("");
  constructor() { }

  ngOnInit(): void {
  }

}
