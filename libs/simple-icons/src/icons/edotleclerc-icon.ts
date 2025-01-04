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
  selector: 'svg[si-edotleclerc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>E.Leclerc</svg:title>
    <svg:path
      d="M12.0006 0C5.4304 0 .104 5.373.104 12.0006.1041 18.628 5.4304 24 12.0006 24c6.57 0 11.8953-5.372 11.8953-11.9994C23.8959 5.373 18.5705 0 12.0006 0zm0 2.491c5.2064 0 9.4266 4.2576 9.4266 9.5096 0 5.2518-4.2202 9.5085-9.4266 9.5085-5.2065 0-9.4278-4.2567-9.4278-9.5085 0-5.252 4.2213-9.5097 9.4278-9.5097zm1.1477 1.9912c-1.4425 0-2.7735.4696-3.8562 1.266h3.1929V8.982c-.556.0284-1.0156.4782-1.0156 1.0436v5.4499h.9442c1.2058 0 1.5093-1.4532 1.5093-1.4532h2.836l.001 2.5939c1.7738-1.1835 2.9437-3.215 2.9437-5.5212 0-3.6525-2.9346-6.6128-6.5554-6.6128zM6.49 6.7322v1.6204c.5462.1418 1.018.6113 1.018 1.3817v5.4592c0 .6162-.4365 1.1693-1.018 1.315v2.0943h9.3003V15.004l-1.2344.007c-.348.8466-1.1771 1.4415-2.1422 1.4415h-1.913V9.691c0-.6981.4543-1.1824 1.0156-1.335V6.7322z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEdotleclercIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
