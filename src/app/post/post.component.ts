import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPost } from '../postInterface/interPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;

  @Output() deleted = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  onDelete() {
    this.deleted.emit();
  }

}
