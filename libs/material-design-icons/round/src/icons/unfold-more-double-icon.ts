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
  selector: 'svg[si-unfold-more-double-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.53 5.29 12 2.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7.7a.996.996 0 0 0-1.41 0L8.12 3.88a.996.996 0 1 0 1.41 1.41z"
    />
    <svg:path
      d="M9.53 10.29 12 7.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7 5.7a.996.996 0 0 0-1.41 0L8.12 8.88a.996.996 0 1 0 1.41 1.41zm4.94 3.42L12 16.17l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.18a.996.996 0 1 0-1.41-1.41z"
    />
    <svg:path
      d="M14.47 18.72 12 21.17l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17a.996.996 0 1 0-1.41-1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUnfoldMoreDoubleIcon implements OnInit {
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
