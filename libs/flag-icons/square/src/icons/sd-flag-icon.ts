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
  selector: 'svg[si-sd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="sd-a">
        <svg:path fill-opacity=".7" d="M0 0h496v496H0z" />
      </clipPath>
    </defs>
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#sd-a)"
      transform="scale(1.0321)"
    >
      <svg:path fill="#000001" d="M0 330.7h992.1v165.4H0z" />
      <svg:path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <svg:path fill="red" d="M0 0h992.9v165.4H0z" />
      <svg:path fill="#009a00" d="M0 0v496l330.7-248z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSdFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
