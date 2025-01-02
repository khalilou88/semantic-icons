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
  selector: 'svg[si-clarivate-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Clarivate</title>
    <svg:path
      d="M11.262 18a20.588 20.588 0 0 0 3.246-1.476 20.954 20.954 0 0 0 2.852-2.064A14.46 14.46 0 0 0 19.82 12c.328.328.622.688.884 1.082.328.394.592.786.788 1.18.262.46.524.886.786 1.28.198.458.394.884.59 1.278a23.172 23.172 0 0 1-2.654 2.46 38.765 38.765 0 0 1-2.952 1.966A29.612 29.612 0 0 1 10.574 24l-.788-1.18c-.26-.46-.524-.886-.786-1.28-.209-.42-.406-.846-.59-1.278l-.59-1.376A20.4 20.4 0 0 0 11.26 18h.002zm2.754-16.918a29.61 29.61 0 0 1 3.246 1.574c.984.59 1.968 1.246 2.952 1.966a47.566 47.566 0 0 1 2.654 2.46c-.196.46-.392.886-.59 1.28-.26.458-.524.884-.786 1.278a6.16 6.16 0 0 1-.788 1.18c-.273.409-.568.803-.884 1.18a18.072 18.072 0 0 0-2.46-2.558 20.936 20.936 0 0 0-2.852-2.064 20.4 20.4 0 0 0-6.688-2.36l.59-1.38c.196-.392.394-.82.59-1.278l.786-1.18.788-1.18c1.18.262 2.328.622 3.442 1.082zm-7.574 18c-.524.066-1.016.1-1.474.1H3.492c-.46 0-.92-.034-1.378-.1a34.28 34.28 0 0 1-.786-3.54 32.942 32.942 0 0 1 0-7.18c.196-1.18.46-2.33.786-3.444l1.378-.196h1.476c.46 0 .95.032 1.474.098l1.378.196-.59 1.77c-.262.984-.46 2-.59 3.05-.066.984-.1 2-.1 3.05.066 1.048.198 2.064.394 3.048.262 1.05.558 2.034.886 2.952-.46.13-.92.196-1.378.196z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiClarivateIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
