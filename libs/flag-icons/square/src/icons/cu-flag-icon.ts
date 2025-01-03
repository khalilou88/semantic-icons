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
  selector: 'svg[si-cu-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="cu-a">
        <svg:path fill-opacity=".7" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <svg:g fill-rule="evenodd" clip-path="url(#cu-a)">
      <svg:path fill="#002a8f" d="M-32 0h768v512H-32z" />
      <svg:path
        fill="#fff"
        d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"
      />
      <svg:path fill="#cb1515" d="m-32 0 440.7 255.7L-32 511z" />
      <svg:path
        fill="#fff"
        d="M161.8 325.5 114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCuFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}