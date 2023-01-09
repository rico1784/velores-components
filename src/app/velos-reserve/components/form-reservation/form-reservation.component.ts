import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.scss']
})
export class FormReservationComponent implements OnInit{
  reservations!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.reservations = this.formBuilder.group({
      firstname:[null],
      lastname:[null],
      email:[null],
      date_reservation:[null],
      cg:[null],

    })


  }
  onSubmitForm(): void{
    console.log(this.reservations.value)
  }
}
