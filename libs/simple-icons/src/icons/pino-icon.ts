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
  selector: 'svg[si-pino-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>pino</svg:title>
    <svg:path
      d="m9.225 5.555 2.789 5.472 2.756-5.505L11.999 0M1.979 20.123h13.769v-.037L8.862 6.29m3.524 5.522 4.131 8.311h5.505L15.137 6.291M4.5 24h14.87l-1.554-3.188H6.056"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPinoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
