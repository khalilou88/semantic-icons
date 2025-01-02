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
  selector: 'svg[si-truck-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.908 2.067A.978.978 0 0 0 2 3.05V8h6V3.05a.978.978 0 0 0-.908-.983 32.481 32.481 0 0 0-4.184 0ZM12.919 4.722A.98.98 0 0 0 11.968 4H10a1 1 0 0 0-1 1v6.268A2 2 0 0 1 12 13h1a.977.977 0 0 0 .985-1 31.99 31.99 0 0 0-1.066-7.278Z"
    />
    <svg:path
      d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 12V9h6v3a1 1 0 0 1-1 1 2 2 0 1 0-4 0 1 1 0 0 1-1-1Z"
    />
    <svg:path d="M6 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTruckIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'aria-hidden', 'true');
    this.render.setAttribute(svg, 'data-slot', 'icon');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
