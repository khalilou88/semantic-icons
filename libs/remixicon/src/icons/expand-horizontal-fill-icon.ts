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
  selector: 'svg[si-expand-horizontal-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M0.5 12L5.44975 7.05029L5.44876 11H10V13H5.44826L5.44727 16.9473L0.5 12ZM14 13H18.5501L18.55 16.9493L23.5 11.9996L18.5503 7.0498L18.5502 11H14V13Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExpandHorizontalFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
