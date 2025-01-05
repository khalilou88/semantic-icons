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
  selector: 'svg[si-graphite-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Graphite</svg:title>
    <svg:path
      d="m15.215 0-12 3.215-3.215 12L8.785 24l12-3.215 3.215-12L15.215 0Zm1.958 20.966H6.827L1.655 12l5.172-8.966h10.346L22.345 12l-5.172 8.966Zm.68-14.823L9.86 4 4.006 9.858l2.14 8 7.995 2.141 5.853-5.857-2.14-8Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGraphiteIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '000000');
  }
}
