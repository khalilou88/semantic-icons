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
  selector: 'svg[si-loopback-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LoopBack</svg:title>
    <svg:path
      d="m6.333 18.413 2.512-1.615 3.179 1.814 3.209-1.876 2.656 1.515-5.849 3.418-5.707-3.256ZM5.273 6.239l6.687-3.907 6.73 3.839.022 6.755-2.654-1.513-.011-3.701-4.071-2.322-4.05 2.367.011 3.698-.903.526-1.739 1.118-.022-6.86Zm3.608 2.463 1.913 1.089-1.906 1.11-.007-2.199Zm4.337 5.514 2.634-1.544 3.271 1.862 2.221-1.296-.013-2.571-1.677-.957-.01-3.054 4.355 2.485.001 5.611-4.859 2.841-5.923-3.377Zm-13.189.661L0 9.249l4.322-2.525.009 3.061-1.675.979.013 2.57 2.234 1.274L15.098 8.66l.009 3.062-10.189 5.944-4.889-2.789Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLoopbackIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
