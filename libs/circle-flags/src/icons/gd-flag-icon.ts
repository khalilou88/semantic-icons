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
  selector: 'svg[si-gd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#ffda44" d="M23.6 23.7h464.8v464.7H23.6z" />
      <svg:path
        fill="#496e2d"
        d="M0 75.1 38 38l436.3 436.4 37.7-37.5V75l-39.6-35.5L40.2 471.8 0 436.8z"
      />
      <svg:circle cx="256" cy="256.1" r="89" fill="#a2001d" />
      <svg:path
        fill="#ffda44"
        d="m256 167 20 61.5h64.6l-52.3 38 20 61.3-52.3-38-52.3 38 20-61.3-52.3-38H236zM256 .2z"
      />
      <svg:path fill="#a2001d" d="M0 0h512v75.1H0zm0 436.8h512v75.1H0z" />
      <svg:path
        fill="#ffda44"
        d="m256 28 4.1 12.7h13.5l-10.9 8 4.2 12.6-10.9-7.9-10.8 8 4.1-12.8-10.9-8H252zm-62 0 4 12.7h13.5l-10.9 8 4.2 12.6-10.9-7.9-10.8 8 4.1-12.8-10.8-8h13.4zm124 0 4.2 12.7h13.4l-10.8 8 4.1 12.6-10.8-7.9-10.9 8 4.2-12.8-10.9-8H314zm-62 422.8 4.1 12.7h13.5l-10.9 8 4.2 12.7-10.9-8-10.8 8 4.1-12.8-10.9-7.9H252zm-62 0 4 12.7h13.5l-10.9 8 4.2 12.7-10.9-8-10.8 8 4.1-12.8-10.8-7.9h13.4zm124 0 4.2 12.7h13.4l-10.8 8 4.1 12.7-10.8-8-10.9 8 4.2-12.8-10.9-7.9H314zm-240-199a22.3 22.3 0 0 1-37.6 23.9c-12-18.8-5-49.5-5-49.5S66 233 78 251.9z"
      />
      <svg:circle cx="65.1" cy="273.2" r="11.1" fill="#a2001d" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGdFlagIcon implements OnInit {
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
