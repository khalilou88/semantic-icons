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
  selector: 'svg[si-waves-electricity-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M3 12c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1"
    />
    <svg:path
      d="M3 16c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1"
    />
    <svg:path
      d="M3 8c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1"
    />
    <svg:path d="M20 7l-3 5h4l-3 5" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWavesElectricityIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
