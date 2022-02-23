import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rover-select',
  templateUrl: './rover-select.component.html',
  styleUrls: ['./rover-select.component.scss']
})
export class RoverSelectComponent implements OnInit {
  @Output() selected: EventEmitter<string> = new EventEmitter();
  rovers: string[] = ['curiosity', 'opportunity', 'spirit'];
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      rover: ['curiosity']
    });
  }

  onChange(): void {
    this.selected.emit(this.rover.value);
  }

  get rover(): AbstractControl {
    return this.form?.get('rover');
  }
}
