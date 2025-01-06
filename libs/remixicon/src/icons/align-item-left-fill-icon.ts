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
  selector: 'svg[si-align-item-left-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 21V3H5V21H3ZM7 14C7 13.4477 7.44772 13 8 13H16C16.5523 13 17 13.4477 17 14V19C17 19.5523 16.5523 20 16 20H8C7.44772 20 7 19.5523 7 19V14ZM8 4C7.44772 4 7 4.44772 7 5V10C7 10.5523 7.44772 11 8 11H20C20.5523 11 21 10.5523 21 10V5C21 4.44772 20.5523 4 20 4H8Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlignItemLeftFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
