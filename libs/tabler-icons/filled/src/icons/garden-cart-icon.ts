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
  selector: 'svg[si-garden-cart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M3.324 3a2 2 0 0 1 1.855 1.258l1.097 2.742h14.724a1 1 0 0 1 .94 1.341l-.046 .106l-2.934 5.871a3.5 3.5 0 1 1 -4.96 3.182l.005 -.192a3.5 3.5 0 0 1 .499 -1.618l-2.446 -.258l-3.446 4.75a2 2 0 0 1 -2.08 .762l-.154 -.044a2 2 0 0 1 -1.378 -1.9v-9.804l-1.679 -4.196h-1.321a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1zm14.176 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m-10.5 -2.498l-.002 5.498l2.783 -3.833a5 5 0 0 1 -2.614 -1.474z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGardenCartIcon implements OnInit {
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
