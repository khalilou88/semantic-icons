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
  selector: 'svg[si-chemex-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Chemex</svg:title>
    <svg:path
      d="M22.665.124c-.741 0-1.36.593-1.36 1.334 0 .742.619 1.335 1.36 1.335A1.33 1.33 0 0 0 24 1.458 1.33 1.33 0 0 0 22.665.124zM1.112.148s5.314 6.748 5.982 7.91c.89 1.557.84 2.076-.124 3.954C6.352 13.2 0 23.876 0 23.876h2.694S8.7 13.668 9.516 12.284c.89-1.508.89-3.164.148-4.474C9.071 6.772 3.831.148 3.831.148zm16.956 0s-5.24 6.624-5.833 7.662c-.717 1.286-.766 2.917.148 4.474.816 1.384 6.822 11.592 6.822 11.592h2.67c0-.024-6.328-10.677-6.946-11.888-.964-1.854-1.013-2.373-.123-3.93.667-1.162 5.98-7.91 5.98-7.91zm4.597.223c.593 0 1.088.494 1.088 1.087 0 .594-.495 1.088-1.088 1.088a1.097 1.097 0 0 1-1.087-1.088A1.08 1.08 0 0 1 22.665.371zm-.593.296V2.15h.272v-.519h.37l.273.52h.321l-.297-.544a.453.453 0 0 0 .297-.446c0-.296-.198-.494-.52-.494zm.321.272h.445c.149 0 .223.05.223.222 0 .173-.124.223-.223.223h-.445z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChemexIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#4D2B1A');
  }
}
