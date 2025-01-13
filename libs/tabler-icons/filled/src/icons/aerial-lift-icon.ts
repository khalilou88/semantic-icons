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
  selector: 'svg[si-aerial-lift-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19.876 2.008a1 1 0 1 1 .248 1.984l-7.124 .891v2.117h4.2a1 1 0 0 1 .688 .274l.087 .093c2.79 3.417 2.717 9.963 -.226 13.295a1 1 0 0 1 -.749 .338h-10.106a1 1 0 0 1 -.763 -.353c-2.86 -3.373 -2.86 -9.92 0 -13.294a1 1 0 0 1 .763 -.353h4.106v-1.867l-6.876 .86a1 1 0 0 1 -1.095 -.754l-.021 -.115a1 1 0 0 1 .868 -1.116l7.996 -1l.011 -.001l.008 -.001zm-8.876 6.992h-3.617l-.051 .072c-.718 1.042 -1.149 2.41 -1.292 3.844l-.008 .084h4.968zm5.698 0h-3.698v4h4.979l-.005 -.072c-.123 -1.436 -.533 -2.811 -1.232 -3.864z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAerialLiftIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
