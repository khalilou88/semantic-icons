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
  selector: 'svg[si-rocket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRocketIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}