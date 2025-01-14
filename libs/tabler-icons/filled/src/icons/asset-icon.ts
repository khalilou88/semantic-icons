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
  selector: 'svg[si-asset-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19 2a3 3 0 0 1 2.86 3.91l-.107 .291l-.046 .093q -.061 .128 -.134 .25l-6.476 11.909a1 1 0 0 1 -.066 .104a7 7 0 0 1 -13.031 -3.557l.004 -.24a7 7 0 0 1 3.342 -5.732l.256 -.15l11.705 -6.355q .18 -.123 .378 -.22l.215 -.096l.136 -.048c.302 -.103 .627 -.159 .964 -.159m-10 10a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3m7.04 -6.512l-5.12 2.778a7.01 7.01 0 0 1 4.816 4.824l2.788 -5.128a3 3 0 0 1 -2.485 -2.474m2.961 -1.488a1 1 0 0 0 -.317 .051l-.31 .17a1 1 0 1 0 1.465 1.325l.072 -.13a1 1 0 0 0 -.91 -1.416"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAssetIcon implements OnInit {
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
    this.render.setAttribute(svg, 'width', this.width().toString());
    this.render.setAttribute(svg, 'height', this.height().toString());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}
