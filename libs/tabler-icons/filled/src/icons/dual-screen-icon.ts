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
  selector: 'svg[si-dual-screen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19 3a1 1 0 0 1 1 1v15a1 1 0 0 1 -1 1h-5v2a1 1 0 0 1 -1.351 .936l-8 -3a1 1 0 0 1 -.649 -.936v-15a1 1 0 0 1 .212 -.616l.068 -.079l.078 -.072l.066 -.05l.092 -.058l.065 -.033l.1 -.04l.099 -.028l.046 -.01l.108 -.013l.066 -.001zm-5.649 3.064a1 1 0 0 1 .649 .936v11h4v-13h-7.486z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDualScreenIcon implements OnInit {
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
