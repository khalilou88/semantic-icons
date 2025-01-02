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
  selector: 'svg[si-skateboarding-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M5.5 15h3.5l.75 -1.5" />
    <svg:path d="M14 19v-5l-2.5 -3l2.5 -4" />
    <svg:path d="M8 8l3 -1h4l1 3h3" />
    <svg:path
      d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
      fill="currentColor"
    />
    <svg:path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" />
    <svg:path
      d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
      fill="currentColor"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSkateboardingIcon implements OnInit {
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
