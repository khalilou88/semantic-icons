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
  selector: 'svg[si-dumpling-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M5.532 5.532a2.53 2.53 0 0 1 2.56 -.623a2.532 2.532 0 0 1 4.604 -.717q .146 -.24 .356 -.45a2.532 2.532 0 0 1 4.318 1.637a2.53 2.53 0 0 1 2.844 .511l.358 .358c1.384 1.385 -.7 5.713 -4.655 9.669c-3.956 3.955 -8.284 6.04 -9.669 4.655l-.358 -.358l-.114 -.122a2.53 2.53 0 0 1 -.398 -2.724a2.532 2.532 0 0 1 -1.186 -4.675a2.532 2.532 0 0 1 .718 -4.603a2.53 2.53 0 0 1 .622 -2.558"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDumplingIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
