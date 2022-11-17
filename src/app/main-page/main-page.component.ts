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
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { ApiService } from '../api.service';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { Message } from 'primeng/api';
import { data, param } from 'jquery';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit, AfterViewInit {
  constructor(
    private http: HttpClient,
    private api: ApiService,
    private messagesService: MessagesModule
  ) {}
  msgs!: Message[];

  show() {
    this.msgs = [
      {
        severity: 'warn',
        summary: 'Warning',
        detail: 'You need to write something in the inputs',
      },
    ];
    console.log(this.msgs);
  }

  hide() {
    this.msgs = [];
  }

  @ViewChild('commentSpace', { read: ViewContainerRef })
  entry!: ViewContainerRef;

  @ViewChild('commentInput') commentLine!: ElementRef;
  @ViewChild('nameInput') nameLine!: ElementRef;
  log3() {
    if (
      this.nameLine.nativeElement.value !== '' &&
      this.commentLine.nativeElement.value !== ''
    ) {
      var dinamicComp = this.entry.createComponent(CommentComponent);
      dinamicComp.instance.comment = this.commentLine.nativeElement.value;
      dinamicComp.instance.name = this.nameLine.nativeElement.value;

      //this.val1 = this.nameLine.nativeElement.value;
      //this.val2 = this.commentLine.nativeElement.value;
      dinamicComp.instance.photoUrl = this.api.photoUrl;
      this.nameLine.nativeElement.value = '';
      this.commentLine.nativeElement.value = '';
      this.hide();
    } else this.show();
  }

  time = new Date();

  @ViewChild('view')
  viewElementRef!: ElementRef;
  ngAfterViewInit(): void {}

  @ViewChild('commentSpace') commentSpace!: ElementRef;

  images: any = [];
  imageStatic!: string;

  val1 = 6;
  val2 = 'ooooo';

  /*sendToDB() {
    //var url =
    //  'http://localhost:8080/y?val1=' + this.val1 + '&val2=' + this.val2;
    this.http
      .post('http://localhost:8080/y', [
        {
          val1: this.val1,
          val2: this.val2,
        },
      ])
      .subscribe((data) => [console.log(data)]);
  }
  */

  ngOnInit(): void {
    this.api.getImages();
    this.imageStatic = this.api.photoUrl;

    //this.http.get('http://localhost:8080/x').subscribe((data) => {
    //  console.log(data);
    //});
  }
}
