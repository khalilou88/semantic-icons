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
  selector: 'svg[si-bj-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="bj-a">
        <svg:path fill="gray" d="M67.6-154h666v666h-666z" />
      </clipPath>
    </defs>
    <g clip-path="url(#bj-a)" transform="translate(-52 118.4)scale(.7688)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#319400" d="M0-154h333v666H0z" />
        <svg:path fill="#ffd600" d="M333-154h666v333H333z" />
        <svg:path fill="#de2110" d="M333 179h666v333H333z" />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBjFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
