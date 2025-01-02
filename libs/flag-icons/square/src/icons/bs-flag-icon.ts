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
  selector: 'svg[si-bs-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="bs-a">
        <svg:path fill-opacity=".7" d="M56.6 26.4H537v480.3H56.6z" />
      </clipPath>
    </defs>
    <g
      fill-rule="evenodd"
      clip-path="url(#bs-a)"
      transform="matrix(1.066 0 0 1.067 -60.4 -28.1)"
    >
      <svg:path fill="#fff" d="M990 506.2H9.4V27.6H990z" />
      <svg:path fill="#ffe900" d="M990 370.6H9.4V169.2H990z" />
      <svg:path
        fill="#08ced6"
        d="M990 506.2H9.4V346.7H990zm0-319H9.4V27.9H990z"
      />
      <svg:path
        fill="#000001"
        d="M9 25.9c2.1 0 392.3 237 392.3 237L7.8 505.3z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
