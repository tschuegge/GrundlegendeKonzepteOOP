import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Rad } from '../models/rad';
import { ReifenTyp } from '../models/reifen-typ';

@Component({
  selector: 'app-constructor-rad',
  templateUrl: './constructor-rad.component.html'
})
export class ConstructorRadComponent {

  form: UntypedFormGroup;
  typen = ReifenTyp;

  constructor(
    private activeModal: NgbActiveModal
  ) {
    this.form = new UntypedFormGroup({
      "name": new UntypedFormControl(null, Validators.required),
      "reifentyp": new UntypedFormControl(null, Validators.required)
    });
  }


  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.activeModal.close(new Rad(this.form.value.name, this.form.value.reifentyp));
    }
  }

  close() {
    this.activeModal.dismiss();
  }

}
