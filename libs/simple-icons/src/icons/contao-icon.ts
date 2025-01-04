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
  selector: 'svg[si-contao-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Contao</svg:title>
    <svg:path
      d="M2.133 14.233c.672 3.125 1.23 6.1 3.189 8.242H1.588A1.602 1.602 0 0 1 0 20.897V3.109a1.6 1.6 0 0 1 1.588-1.584h2.698a10.317 10.317 0 0 0-1.718 2.028c-2.135 3.271-1.257 6.838-.435 10.68ZM22.411 1.525h-4.234c1.002 1.002 1.847 2.3 2.486 3.913l-6.437 1.358c-.706-1.351-1.779-2.476-3.877-2.034-1.156.245-1.923.894-2.264 1.604-.418.876-.624 1.858.377 6.525.999 4.667 1.588 5.481 2.327 6.112.601.511 1.57.794 2.727.55 2.1-.442 2.617-1.902 2.708-3.422l6.437-1.359c.153 3.329-.879 5.911-2.699 7.696h2.449A1.602 1.602 0 0 0 24 20.891V3.109a1.602 1.602 0 0 0-1.589-1.584Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiContaoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
