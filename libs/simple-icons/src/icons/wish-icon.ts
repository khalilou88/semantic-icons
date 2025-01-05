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
  selector: 'svg[si-wish-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wish</svg:title>
    <svg:path
      d="M18.864 19.826h-4.107l-3.227-9.393-2.28 9.39H5.143L0 4.65h4.217l4.354 13.128c1.558-4.4 2.534-8.5 1.021-13.128H13.7ZM20.57 4.174a15.705 15.705 0 0 1-3.425 4.171 17.095 17.095 0 0 1 3.425 5.56A17.116 17.116 0 0 1 24 8.345a15.734 15.734 0 0 1-3.43-4.17Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWishIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '32E476');
  }
}
