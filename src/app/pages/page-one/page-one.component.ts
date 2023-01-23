import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs' 

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {

  public name: string = 'Juan Camilo';
  public seconds: number = 0;
  
  private timerSub!: Subscription;

  constructor() {
    console.log('constructor')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSub.unsubscribe();
  }

  ngOnInit(): void {

    console.log('ngOnInit');
    this.timerSub = interval(1000).subscribe( i => {
      console.log( i );
      this.seconds = i;
    });
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  save() {

  }
}
