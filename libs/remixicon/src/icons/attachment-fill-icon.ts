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
  selector: 'svg[si-attachment-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.997 2.9918L20.9998 21.0082C20.9998 21.5447 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44468 2 3.99322 2H20.0036C20.5519 2 20.9969 2.44405 20.997 2.9918ZM9 13V9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V9C13 7.34315 11.6569 6 10 6C8.34315 6 7 7.34315 7 9V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8H15V13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAttachmentFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
