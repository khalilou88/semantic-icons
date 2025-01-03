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
  selector: 'svg[si-gy-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd">
      <svg:path fill="#399408" d="M2.4 0H640v480H2.4z" />
      <svg:path fill="#fff" d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8z" />
      <svg:path
        fill="#ffde08"
        d="M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"
      />
      <svg:path
        fill="#000001"
        d="M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477z"
      />
      <svg:path
        fill="#de2110"
        d="M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGyFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}