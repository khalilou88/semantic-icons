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
  selector: 'svg[si-data-thresholding-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.62 5.88 1.29 1.29 2.96-2.96a.996.996 0 1 1 1.41 1.41l-3.67 3.67a.996.996 0 0 1-1.41 0L10.67 11l-2.3 2.3a.996.996 0 1 1-1.41-1.41l3-3a.982.982 0 0 1 1.42-.01zM5 16h1.72L5 17.72V16zm.84 3 3-3h1.83l-3 3H5.84zm3.96 0 3-3h1.62l-3 3H9.8zm3.73 0 3-3h1.62l-3 3h-1.62zM19 19h-1.73L19 17.27V19z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDataThresholdingIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
