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
  selector: 'svg[si-note-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M13 20l3.505 -3.505m2 -2l1.501 -1.501" />
    <svg:path
      d="M17 13h3v-7a2 2 0 0 0 -2 -2h-10m-3.427 .6c-.355 .36 -.573 .853 -.573 1.4v12a2 2 0 0 0 2 2h7v-6c0 -.272 .109 -.519 .285 -.699"
    />
    <svg:path d="M3 3l18 18" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNoteOffIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width().toString());
    this.render.setAttribute(svg, 'height', this.height().toString());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
    this.render.setAttribute(svg, 'stroke', this.stroke());
    this.render.setAttribute(
      svg,
      'stroke-width',
      this.strokeWidth().toString(),
    );
    this.render.setAttribute(svg, 'stroke-linecap', this.strokeLinecap());
    this.render.setAttribute(svg, 'stroke-linejoin', this.strokeLinejoin());
  }
}
