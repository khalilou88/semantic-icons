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
  selector: 'svg[si-golf-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M11 3a1 1 0 0 1 1.496 -.868l7 4a1 1 0 0 1 0 1.736l-6.496 3.712v6.42a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1z"
    />
    <svg:path
      d="M14.135 17.168a1 1 0 0 1 1.367 -.363c.916 .532 1.498 1.291 1.498 2.195c0 1.84 -2.319 3 -5 3s-5 -1.16 -5 -3c0 -.911 .577 -1.66 1.498 -2.195a1 1 0 1 1 1.004 1.73c-.365 .212 -.502 .39 -.502 .465c0 .086 .179 .296 .622 .518c.6 .3 1.456 .482 2.378 .482s1.777 -.182 2.378 -.482c.443 -.222 .622 -.432 .622 -.518c0 -.07 -.142 -.256 -.502 -.465a1 1 0 0 1 -.363 -1.367"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGolfIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}