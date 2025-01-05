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
  selector: 'svg[si-boardgamegeek-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>BoardGameGeek</svg:title>
    <svg:path
      d="m19.7 4.44-2.38.64L19.65 0 4.53 5.56l.83 6.67-1.4 1.34L8.12 24l8.85-3.26 3.07-7.22-1.32-1.27.98-7.81Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoardgamegeekIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF5100');
  }
}
