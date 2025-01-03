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
  selector: 'svg[si-veed-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>VEED</title>
    <svg:path
      d="m23.9847 3.44845-6.4707 15.8711a2.41415 2.41415 0 0 1-2.23542 1.50241H8.73883a2.4138 2.4138 0 0 1-2.23388-1.5005L.01467 3.44846a.196.196 0 0 1 .18143-.27042h6.5505a.3923.3923 0 0 1 .36707.25392l4.90577 13.08297 4.8655-13.08144c.05678-.15342.20368-.25545.36708-.25545h6.55164c.13924 0 .23398.14115.18181.26965z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVeedIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
