import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';
  @Input('img')
  public set changeImg(newImg : string) {
    this.img = newImg;
    console.log('change just img=>' , this.img);

  }
  alt: string = '';
  @Input('alt')
  public set changeAlt(newAlt : string) {
    this.alt  = newAlt;
  }

  @Output() loaded= new EventEmitter<string>();
  //counter= 0;
  //counterFn: number | undefined;
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
    // this.counterFn=window.setInterval(()=>{
    //   this.counter+=1;
    //   console.log('run counter');
    // }, 1000);
  }
  ngOnChanges(changes: SimpleChanges) {
    //before - during render
    //change inputs --times
    console.log('img ngOnChanges', 'imgValue:', this.img);
    console.log('changes',changes);
    // if (changes.) {

    // }

  }
  ngAfterViewInit(): void {
    //after render -child render
    // handler children
    console.log('img ngAfterViewInit', 'imgValue:', this.img);
  }
  ngOnDestroy(): void {
    // delete
    console.log('img ngOnDestroy', 'imgValue:', this.img);
    //window.clearInterval(this.counterFn);
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
