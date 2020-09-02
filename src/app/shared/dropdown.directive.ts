import { Directive, HostListener, HostBinding , ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  private elementSelected = false;
  constructor(private el: ElementRef) {  }
  // @HostBinding('class.open') isOpen = false;
  // // tslint:disable-next-line: typedef
  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }
  // tslint:disable-next-line: use-lifecycle-interface
  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: use-lifecycle-interface
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  @HostListener('click')
  // tslint:disable-next-line: typedef
  private onClick() {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.classList.add('toggle');
    } else {
      this.el.nativeElement.classList.remove('toggle');
    }
  }
}

