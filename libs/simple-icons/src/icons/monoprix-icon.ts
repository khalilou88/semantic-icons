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
  selector: 'svg[si-monoprix-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Monoprix</title>
    <svg:path
      d="M21.072 8.042C21.072 3.612 16.981 0 12 0 6.991 0 2.928 3.612 2.928 8.042S6.99 16.085 12 16.085c.282 0 .564-.029.847-.043.62.339.747.706.761.988.142 1.608-2.44 5.08-4.303 6.49l.254.48c.113-.028 10.723-3.47 11.429-15.026.056-.283.07-.565.084-.875v-.043z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMonoprixIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
