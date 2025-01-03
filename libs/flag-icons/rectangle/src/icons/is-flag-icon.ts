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
  selector: 'svg[si-is-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="is-a">
        <svg:path fill-opacity=".7" d="M0 0h640v480H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g fill-rule="evenodd" stroke-width="0" clip-path="url(#is-a)">
      <svg:path fill="#003897" d="M0 0h666.7v480H0z" />
      <svg:path
        fill="#fff"
        d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0z"
      />
      <svg:path
        fill="#d72828"
        d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
