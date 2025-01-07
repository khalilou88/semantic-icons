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
  selector: 'svg[si-invert-colors-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.75 8.99A5.766 5.766 0 0 0 6 13.13C6 16.37 8.69 19 12 19V4.81L7.75 8.99z"
      opacity=".3"
    />
    <svg:path
      d="M17.65 7.56 12 2 6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57zM6 13.13c0-1.56.62-3.03 1.75-4.14L12 4.81V19c-3.31 0-6-2.63-6-5.87z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInvertColorsIcon implements OnInit {
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
