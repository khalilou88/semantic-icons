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
  selector: 'svg[si-na-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="na-a">
        <svg:path fill-opacity=".7" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <svg:g fill-rule="evenodd" clip-path="url(#na-a)">
      <svg:path fill="#fff" d="M0 0h512v512H0z" />
      <svg:path fill="#3662a2" d="m-108.2.2.8 368.6L466.6 0z" />
      <svg:path fill="#38a100" d="m630.7 511.5-1.4-383.2-579 383.5z" />
      <svg:path
        fill="#c70000"
        d="m-107.9 396.6.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2z"
      />
      <svg:path
        fill="#ffe700"
        d="m154 183.4-23.1-14-13.4 23.6-13-23.8L81 183l.6-27.1-27 .2 14-23.2L45 119.5l23.8-13L55 83l27 .6-.1-27.1 23.2 14 13.4-23.6 13 23.7L155.2 57l-.6 27 27-.1-14 23.2 23.6 13.3-23.8 13.1 13.7 23.4-27-.5z"
      />
      <svg:path
        fill="#3662a2"
        d="M167.8 120c0 27.2-22.3 49.3-49.8 49.3s-49.7-22.1-49.7-49.4 22.3-49.3 49.8-49.3 49.7 22 49.7 49.3z"
      />
      <svg:path
        fill="#ffe700"
        d="M157 120a39 39 0 1 1-77.9 0 39 39 0 0 1 77.9 0"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
