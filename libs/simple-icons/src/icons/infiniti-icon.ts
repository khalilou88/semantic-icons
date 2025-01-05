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
  selector: 'svg[si-infiniti-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>INFINITI</svg:title>
    <svg:path
      d="M1.953 11.643c0 1.51 1.83 2.69 4.601 3.344l4.841-5.523H12l-4.19 8.06C3.25 16.744 0 14.71 0 12.233c0-3.184 5.376-5.757 12-5.757s12 2.573 12 5.757c0 2.477-3.25 4.511-7.81 5.293L12 9.464h.605l4.84 5.523c2.772-.654 4.601-1.834 4.601-3.344 0-2.664-4.484-4.88-10.047-4.88-5.562 0-10.046 2.216-10.046 4.88z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInfinitiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#020B24');
  }
}
