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
  selector: 'svg[si-screenshot-2-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3H5V5H3V3ZM7 3H9V5H7V3ZM11 3H13V5H11V3ZM15 3H17V5H15V3ZM19 3H21V5H19V3ZM19 7H21V9H19V7ZM3 19H5V21H3V19ZM3 15H5V17H3V15ZM3 11H5V13H3V11ZM3 7H5V9H3V7ZM10.6667 11L11.7031 9.4453C11.8886 9.1671 12.2008 9 12.5352 9H15.4648C15.7992 9 16.1114 9.1671 16.2969 9.4453L17.3333 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H8C7.44772 21 7 20.5523 7 20V12C7 11.4477 7.44772 11 8 11H10.6667ZM9 19H19V13H16.263L14.9296 11H13.0704L11.737 13H9V19ZM14 18C12.8954 18 12 17.1046 12 16C12 14.8954 12.8954 14 14 14C15.1046 14 16 14.8954 16 16C16 17.1046 15.1046 18 14 18Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScreenshot2LineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
