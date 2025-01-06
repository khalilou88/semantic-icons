import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-armchair-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 3C5.79086 3 4 4.79086 4 7V9.12602C2.27477 9.57006 1 11.1362 1 13C1 14.4817 1.8052 15.7734 3 16.4646V19V21H5V20H19V21H21V19V16.4646C22.1948 15.7734 23 14.4817 23 13C23 11.1362 21.7252 9.57006 20 9.12602V7C20 4.79086 18.2091 3 16 3H8ZM18 9.12602C16.2748 9.57006 15 11.1362 15 13H9C9 11.1362 7.72523 9.57006 6 9.12602V7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V9.12602ZM9 15H15V16H17V13C17 11.8954 17.8954 11 19 11C20.1046 11 21 11.8954 21 13C21 13.8693 20.4449 14.6114 19.6668 14.8865C19.2672 15.0277 19 15.4055 19 15.8293V18H5V15.8293C5 15.4055 4.73284 15.0277 4.33325 14.8865C3.5551 14.6114 3 13.8693 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13V16H9V15Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArmchairLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
