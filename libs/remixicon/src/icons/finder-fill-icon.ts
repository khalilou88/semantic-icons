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
  selector: 'svg[si-finder-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.001 3C21.5533 3 22.001 3.44772 22.001 4V20C22.001 20.5523 21.5533 21 21.001 21H3.00098C2.44869 21 2.00098 20.5523 2.00098 20V4C2.00098 3.44772 2.44869 3 3.00098 3H21.001ZM20.001 4.99996H11.5356C10.8458 6.97692 10.501 9.6436 10.501 13H13.501C13.386 13.9194 13.3504 14.8785 13.3939 15.8772C14.6196 15.6656 16.0978 15.1004 17.421 14.1679L18.5557 15.8321C16.914 16.9265 15.2534 17.6108 13.5802 17.8753C13.6316 18.2452 13.6929 18.6202 13.7642 19.0001L20.001 19V4.99996ZM6.55568 14.1679L5.44628 15.8321C7.60332 17.2701 9.79308 18 12.001 18V16C10.2089 16 8.39863 15.3966 6.55568 14.1679ZM17.001 7C17.5533 7 18.001 7.44772 18.001 8V9C18.001 9.55228 17.5533 10 17.001 10C16.4487 10 16.001 9.55228 16.001 9V8C16.001 7.44772 16.4487 7 17.001 7ZM7.00098 7C6.44869 7 6.00098 7.45174 6.00098 8C6.00098 8.3655 6.00098 8.69884 6.00098 9C6.00098 9.55228 6.44869 10 7.00098 10C7.55326 10 8.00098 9.55 8.00098 9V8C8.00098 7.44772 7.55326 7 7.00098 7Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFinderFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
