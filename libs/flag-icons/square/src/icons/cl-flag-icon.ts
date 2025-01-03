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
  selector: 'svg[si-cl-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="cl-a">
        <svg:path fill-opacity=".7" d="M0 0h708.7v708.7H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g fill-rule="evenodd" clip-path="url(#cl-a)" transform="scale(.722)">
      <svg:path fill="#fff" d="M354.3 0H1063v354.3H354.3z" />
      <svg:path fill="#0039a6" d="M0 0h354.3v354.3H0z" />
      <svg:path
        fill="#fff"
        d="m232.3 265.3-55-41.1-54.5 41.5 20.3-67.5-54.5-41.7 67.4-.6 21-67.3 21.3 67.2h67.5L211.4 198z"
      />
      <svg:path fill="#d52b1e" d="M0 354.3h1063v354.4H0z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiClFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
