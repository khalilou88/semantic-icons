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
  selector: 'svg[si-hardware-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.77 6H11v5h2V5H9c-.89 0-1.68.39-2.23 1zM11 13h2v6h-2z"
      opacity=".3"
    />
    <svg:path
      d="m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3h-2zm-5 16h-2v-6h2v6zm0-8h-2V6H6.77C7.32 5.39 8.11 5 9 5h4v6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHardwareIcon implements OnInit {
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
