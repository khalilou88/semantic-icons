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
  selector: 'svg[si-scuba-diving-tank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M17 17v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-2z" />
    <svg:path
      d="M8 2a2 2 0 0 1 1.732 1h1.15a1.496 1.496 0 0 1 2.236 0h1.882a1 1 0 0 1 0 2l-1.883 .001a2 2 0 0 1 -.115 .116v.983a5 5 0 0 1 3.998 4.9v4h-10v-4a5 5 0 0 1 4 -4.9v-.983a2 2 0 0 1 -.117 -.116h-1.151a2 2 0 1 1 -1.732 -3.001"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiScubaDivingTankIcon implements OnInit {
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