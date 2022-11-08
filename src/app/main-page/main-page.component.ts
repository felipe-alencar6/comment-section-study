import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) {}

  @ViewChild('commentSpace', { read: ViewContainerRef })
  entry!: ViewContainerRef;

  @ViewChild('commentInput') commentLine!: ElementRef;
  @ViewChild('nameInput') nameLine!: ElementRef;
  log3() {
    var dinamicComp = this.entry.createComponent(CommentComponent);
    dinamicComp.instance.comment = this.commentLine.nativeElement.value;
    dinamicComp.instance.name = this.nameLine.nativeElement.value;
  }

  @ViewChild('view')
  viewElementRef!: ElementRef;
  user = 'fgelipe';
  ngAfterViewInit(): void {}

  @ViewChild('commentSpace') commentSpace!: ElementRef;

  /*log2() {
    var commentDiv = document.createElement('div');
    var newName = document.createElement('div');
    var newComment = document.createElement('div');
    this.commentSpace.nativeElement.appendChild(commentDiv);

    newName.innerHTML = this.nameLine.nativeElement.value;
    newComment.innerHTML = this.commentLine.nativeElement.value;
    commentDiv.appendChild(newName);
    commentDiv.appendChild(newComment);
    commentDiv.className = 'comment';
    newName.className = 'name';

    var x = document.createElement('app-comment');
    commentDiv.appendChild(x);
  }
  */

  /*log() {
    console.log(this.viewElementRef);
    var comment = (<HTMLInputElement>document.getElementById('message')).value;
    var commentPost = document.createElement('p');
    var namePost = document.createElement('h6');
    var name = (<HTMLInputElement>document.getElementById('name')).value;

    //var x = document.createElement('div');
    var totalSpace = document.createElement('div');

    namePost.innerHTML = name;

    commentPost.innerHTML = comment;

    totalSpace.className = 'comment';

    var commentSpace = document.getElementById('newComment');
    var nameSpace = document.getElementById('newComment');
    var divPaiName = nameSpace?.parentNode;
    var divPai = commentSpace?.parentNode;

    // x.appendChild(document.createTextNode(comment));
    // document.getElementById('teste')?.appendChild(x);

    var x = divPai?.insertBefore(totalSpace, commentSpace);
    x?.appendChild(commentPost);
    x?.appendChild(namePost);
  }
  */

  images: any = [];
  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe((data) => {
      console.log(data);
      this.images = data;
      console.log(this.images.Images[0].Url);
    });
  }
}
