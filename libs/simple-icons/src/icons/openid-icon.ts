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
  selector: 'svg[si-openid-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>OpenID</svg:title>
    <svg:path
      d="M14.54.889l-3.63 1.773v18.17c-4.15-.52-7.27-2.78-7.27-5.5 0-2.58 2.8-4.75 6.63-5.41v-2.31C4.42 8.322 0 11.502 0 15.332c0 3.96 4.74 7.24 10.91 7.78l3.63-1.71V.888m.64 6.724v2.31c1.43.25 2.71.7 3.76 1.31l-1.97 1.11 7.03 1.53-.5-5.21-1.87 1.06c-1.74-1.06-3.96-1.81-6.45-2.11z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenidIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'F78C40');
  }
}
