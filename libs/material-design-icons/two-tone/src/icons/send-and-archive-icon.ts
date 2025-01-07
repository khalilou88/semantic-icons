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
  selector: 'svg[si-send-and-archive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 7.01v3.49l6 1.5-6 1.5v3.49l5.39-2.27a6.99 6.99 0 0 1 3.48-3.97L5 7.01z"
      opacity=".3"
    />
    <svg:path
      d="m11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z"
    />
    <svg:path
      d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3h2.5v-3h1v3H20l-3 3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSendAndArchiveIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
