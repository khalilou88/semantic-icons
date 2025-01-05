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
  selector: 'svg[si-leaflet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Leaflet</svg:title>
    <svg:path
      d="M17.69 0c-.355.574-8.432 4.74-10.856 8.649-2.424 3.91-3.116 6.988-2.237 9.882.879 2.893 2.559 2.763 3.516 3.717.958.954 2.257 2.113 4.332 1.645 2.717-.613 5.335-2.426 6.638-7.508 1.302-5.082.448-9.533-.103-11.99A35.395 35.395 0 0 0 17.69 0zm-.138.858l-9.22 21.585-.574-.577Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLeafletIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#199900');
  }
}
