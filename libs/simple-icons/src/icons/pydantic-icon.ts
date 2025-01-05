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
  selector: 'svg[si-pydantic-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Pydantic</svg:title>
    <svg:path
      d="m23.826 17.316-4.23-5.866-6.847-9.496c-.348-.48-1.151-.48-1.497 0l-6.845 9.494-4.233 5.868a.925.925 0 0 0 .46 1.417l11.078 3.626h.002a.92.92 0 0 0 .572 0h.002l11.077-3.626c.28-.092.5-.31.59-.592a.916.916 0 0 0-.13-.825h.002ZM12.001 4.07l4.44 6.158-4.152-1.36c-.032-.01-.066-.008-.098-.016a.8.8 0 0 0-.096-.016c-.032-.004-.062-.016-.094-.016s-.062.012-.094.016a.74.74 0 0 0-.096.016c-.032.006-.066.006-.096.016L7.59 10.221l-.026.008 4.44-6.158h-.002Zm-6.273 8.7 4.834-1.583.516-.168v9.19L2.41 17.372l3.317-4.6Zm7.197 7.437V11.02l5.35 1.752 3.316 4.598-8.666 2.838Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPydanticIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'E92063');
  }
}
