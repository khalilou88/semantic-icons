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
  selector: 'svg[si-bottle-water-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M120 0l80 0c13.3 0 24 10.7 24 24l0 40L96 64l0-40c0-13.3 10.7-24 24-24zM32 167.5c0-19.5 10-37.6 26.6-47.9l15.8-9.9C88.7 100.7 105.2 96 122.1 96l75.8 0c16.9 0 33.4 4.7 47.7 13.7l15.8 9.9C278 129.9 288 148 288 167.5c0 17-7.5 32.3-19.4 42.6C280.6 221.7 288 238 288 256c0 19.1-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48s-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64c0-19.1 8.4-36.3 21.7-48C40.4 388.3 32 371.1 32 352s8.4-36.3 21.7-48C40.4 292.3 32 275.1 32 256c0-18 7.4-34.3 19.4-45.9C39.5 199.7 32 184.5 32 167.5zM96 240c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBottleWaterIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 320 512');
  }
}
