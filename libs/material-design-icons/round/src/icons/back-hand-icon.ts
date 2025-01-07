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
  selector: 'svg[si-back-hand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 16c0 4.42-3.58 8-8 8-3.26 0-6.19-1.99-7.4-5.02l-3.03-7.61a1 1 0 0 1 1.24-1.32l.79.26c.56.18 1.02.61 1.24 1.16l1.28 3.21c.08.2.26.32.46.32H8V3.25a1.25 1.25 0 0 1 2.5 0v8.25c0 .28.22.5.5.5s.5-.22.5-.5V1.25a1.25 1.25 0 0 1 2.5 0V11.5c0 .28.22.5.5.5s.5-.22.5-.5V2.75a1.25 1.25 0 0 1 2.5 0v8.75c0 .28.22.5.5.5s.5-.22.5-.5V5.75a1.25 1.25 0 0 1 2.5 0V16z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBackHandIcon implements OnInit {
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
