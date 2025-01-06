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
  selector: 'svg[si-expand-height-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 2H18V4H6V2ZM16.9497 9.44975L12 4.5L7.05273 9.44727L8.46695 10.8615L11 8.32843V15.6706L8.46499 13.1356L7.05078 14.5498L12 19.5L16.9497 14.5503L15.5355 13.136L13 15.6716V8.32843L15.5355 10.864L16.9497 9.44975ZM18 20V22H6V20H18Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExpandHeightLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
