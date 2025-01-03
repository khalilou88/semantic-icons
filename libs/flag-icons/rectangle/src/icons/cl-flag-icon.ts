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
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g fill-rule="evenodd" clip-path="url(#cl-a)" transform="scale(.9375)">
      <svg:path fill="#fff" d="M256 0h512v256H256z" />
      <svg:path fill="#0039a6" d="M0 0h256v256H0z" />
      <svg:path
        fill="#fff"
        d="M167.8 191.7 128.2 162l-39.5 30 14.7-48.8L64 113.1l48.7-.5L127.8 64l15.5 48.5 48.7.1-39.2 30.4z"
      />
      <svg:path fill="#d52b1e" d="M0 256h768v256H0z" />
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
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
