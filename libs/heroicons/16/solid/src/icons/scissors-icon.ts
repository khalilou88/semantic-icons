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
  selector: 'svg[si-scissors-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M2.25 6.665c.969.56 2.157.396 2.94-.323l.359.207c.34.196.777.02.97-.322.19-.337.115-.784-.22-.977l-.359-.207a2.501 2.501 0 1 0-3.69 1.622ZM4.364 5a1 1 0 1 1-1.732-1 1 1 0 0 1 1.732 1ZM8.903 5.465a2.75 2.75 0 0 0-1.775 1.893l-.375 1.398-1.563.902a2.501 2.501 0 1 0 .75 1.3L14.7 5.9a.75.75 0 0 0-.18-1.374l-.782-.21a2.75 2.75 0 0 0-1.593.052L8.903 5.465ZM4.365 11a1 1 0 1 1-1.732 1 1 1 0 0 1 1.732-1Z"
      clip-rule="evenodd"
    />
    <svg:path
      d="M8.892 10.408c-.052.03-.047.108.011.128l3.243 1.097a2.75 2.75 0 0 0 1.593.05l.781-.208a.75.75 0 0 0 .18-1.374l-2.137-1.235a1 1 0 0 0-1 0l-2.67 1.542Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScissorsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'aria-hidden', 'true');
    this.render.setAttribute(svg, 'data-slot', 'icon');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
