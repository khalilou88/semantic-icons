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
  selector: 'svg[si-lt-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <g fill-rule="evenodd" stroke-width="1pt" transform="scale(.51314 1.0322)">
      <svg:rect
        width="1063"
        height="708.7"
        fill="#006a44"
        rx="0"
        ry="0"
        transform="scale(.93865 .69686)"
      />
      <svg:rect
        width="1063"
        height="236.2"
        y="475.6"
        fill="#c1272d"
        rx="0"
        ry="0"
        transform="scale(.93865 .69686)"
      />
      <svg:path fill="#fdb913" d="M0 0h997.8v164.6H0z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLtFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
