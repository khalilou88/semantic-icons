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
  selector: 'svg[si-hvac-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.56 14h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5zM12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1zm0-8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1zm-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5H8.56z"
    />
    <svg:path
      d="M3 3v18h18V3H3zm9 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHvacIcon implements OnInit {
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
