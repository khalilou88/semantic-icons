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
  selector: 'svg[si-sunrise-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Sunrise</svg:title>
    <svg:path
      d="M12.0011 0A12 12 0 1 0 24 11.9989 12.0114 12.0114 0 0 0 12.0012 0m0 2.4639a9.53 9.53 0 0 1 9.5134 8.8891 9.53 9.53 0 0 1-.8622 4.6487H3.349a9.53 9.53 0 0 1 .6162-9.14 9.53 9.53 0 0 1 8.036-4.398"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSunriseIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#DA291C');
  }
}
