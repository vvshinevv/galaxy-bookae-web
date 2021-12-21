import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-promotion-layout',
  templateUrl: './promotion-layout.component.html',
  styleUrls: ['./promotion-layout.component.css']
})
export class PromotionLayoutComponent implements OnInit {
  @ViewChild("popup") popupElement: ElementRef;
  public onPopup: boolean;

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    this.handlePopup();
  }

  hidePopup() {
    this.setCookie('popup', 'false', 1);
    this.handlePopup();
  }

  handlePopup() {
    var popup = this.getCookie('popup');
    this.onPopup = popup === undefined || this.getCookie('popup') === 'false';
    if (this.onPopup) {
      this.renderer2.removeClass(this.popupElement.nativeElement, 'on');
    } else {
      this.renderer2.addClass(this.popupElement.nativeElement, 'on');
    }
  }

  public setCookie(cname: string, cvalue: string, exdays: number) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  public getCookie(cname: string) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
