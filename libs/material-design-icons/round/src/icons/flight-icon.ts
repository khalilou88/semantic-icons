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
  selector: 'svg[si-flight-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69a1.05 1.05 0 0 0 .87 1.89L10 13.5V19l-1.8 1.35a.48.48 0 0 0-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59a.48.48 0 0 0-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFlightIcon implements OnInit {
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
