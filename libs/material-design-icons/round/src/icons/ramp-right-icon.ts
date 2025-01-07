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
  selector: 'svg[si-ramp-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 21c.55 0 1-.45 1-1V6.83l.88.88a.996.996 0 1 0 1.41-1.41L12.7 3.71a.996.996 0 0 0-1.41 0L8.71 6.29a.996.996 0 1 0 1.41 1.41l.88-.87V9c0 3.62-2.89 6.22-4.97 7.62a.99.99 0 0 0-.14 1.53c.33.33.87.4 1.26.13C8.74 17.22 10.04 16 11 14.69v5.3c0 .56.45 1.01 1 1.01z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRampRightIcon implements OnInit {
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
