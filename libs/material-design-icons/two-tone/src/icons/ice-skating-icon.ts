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
  selector: 'svg[si-ice-skating-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 16V5h5v1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5H10l.1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C16.4 12.33 17 13.1 17 14v2H5z"
      opacity=".3"
    />
    <svg:path
      d="M21 17c0 1.66-1.34 3-3 3h-2v-2h3v-4a3.96 3.96 0 0 0-2.91-3.82l-2.62-.74C12.62 9.19 12 8.39 12 7.5V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2zM5 16V5h5v1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5H10l.1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C16.4 12.33 17 13.1 17 14v2H5zm9 4H8v-2h6v2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIceSkatingIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
