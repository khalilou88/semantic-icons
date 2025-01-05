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
  selector: 'svg[si-torbrowser-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Tor Browser</svg:title>
    <svg:path
      d="M12 21.82v-1.46A8.36 8.36 0 0020.36 12 8.36 8.36 0 0012 3.64V2.18A9.83 9.83 0 0121.82 12 9.83 9.83 0 0112 21.82zm0-5.09A4.74 4.74 0 0016.73 12 4.74 4.74 0 0012 7.27V5.82A6.17 6.17 0 0118.18 12 6.17 6.17 0 0112 18.18zm0-7.27A2.54 2.54 0 0114.55 12 2.54 2.54 0 0112 14.54zM0 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 000 12z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTorbrowserIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#7D4698');
  }
}
