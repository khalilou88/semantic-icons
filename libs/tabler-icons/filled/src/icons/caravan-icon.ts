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
  selector: 'svg[si-caravan-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M15.949 3.684l.771 2.316h1.28a3 3 0 0 1 3 3v6h1a1 1 0 0 1 0 2h-1.17a3 3 0 0 1 -2.83 2h-6.17a3.001 3.001 0 0 1 -5.66 0h-1.17a3 3 0 0 1 -3 -3v-3.5a6.5 6.5 0 0 1 5.672 -6.448l6.934 -2.971a1 1 0 0 1 1.343 .603m-6.949 13.316a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m5.5 -7h-1a1.5 1.5 0 0 0 -1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5 -1.5v-1a1.5 1.5 0 0 0 -1.5 -1.5m-.105 -4.653l-1.524 .653h1.742z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCaravanIcon implements OnInit {
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
