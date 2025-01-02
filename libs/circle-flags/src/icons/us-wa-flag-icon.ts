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
  selector: 'svg[si-us-wa-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#6da544" d="M0 0h512v512H0z" />
      <svg:circle cx="256" cy="256" r="156" fill="#333" />
      <svg:circle cx="256" cy="256" r="144" fill="#ffda44" />
      <svg:path
        fill="#338af3"
        d="M256 144a112 112 0 0 0-112 112 112 112 0 0 0 45 89h134a112 112 0 0 0 45-89 112 112 0 0 0-112-112z"
      />
      <svg:path
        fill="#ffd6bb"
        d="M256 189a46 46 0 0 0-47 46v23c0 25 21 52 47 52s47-27 47-52v-23c0-26-21-46-47-46z"
      />
      <svg:path
        fill="#eee"
        d="M321 243a13 13 0 0 0-10-18 13 13 0 0 0-11-18 47 47 0 0 0-87 0 13 13 0 0 0-12 18 13 13 0 0 0-9 18 13 13 0 0 0 1 25c0 5 4 9 9 10v1a12 12 0 0 0 18 10 58 58 0 0 1-3-5v-50c0-21 18-34 39-34 22 0 40 13 40 34v50l-4 5a12 12 0 0 0 19-11c4-1 8-5 9-10a13 13 0 0 0 1-25z"
      />
      <svg:path
        fill="#acabb1"
        d="M274 193a3 3 0 0 0-3 3v6l6 3v-9a3 3 0 0 0-3-3zm-18-2a3 3 0 0 0-3 3v6a52 52 0 0 1 6 0v-6a3 3 0 0 0-3-3zm-18 2a3 3 0 0 0-3 3v9a41 41 0 0 1 6-3v-6a3 3 0 0 0-3-3z"
      />
      <svg:rect
        width="34"
        height="6"
        x="239"
        y="281"
        fill="#333"
        rx="3"
        ry="3"
      />
      <svg:rect
        width="6"
        height="12"
        x="231"
        y="250"
        fill="#333"
        rx="3"
        ry="3"
      />
      <svg:rect
        width="6"
        height="12"
        x="275"
        y="250"
        fill="#333"
        rx="3"
        ry="3"
      />
      <svg:path fill="none" d="M225 245s3-3 9-3 8 3 8 3m28 0s3-3 9-3 8 3 8 3" />
      <svg:path
        fill="#eee"
        d="M239 303c-3 0-6 3-6 6v2h-2c-3 0-6 3-6 6v47a112 112 0 0 0 31 4 112 112 0 0 0 31-4v-47c0-3-3-6-6-6h-2v-2c0-3-3-6-6-6h-34z"
      />
      <svg:path
        fill="#333"
        d="m225 318-30 9c-3 0-6 3-6 6v12a112 112 0 0 0 52 22v-43c0-3-3-6-6-6h-10zm52 0c-3 0-6 3-6 6v43a112 112 0 0 0 52-22v-12c0-3-3-6-6-6l-30-9h-10z"
      />
      <svg:path fill="none" d="M258 597h344v341H258z" />
      <svg:path fill="#ff9811" d="m256 250 8 20h-16z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsWaFlagIcon implements OnInit {
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
