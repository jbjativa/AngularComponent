import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded= new EventEmitter<string>();
  imageDefault = "./assets/images/default2.png";
  constructor() {
    //before render
    //No async --once time
    console.log('img constructor', 'imgValue:', this.img);

  }

  ngOnInit(): void {
    //before render
    //async -fetch , requests, promises, etc --once time
    console.log('img ngOnInit', 'imgValue:', this.img);
  }
  ngOnChanges() {
    //before - during render
    //change inputs --times
    console.log('img ngOnChanges', 'imgValue:', this.img);
  }
  ngAfterViewInit(): void {
    //after render -child render
    // handler children
    console.log('img ngAfterViewInit', 'imgValue:', this.img);
  }
  ngOnDestroy(): void {
    // delete
    console.log('img ngOnDestroy', 'imgValue:', this.img);
  }

  imgError()
  {
    this.img= this.imageDefault;
  }
  imgLoaded()
  {
    console.log('load hijo');
    this.loaded.emit(this.img);
  }

}
