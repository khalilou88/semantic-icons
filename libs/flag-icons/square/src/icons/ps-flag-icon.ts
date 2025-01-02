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
  selector: 'svg[si-ps-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="ps-a">
        <svg:path fill-opacity=".7" d="M237.1 0h493.5v493.5H237.1z" />
      </clipPath>
    </defs>
    <g clip-path="url(#ps-a)" transform="translate(-246)scale(1.0375)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M0 0h987v164.5H0z" />
        <svg:path fill="#fff" d="M0 164.5h987V329H0z" />
        <svg:path fill="#090" d="M0 329h987v164.5H0z" />
        <svg:path fill="red" d="m0 493.5 493.5-246.8L0 0z" />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
