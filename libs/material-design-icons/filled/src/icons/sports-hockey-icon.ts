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
  selector: 'svg[si-sports-hockey-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 17v3h2v-4H3c-.55 0-1 .45-1 1zm7-1H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48L9 16zm12.71.29A.997.997 0 0 0 21 16h-1v4h2v-3c0-.28-.11-.53-.29-.71zm-8.11-3.45L17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4l-1.4-3.16z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSportsHockeyIcon implements OnInit {
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
