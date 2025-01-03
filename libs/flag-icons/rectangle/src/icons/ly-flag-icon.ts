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
  selector: 'svg[si-ly-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="ly-a">
        <svg:path d="M166.7-20h666.6v500H166.7z" />
      </clipPath>
    </defs>
    <svg:g clip-path="url(#ly-a)" transform="matrix(.96 0 0 .96 -160 19.2)">
      <svg:path fill="#239e46" d="M0-20h1000v500H0z" />
      <svg:path fill="#000001" d="M0-20h1000v375H0z" />
      <svg:path fill="#e70013" d="M0-20h1000v125H0z" />
      <svg:path
        fill="#fff"
        d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLyFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
