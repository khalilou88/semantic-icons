import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-deutschepost-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Deutsche Post</title>
    <svg:path
      d="M11.057 18.221 7.839 21.47H4.652l3.219-3.249zm-4.299 0L3.541 21.47H.354l3.219-3.249zm8.227 0 3.219 3.249h-3.187l-3.22-3.249zm4.3 0 3.217 3.249h-3.187l-3.218-3.249zM10.465 2.53c3.765-.003 6.88 2.74 6.865 6.676.553-1.502.937-3.789 1.016-5.39L24 5.22c-.452 6.621-5.43 12.42-12.815 12.416C2.832 17.635-.397 10.389.039 4.899l2.453-.779c-.399 3.125.57 5.378 1.238 6.41-.795-4.42 2.549-7.998 6.735-8m.011 2.301a4.519 4.519 0 0 0-4.524 4.514 4.519 4.519 0 0 0 4.524 4.514 4.518 4.518 0 0 0 4.525-4.514 4.518 4.518 0 0 0-4.525-4.514"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDeutschepostIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
