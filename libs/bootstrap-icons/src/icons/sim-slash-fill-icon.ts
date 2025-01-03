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
  selector: 'svg[si-sim-slash-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m11.646.44.897.896-1.703 1.703A1.5 1.5 0 0 0 10.5 3h-5A1.5 1.5 0 0 0 4 4.5v5.379l-2 2V1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44M8.5 5.378 9.879 4H8.5zM5 8.879 6.879 7H5zm6-1.758L9.121 9H11zm-3.5 3.5L6.121 12H7.5zM5.5 13q-.175 0-.34-.039L2.502 15.62c.265.236.615.38.998.38h9a1.5 1.5 0 0 0 1.5-1.5V4.121l-2 2V11.5a1.5 1.5 0 0 1-1.5 1.5zM5 4.5a.5.5 0 0 1 .5-.5h2v2H5zM8.5 10H11v1.5a.5.5 0 0 1-.5.5h-2zm6.354-8.146a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSimSlashFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '16');
    this.render.setAttribute(svg, 'height', '16');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}