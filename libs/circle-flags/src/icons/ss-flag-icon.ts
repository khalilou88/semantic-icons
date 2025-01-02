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
  selector: 'svg[si-ss-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M74.1 115 512 156.9v31.5l-42.4 70.3 42.4 64.2v31.5L74.1 386.8z"
      />
      <svg:path fill="#333" d="M0 0h512v156.8H50z" />
      <svg:path fill="#a2001d" d="M150.6 188.3H512v134.5H150.6z" />
      <svg:path fill="#496e2d" d="M50 354.3h462V512H0z" />
      <svg:path fill="#0052b4" d="M0 0v512l256-256z" />
      <svg:path
        fill="#ffda44"
        d="m83.4 192.4 31.2 43.6 51.2-16.3-31.9 43.2 31.3 43.6-51-16.9-31.7 43.2.3-53.7L32 262.2 83 246z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
