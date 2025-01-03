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
  selector: 'svg[si-kw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="kw-a">
        <svg:path fill-opacity=".7" d="M0 0h496v496H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#kw-a)"
      transform="scale(1.0321)"
    >
      <svg:path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <svg:path fill="#f31830" d="M0 330.7h992.1v165.4H0z" />
      <svg:path fill="#00d941" d="M0 0h992.1v165.4H0z" />
      <svg:path fill="#000001" d="M0 0v496l247.5-165.3.5-165.5z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKwFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
