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
  selector: 'svg[si-minor-crash-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 15v5h14v-5H5zm2.5 4c-.83 0-1.5-.67-1.5-1.5S6.67 16 7.5 16s1.5.67 1.5 1.5S8.33 19 7.5 19zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
      opacity=".3"
    />
    <svg:path
      d="M9.41 5 8 6.41l-3-3L6.41 2l3 3zM19 3.41 17.59 2l-3 3L16 6.41l3-3zM13 0h-2v5h2V0zm8 15v8c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-5.99C5.29 8.42 5.84 8 6.5 8h11c.66 0 1.22.42 1.42 1.01L21 15zM5.81 13h12.38l-1.04-3H6.85l-1.04 3zM19 15H5v5h14v-5zM7.5 19c.83 0 1.5-.67 1.5-1.5S8.33 16 7.5 16 6 16.67 6 17.5 6.67 19 7.5 19zm9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMinorCrashIcon implements OnInit {
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
