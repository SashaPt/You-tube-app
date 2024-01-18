import { Component, OnInit } from '@angular/core';
import {
  FormArray, FormControl, FormGroup, Validators,
} from '@angular/forms';
import { DateValidator } from '../../validators/date.validator';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  createCardForm!: FormGroup;

  ngOnInit(): void {
    this.createCardForm = new FormGroup({
      title: new FormControl<string | null>('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl<string | null>('', [
        Validators.maxLength(255),
      ]),
      img: new FormControl<string | null>('', [Validators.required]),
      video: new FormControl<string | null>('', [Validators.required]),
      date: new FormControl<string | null>('', [
        Validators.required,
        DateValidator(),
      ]),
      tags: new FormArray([
        new FormGroup({
          tag: new FormControl('', [Validators.required]),
        }),
      ]),
    });
  }

  get title() {
    return this.createCardForm.get('title');
  }

  get description() {
    return this.createCardForm.get('description');
  }

  get img() {
    return this.createCardForm.get('img');
  }

  get video() {
    return this.createCardForm.get('video');
  }

  get date() {
    return this.createCardForm.get('date');
  }

  get tags() {
    return this.createCardForm.get('tags') as FormArray;
  }

  onSubmit() {
    const val = this.createCardForm.value;
    console.log(val); // eslint-disable-line
  }

  onReset() {
    this.createCardForm.reset();
    this.tags.clear();
    this.tags.push(this.newTag());
  }

  newTag(): FormGroup {// eslint-disable-line
    return new FormGroup({
      tag: new FormControl(''),
    });
  }

  addTag() {
    if (this.tags.length < 5) {
      this.tags.push(this.newTag());
    }
  }

  deleteTag(index: number) {
    this.tags.removeAt(index);
  }
}
