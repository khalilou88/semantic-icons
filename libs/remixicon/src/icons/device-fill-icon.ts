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
  selector: 'svg[si-device-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 6H11C10.4477 6 10 6.44772 10 7V20H4C3.44772 20 3 19.5523 3 19V3C3 2.44772 3.44772 2 4 2H18C18.5523 2 19 2.44772 19 3V6ZM13 8H21C21.5523 8 22 8.44772 22 9V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V9C12 8.44772 12.4477 8 13 8Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeviceFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
