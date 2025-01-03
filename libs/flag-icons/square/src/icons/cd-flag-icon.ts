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
  selector: 'svg[si-cd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="cd-a">
        <svg:path fill="#fff" d="M0-88h600v600H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#cd-a)" transform="translate(0 75.1)scale(.853)">
      <svg:path fill="#007fff" d="M0-88h800v600H0z" />
      <svg:path
        fill="#f7d618"
        d="M36 32h84l26-84 26 84h84l-68 52 26 84-68-52-68 52 26-84zM750-88 0 362v150h50L800 62V-88z"
      />
      <svg:path fill="#ce1021" d="M800-88 0 392v120L800 32z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCdFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
