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
  selector: 'svg[si-sl-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="sl-a">
        <svg:rect width="384" height="512" rx="4.6" ry="7.6" />
      </clipPath>
    </defs>
    <g fill-rule="evenodd" clip-path="url(#sl-a)" transform="scale(1.33333 1)">
      <svg:path fill="#0000cd" d="M0 341.7h512V512H0z" />
      <svg:path fill="#fff" d="M0 171.4h512v170.3H0z" />
      <svg:path fill="#00cd00" d="M0 0h512v171.4H0z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSlFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
