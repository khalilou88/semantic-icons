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
  selector: 'svg[si-pa-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="pa-a">
        <svg:path fill-opacity=".7" d="M0 0h640v480H0z" />
      </clipPath>
    </defs>
    <svg:g clip-path="url(#pa-a)">
      <svg:path fill="#fff" d="M0 0h640v480H0z" />
      <svg:path fill="#fff" fill-rule="evenodd" d="M92.5 0h477.2v480H92.4z" />
      <svg:path
        fill="#db0000"
        fill-rule="evenodd"
        d="M323 3.6h358v221.7H323z"
      />
      <svg:path
        fill="#0000ab"
        fill-rule="evenodd"
        d="M3.2 225.3h319.9V480H3.2zm211.6-47.6-42-29.4-41.7 29.6 15.5-48L105 100l51.6-.4 16-48 16.3 47.9h51.6l-41.5 30 15.9 48z"
      />
      <svg:path
        fill="#d80000"
        fill-rule="evenodd"
        d="m516.9 413.9-42.4-27.7-42.1 28 15.6-45.6-42-28 52-.5 16.2-45.4 16.4 45.3h52l-41.8 28.5 16 45.4z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}