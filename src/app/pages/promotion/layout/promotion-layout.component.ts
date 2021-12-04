import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-promotion-layout',
  templateUrl: './promotion-layout.component.html',
  styleUrls: ['./promotion-layout.component.css']
})
export class PromotionLayoutComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }
}
