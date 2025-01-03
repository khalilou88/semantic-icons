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
  selector: 'svg[si-iq-kr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="m0 144.7 257-22.4 255 22.4v222.6l-254.9 31L0 367.3z"
      />
      <svg:path fill="#d80027" d="M0 0h512v144.7H0z" />
      <svg:path fill="#6da544" d="M0 367.3h512V512H0z" />
      <svg:path
        fill="#ffda44"
        d="m256 95.9 19.4 83.6 56.1-65-21.6 83 79.8-31.4-57.7 63.5 85.3 9.2-80.7 29.3L408 316l-85-11.5 40.8 75.5-70-49.7L295 416l-39-76.4-38.9 76.4 1.2-85.8-70 49.7 40.8-75.5-85 11.5 71.3-47.9-80.7-29.3 85.3-9.3-57.7-63.4 79.8 31.5-21.6-83.1 56 65z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIqKrFlagIcon implements OnInit {
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
