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
  selector: 'svg[si-jetpack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17 2a4 4 0 0 1 4 4v7a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-1h-2v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-7a4 4 0 0 1 8 0v1h2v-1a4 4 0 0 1 4 -4m-4 8v-1h-2v1zm-4 5a1 1 0 0 1 1 1c0 2.623 -.787 4.59 -2.4 5.8a1 1 0 0 1 -1.2 0c-1.613 -1.21 -2.4 -3.177 -2.4 -5.8a1 1 0 0 1 2 0c0 1.532 .308 2.684 .906 3.498l.094 .119l.094 -.12c.558 -.759 .864 -1.813 .902 -3.196l.004 -.301a1 1 0 0 1 1 -1m10 0a1 1 0 0 1 1 1c0 2.623 -.787 4.59 -2.4 5.8a1 1 0 0 1 -1.2 0c-1.613 -1.21 -2.4 -3.177 -2.4 -5.8a1 1 0 0 1 2 0c0 1.532 .308 2.684 .906 3.498l.094 .119l.094 -.12c.558 -.759 .864 -1.813 .902 -3.196l.004 -.301a1 1 0 0 1 1 -1"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiJetpackIcon implements OnInit {
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