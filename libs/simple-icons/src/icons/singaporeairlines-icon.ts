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
  selector: 'svg[si-singaporeairlines-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Singapore Airlines</svg:title>
    <svg:path
      d="M8.981 0 7.786 1.79c-.473.728-.062 1.51-.062 1.51l5.475 9.055c1.263 2.17-.536 4.535-.536 4.535L9.36 22.015h2.738c1.387 0 2.014-1.133 2.014-1.133l1.73-2.673c.628-.978 1.45-1.008 1.45-1.008h1.572c-.977.41-1.418 1.418-1.418 1.418l-1.946 2.993c-.76 1.133-1.643.969-1.643.969h-7.83l3.713-5.792c.875-1.318 0-2.42 0-2.42L4.796 6.355 3.756 7.93c-.907 1.45-.032 2.294-.032 2.294l3.56 5.722c.79 1.193.224 1.914.224 1.914l-4 6.14h10.513a2.97 2.97 0 0 0 2.674-1.574l2.232-3.364c.535-.852 1.728-.728 1.728-.728l-1.512-2.388h-2.17c-1.542 0-2.14 1.286-2.14 1.286l-2.045 3.117h-.002c-.187.225-.404.505-.628.35-.217-.155.093-.566.093-.566l2.744-4.28c.404-.666 1.133-1.986 1.133-3.148 0-1.162-.915-2.666-.915-2.666zM7.004 3.146 5.618 5.224c-.41.69 0 1.41 0 1.41l4.69 7.77c.659 1.161.154 2.262.154 2.262l-3.364 5.31h1.668l3.62-5.622c1.543-2.332.124-4.216.124-4.216z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSingaporeairlinesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
