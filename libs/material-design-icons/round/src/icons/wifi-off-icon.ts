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
  selector: 'svg[si-wifi-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.06 10.14c.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-3.59-2.94-8.2-4.03-12.55-3.26l2.59 2.59c2.89-.03 5.8.92 8.17 2.86zm-2.27 1.83c-.78-.57-1.63-1-2.52-1.3l2.95 2.95c.24-.58.1-1.27-.43-1.65zm-3.84 4.26a4.28 4.28 0 0 0-3.91 0c-.59.31-.7 1.12-.23 1.59l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.49-.47.39-1.28-.21-1.59zm5.73 1.67L4.12 2.34a.996.996 0 1 0-1.41 1.41L5.05 6.1c-1.01.5-1.99 1.11-2.89 1.85a1.42 1.42 0 0 0-.1 2.1c.51.51 1.32.56 1.87.1 1-.82 2.1-1.46 3.25-1.93l2.23 2.23c-1.13.3-2.21.8-3.19 1.51-.69.5-.73 1.51-.13 2.11l.01.01c.49.49 1.26.54 1.83.13a7.135 7.135 0 0 1 3.97-1.29l6.37 6.37c.39.39 1.02.39 1.41 0 .39-.37.39-1 0-1.39z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWifiOffIcon implements OnInit {
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
