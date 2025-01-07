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
  selector: 'svg[si-west-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.7 18.3a.996.996 0 0 0 0-1.41L5.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1H5.83l3.88-3.88A.996.996 0 1 0 8.3 5.71L2.7 11.3a.996.996 0 0 0 0 1.41l5.59 5.59c.39.38 1.03.38 1.41 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWestIcon implements OnInit {
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
