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
  selector: 'svg[si-build-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M230 209.2L32 405.58 106.65 480l197.59-198.17c46.47 17.46 105.52 12.54 143-24.78 40.44-40.32 40.35-108 16.81-156.79l-87.33 87.06-52.32-52.13 87.33-87.06C363 24.46 294.67 24.34 254.23 64.66c-38.03 37.91-42.78 97.6-24.23 144.54z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBuildSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
