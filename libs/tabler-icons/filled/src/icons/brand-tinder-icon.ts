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
  selector: 'svg[si-brand-tinder-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M11.595 2.13a1 1 0 0 1 1.455 -1.016c3.11 1.625 5.41 3.797 6.77 6.627l-.013 -.024l.01 .019l.115 .232c2.751 5.7 .088 12.587 -5.913 13.76l-.267 .049c-8.719 1.91 -14.455 -8.74 -7.97 -14.918c.466 -.46 1.28 -1.196 1.636 -1.45a1 1 0 0 1 1.582 .813c0 .311 .086 1.117 .205 1.694q .046 .215 .093 .383l.017 .058l.1 -.02c1.562 -.396 2.522 -3.021 2.21 -5.955z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandTinderIcon implements OnInit {
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
