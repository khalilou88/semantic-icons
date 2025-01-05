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
  selector: 'svg[si-westernunion-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Western Union</svg:title>
    <svg:path
      d="M15.799 5.188h5.916L24 9.155l-4.643 8.043c-1.246 2.153-3.28 2.153-4.526 0L7.893 5.188h5.919l4.273 7.39a1.127 1.127 0 0 0 1.981.002l-4.267-7.392ZM0 5.188h5.921l6.237 10.802-.697 1.204c-1.246 2.153-3.285 2.153-4.531 0L0 5.188Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWesternunionIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FFDD00');
  }
}
