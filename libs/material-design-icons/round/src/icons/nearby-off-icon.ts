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
  selector: 'svg[si-nearby-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.41 13.42 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l2.58-2.58c.78-.78 2.05-.78 2.83 0l8 8c.79.78.79 2.04 0 2.83zm-.93 8.48a.996.996 0 0 1-1.41 0L16 18.83l-2.58 2.58c-.78.78-2.05.78-2.83 0l-8-8c-.78-.78-.78-2.05 0-2.83L5.17 8 2.1 4.93a.996.996 0 1 1 1.41-1.41l16.98 16.97c.38.38.38 1.02-.01 1.41zm-6.29-4.88-1.39-1.39-.09.09c-.39.39-1.02.39-1.42 0l-3.01-3.01a.996.996 0 0 1 0-1.41l.09-.09-1.4-1.39L4.8 12l7.2 7.2 2.19-2.18zm1.52-5.73L12.7 8.28a.996.996 0 0 0-1.41 0l-.09.1 4.42 4.42.09-.09c.39-.39.39-1.03 0-1.42z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNearbyOffIcon implements OnInit {
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
