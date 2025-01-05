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
  selector: 'svg[si-mapbox-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Mapbox</svg:title>
    <svg:path
      d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.696 14.943c-4.103 4.103-11.433 2.794-11.433 2.794S4.94 10.421 9.057 6.304c2.281-2.281 6.061-2.187 8.45.189s2.471 6.168.189 8.45zm-4.319-7.91l-1.174 2.416-2.416 1.174 2.416 1.174 1.174 2.416 1.174-2.416 2.416-1.174-2.416-1.174-1.174-2.416z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMapboxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '000000');
  }
}
