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
  selector: 'svg[si-pedal-bike-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m18.18 10-1.7-4.68A2.008 2.008 0 0 0 14.6 4H13c-.55 0-1 .45-1 1s.45 1 1 1h1.6l1.46 4h-4.81l-.36-1h.09c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15c0 2.8 2.2 5 5 5 2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.42 1.23-1.6 2.08-3.02 1.99-1.49-.09-2.73-1.35-2.8-2.85C1.93 13.39 3.27 12 5 12c1.33 0 2.42.83 2.82 2H6c-.55 0-1 .45-1 1s.45 1 1 1h1.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.78 4c-1.54-.06-2.84-1.37-2.88-2.92-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6.52-.19.79-.76.6-1.28l-.63-1.73.01-.01c1.72-.04 3.08 1.29 3.08 3a2.99 2.99 0 0 1-3.13 3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPedalBikeIcon implements OnInit {
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
