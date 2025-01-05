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
  selector: 'svg[si-convertio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Convertio</svg:title>
    <svg:path
      d="M12 .037C5.373.037 0 5.394 0 12c0 6.606 5.373 11.963 12 11.963 6.628 0 12-5.357 12-11.963C24 5.394 18.627.037 12 .037zm-.541 4.8c1.91-.13 3.876.395 5.432 1.934 1.426 1.437 2.51 3.44 2.488 5.317h2.133l-4.444 4.963-4.445-4.963h2.313c-.001-1.724-.427-2.742-1.78-4.076-1.325-1.336-2.667-2.11-4.978-2.303a9.245 9.245 0 013.281-.871zM6.934 6.95l4.445 4.963H9.066c0 1.724.426 2.742 1.778 4.076 1.326 1.336 2.667 2.112 4.978 2.305-2.684 1.268-6.22 1.398-8.71-1.064-1.427-1.437-2.512-3.44-2.489-5.317H2.488L6.934 6.95Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiConvertioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF3333');
  }
}
