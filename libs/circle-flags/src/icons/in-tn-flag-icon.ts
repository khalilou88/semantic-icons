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
  selector: 'svg[si-in-tn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0z" />
      <svg:path
        fill="#496e2d"
        d="M256 32a206 206 0 1 0 0 412 206 206 0 0 0 0-412zm0 8a198 198 0 0 1 182 276h-43a158 158 0 0 0-73-222v8a151 151 0 0 1 64 214h-1v72a197 197 0 0 1-258 0v-72a151 151 0 0 1 63-214v-8a159 159 0 0 0-73 222H74A198 198 0 0 1 256 40zm0 12A186 186 0 0 0 73 271a8 8 0 0 0 9 7 8 8 0 0 0 7-9l-3-31a170 170 0 1 1 337 31 8 8 0 0 0 7 9 8 8 0 0 0 9-7A187 187 0 0 0 256 52zM63 355a8 8 0 0 0-4 1 8 8 0 0 0-3 11 238 238 0 0 0 400 0 8 8 0 0 0-3-11 8 8 0 0 0-11 3 222 222 0 0 1-372 0 8 8 0 0 0-7-4z"
      />
      <svg:path
        fill="#ffda44"
        d="M199 86v51l-25 153-38 31h240l-38-31-25-153V86H199z"
      />
      <svg:path fill="#ff9811" d="M136 321h240v24H136z" />
      <svg:path fill="#eee" d="M136 345h240v24H136z" />
      <svg:path fill="#6da544" d="M136 369h240v24H136z" />
      <svg:circle cx="191" cy="357" r="8" fill="#0052b4" />
      <svg:circle
        cx="-321"
        cy="357"
        r="8"
        fill="#0052b4"
        transform="scale(-1 1)"
      />
      <svg:path
        fill="#d80027"
        d="M256 252a20 20 0 0 0-20 20 20 20 0 0 0-17-10 20 20 0 0 0-20 20 20 20 0 0 0 20 20 20 20 0 0 0 3 0v71h-1c-5 0-10 4-10 10v8c0 5 5 10 10 10h1v1c0 6 5 10 10 10h48c6 0 10-4 10-10v-1h1c6 0 10-5 10-10v-8c0-6-4-10-10-10h-1v-71a20 20 0 0 0 3 0 20 20 0 0 0 20-20 20 20 0 0 0-20-20 20 20 0 0 0-17 11 20 20 0 0 0 0-1 20 20 0 0 0-20-20z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiInTnFlagIcon implements OnInit {
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