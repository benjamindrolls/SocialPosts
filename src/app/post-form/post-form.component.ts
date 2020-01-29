import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../postInterface/interPost';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, IPost {
  @Input() title: string;
  @Input() thought: string;
  post: IPost

  @Output() submitted = new EventEmitter

  constructor(public dialogRef: MatDialogRef<PostFormComponent>) {}
  

  ngOnInit() {

  }

  submit(title, thought) {
    this.dialogRef.close({title, thought});
  }
}