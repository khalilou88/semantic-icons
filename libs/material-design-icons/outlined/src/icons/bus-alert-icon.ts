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
  selector: 'svg[si-bus-alert-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="6.5" cy="15.5" r="1.5" />
    <svg:circle cx="13.5" cy="15.5" r="1.5" />
    <svg:path
      d="M4 11V8h7.29C11.1 7.37 11 6.7 11 6H4.43c.83-.71 2.98-1.09 6.65-.98.1-.7.3-1.37.59-1.99C2.97 2.67 2 5.02 2 7v9.5c0 .95.38 1.81 1 2.44V21c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V13c-1.91 0-3.63-.76-4.89-2H4zm12 5c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-3h12v3z"
    />
    <svg:path
      d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBusAlertIcon implements OnInit {
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
