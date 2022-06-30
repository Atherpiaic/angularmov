import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {
  constructor() {}
  @Input()
  markdownContent = '';
  ngOnInit(): void {}
}
