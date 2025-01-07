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
  selector: 'svg[si-30fps-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9A2.1 2.1 0 0 0 8.9 12 2.1 2.1 0 0 0 11 9.9V8c0-1.66-1.34-3-3-3H2zm17 3v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si30fpsIcon implements OnInit {
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
