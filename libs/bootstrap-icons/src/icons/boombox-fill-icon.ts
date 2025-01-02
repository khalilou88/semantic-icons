import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-boombox-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
    <svg:path
      d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBoomboxFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '16');
    this.render.setAttribute(svg, 'height', '16');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
