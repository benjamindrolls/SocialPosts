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
      title: "test",
      thought: "testing out angular"
    },
    {
      title: "test part 5",
      thought: "even more testing for my posting pleasure"
    },
    {
      title: "test part 33",
      thought: "even more testing for my posting pleasure"
    },
    {
      title: "test part 5",
      thought: "even more testing for my posting pleasure"
    },
    {
      title: "test part 666",
      thought: "even more testing for my posting pleasure"
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
