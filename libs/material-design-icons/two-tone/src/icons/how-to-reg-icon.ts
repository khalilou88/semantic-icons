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
  selector: 'svg[si-how-to-reg-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="11" cy="8" r="2" opacity=".3" />
    <svg:path
      d="M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18z"
      opacity=".3"
    />
    <svg:path
      d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1 12H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2zm10.6-5.5-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHowToRegIcon implements OnInit {
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
