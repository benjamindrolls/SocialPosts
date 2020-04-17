import { Component, OnInit, Input, Inject } from '@angular/core';
import { IPost } from '../postInterface/interPost';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PostFormComponent } from '../post-form/post-form.component';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit{

  constructor( public dialog: MatDialog)  {
  }

  @Input() posts: IPost[];
  @Input() title: string;
  @Input() thought: string;

  ngOnInit() {
    this.posts = [{
      title: "post 1",
      thought: "Welcome to rolling in my thoughts"
    },
    {
      title: "post 2",
      thought: "its your own personal twitter or blog"
    },
    {
      title: "post 3",
      thought: "press the new thought button enter your title and description and post"
    },
    {
      title: "post 4",
      thought: "use the trash can to delete thoughts"
    },
    {
      title: "post 4",
      thought: "feel free to delete these steps and enjoy!"
    },
  ]
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostFormComponent, {
      width : "50%"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed", result)
      this.posts = [result, ...this.posts]
    });
  }

  deleteItem($event, index) {
    this.posts.splice(index, 1);
    this.posts = [...this.posts];
    console.log(index)
  }

}
