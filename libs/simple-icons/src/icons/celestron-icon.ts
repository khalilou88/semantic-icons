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
  selector: 'svg[si-celestron-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Celestron</title>
    <svg:path
      d="M12 .002c-6.6266 0-12 5.3712-12 12 0 6.6275 5.3734 11.996 12 11.996 1.7452 0 3.4033-.3698 4.8984-1.041C10.7585 21.2392 2.2788 17.3246 3.25 9.5312c.6406-5.1338 7.2145-8.46 13.8047-8.414C15.518.4012 13.8062.002 12 .002zm5.4297 1.8437c-5.0918-.049-9.3055 2.0411-9.6875 5.5566-.6046 5.5956 7.1547 8.8084 11.8437 10.1407.9056.2592 1.8969.4197 2.7676.5234C23.399 16.286 24 14.2111 24 12.002c0-4.2502-2.21-7.9827-5.541-10.1172a18.6755 18.6755 0 0 0-1.0293-.0391z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCelestronIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}