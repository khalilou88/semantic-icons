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
  selector: 'svg[si-reebok-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Reebok</svg:title>
    <svg:path
      d="M14.991 11.48C17.744 10.38 19.458 9.748 24 8.64c-2.467.163-7.922.537-11.682 1.271l2.673 1.57m-8.56 3.651h3.6c.713-1.08 1.422-1.606 2.248-2.191a71.382 71.382 0 00-1.892-.701c-2.297 1.014-3.575 2.375-3.953 2.892m.709-3.928c-3.21 1.147-4.994 2.393-6.199 3.928h3.975c.387-.539 1.862-2.093 4.633-3.174a57.092 57.092 0 00-2.41-.754M8.79 8.788H0c8.862 1.6 13.133 3.66 20 6.572-.587-.439-10.051-6.013-11.209-6.572"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiReebokIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'E41D1B');
  }
}
