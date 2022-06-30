import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from 'src/app/utilities/utils';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.css'],
})
export class InputImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageBase64: string;

  @Output()
  onImageSelected = new EventEmitter<File>();
  @Input()
  urlCurrentImage = '';

  change(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file).then((value: any) => (this.imageBase64 = value));
      this.onImageSelected.emit(file);
    }
  }
}
