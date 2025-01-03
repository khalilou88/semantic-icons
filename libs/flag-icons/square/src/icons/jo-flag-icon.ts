import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-jo-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="jo-a">
        <svg:path fill-opacity=".7" d="M113.6 0H607v493.5H113.6z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#jo-a)" transform="translate(-117.8)scale(1.0375)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M0 0h987v164.5H0z" />
        <svg:path fill="#fff" d="M0 164.5h987V329H0z" />
        <svg:path fill="#090" d="M0 329h987v164.5H0z" />
        <svg:path fill="red" d="m0 493.5 493.5-246.8L0 0z" />
        <svg:path
          fill="#fff"
          d="m164.8 244 22 10.6h-24.5l5.5 24-15.3-19.3-15.3 19.2 5.5-23.9H118l22.1-10.7-15.3-19.1 22.1 10.6 5.5-23.9 5.5 24 22-10.7z"
        />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJoFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
