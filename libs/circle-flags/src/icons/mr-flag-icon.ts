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
  selector: 'svg[si-mr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#496e2d" d="M0 0h512v512H0z" />
      <svg:g fill="#ffda44">
        <svg:path
          d="M256 295.8a89 89 0 0 1-87-70 89.4 89.4 0 0 0-2 19 89 89 0 1 0 178 0 89.4 89.4 0 0 0-2-19 89 89 0 0 1-87 70z"
        />
        <svg:path
          d="m256 178 8.3 25.6H291l-21.7 15.8 8.3 25.5L256 229l-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"
        />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMrFlagIcon implements OnInit {
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
