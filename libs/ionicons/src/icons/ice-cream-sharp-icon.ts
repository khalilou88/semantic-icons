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
  selector: 'svg[si-ice-cream-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M359.72 112.37a104 104 0 00-207.44 0A80.12 80.12 0 0080 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 011.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0041-40v-47.84a2 2 0 012.72-1.86A83.47 83.47 0 00256 268a63.18 63.18 0 0042.24-16.59 2 2 0 012.74 0A74.63 74.63 0 00352 272a80 80 0 007.72-159.63z"
    />
    <svg:path
      d="M256 300v12a72.1 72.1 0 01-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 01-49.18-14.36A93.75 93.75 0 01256 300z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIceCreamSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
