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
  selector: 'svg[si-ps-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ps-a">
        <svg:path fill-opacity=".7" d="M237.1 0h493.5v493.5H237.1z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#ps-a)" transform="translate(-246)scale(1.0375)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M0 0h987v164.5H0z" />
        <svg:path fill="#fff" d="M0 164.5h987V329H0z" />
        <svg:path fill="#090" d="M0 329h987v164.5H0z" />
        <svg:path fill="red" d="m0 493.5 493.5-246.8L0 0z" />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
