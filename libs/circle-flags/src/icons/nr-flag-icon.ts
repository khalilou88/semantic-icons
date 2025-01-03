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
  selector: 'svg[si-nr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#0052b4"
        d="M0 0h512v233.7L494.3 257l17.7 21.3V512H0V278.3l18.7-22.9L0 233.7z"
      />
      <svg:path
        fill="#eee"
        d="m211.5 345-28.7 13.5 15.3 27.8-31.2-6-4 31.5-21.6-23.1-21.7 23.1-4-31.4-31.1 6 15.3-27.9L71 345l28.7-13.4-15.3-27.8 31.1 6 4-31.5 21.7 23.1 21.7-23.1 4 31.4 31-6-15.2 27.9z"
      />
      <svg:path fill="#ffda44" d="M0 233.7h512v44.6H0z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNrFlagIcon implements OnInit {
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
