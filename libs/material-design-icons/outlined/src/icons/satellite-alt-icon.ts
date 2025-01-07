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
  selector: 'svg[si-satellite-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 14h2a9 9 0 0 1-9 9v-2c3.87 0 7-3.13 7-7zm-7 3v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3zM18.26.59l3.54 3.54c.78.78.78 2.05 0 2.83l-3.18 3.18c-.78.78-2.05.78-2.83 0L14.55 8.9l-.71.7 1.24 1.24c.78.78.78 2.05 0 2.83l-1.41 1.41c-.78.78-2.05.78-2.83 0L9.6 13.84l-.71.71 1.24 1.24c.78.78.78 2.05 0 2.83L6.95 21.8c-.78.78-2.05.78-2.83 0L.58 18.26c-.78-.78-.78-2.05 0-2.83l3.18-3.18c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.24-1.23c-.78-.78-.78-2.05 0-2.83L8.72 7.3c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.25-1.23c-.78-.78-.78-2.05 0-2.83L15.43.59c.79-.79 2.05-.79 2.83 0zm-15.2 15.2L2 16.85l3.54 3.54 1.06-1.06-3.54-3.54zm2.12-2.12-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zm4.95-4.95-1.41 1.41 3.54 3.54 1.41-1.41-3.54-3.54zm4.6-4.6-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zM16.85 2l-1.06 1.06 3.54 3.54 1.06-1.06L16.85 2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSatelliteAltIcon implements OnInit {
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
