import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() teste!: string;
  @Input() comment!: string;
  @Input() name!: string;
  @Input() photoUrl!: string;

  time = new Date();

  constructor() {}

  ngOnInit(): void {}
}
