import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-zoom-out-area-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1 -1.414 1.414l-2.817 -2.816a6 6 0 0 1 -9.476 -4.891l.004 -.225a6 6 0 0 1 5.996 -5.775m2 5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m-14 0a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2h-1a3 3 0 0 1 -3 -3v-1a1 1 0 0 1 1 -1m0 -5a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1 -1m3 -7a1 1 0 1 1 0 2h-1a1 1 0 0 0 -1 1v1a1 1 0 1 1 -2 0v-1a3 3 0 0 1 3 -3zm5 0a1 1 0 0 1 0 2h-1a1 1 0 1 1 0 -2zm5 0a3 3 0 0 1 3 3v1a1 1 0 0 1 -2 0v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 0 -2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZoomOutAreaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width());
    this.render.setAttribute(svg, 'height', this.height());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}
