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
  selector: 'svg[si-bluetooth-drive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 10H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8h-3c-1.1 0-2-.9-2-2zm-8.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
    />
    <svg:path
      d="M22 3.85 19.15 1h-.5v3.79l-2.3-2.29-.7.7L18.44 6l-2.79 2.79.7.71 2.3-2.3V11h.5L22 8.14 19.85 6 22 3.85zm-2.35-.94.94.94-.94.94V2.91zm.94 5.23-.94.94V7.2l.94.94z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBluetoothDriveIcon implements OnInit {
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
