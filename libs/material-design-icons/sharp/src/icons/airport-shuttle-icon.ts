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
  selector: 'svg[si-airport-shuttle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 5H1v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-6-6zM3 11V7h4v4H3zm3 6.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM13 11H9V7h4v4zm5 6.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM15 11V7h1l4 4h-5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAirportShuttleIcon implements OnInit {
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
