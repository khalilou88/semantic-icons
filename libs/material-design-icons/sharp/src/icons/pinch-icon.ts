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
  selector: 'svg[si-pinch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M23.18 15.4 22.1 23h-9L8 17.62l1.22-1.23 3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38l5.8 2.9zM6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5H6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPinchIcon implements OnInit {
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
