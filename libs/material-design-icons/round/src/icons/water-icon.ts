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
  selector: 'svg[si-water-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.98 14H22h-.02zM5.35 13c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 .93 0 1.05.45 2.01.79.63.22 1.3-.24 1.3-.91 0-.52-.23-.83-.64-.97-.6-.22-1.15-.9-2.69-.9-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.54 0-2.13.71-2.68.91-.41.13-.65.43-.65.97 0 .67.66 1.13 1.29.91 1.06-.36 1.1-.8 2.06-.8zm13.32 2c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.1 1-3.34 1-1.24 0-1.38-1-3.33-1-1.53 0-2.15.71-2.69.91-.41.14-.65.45-.65.98 0 .67.66 1.13 1.3.91 1.02-.36 1.08-.8 2.04-.8 1.24 0 1.38 1 3.33 1 1.95 0 2.1-1 3.34-1 1.19 0 1.42 1 3.33 1 1.94 0 2.09-1 3.33-1 .94 0 1.06.46 2.03.8.63.22 1.3-.24 1.3-.91 0-.53-.24-.83-.65-.98-.53-.19-1.14-.91-2.68-.91zM5.35 9c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 .93 0 1.05.45 2.01.79.63.22 1.3-.24 1.3-.91 0-.52-.23-.83-.64-.97-.6-.23-1.15-.91-2.69-.91-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.54 0-2.13.71-2.68.91-.41.14-.65.44-.65.98 0 .67.66 1.13 1.29.91 1.06-.36 1.1-.8 2.06-.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWaterIcon implements OnInit {
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
