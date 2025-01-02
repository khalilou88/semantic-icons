import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-drum-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m2 2 8 8" />
    <svg:path d="m22 2-8 8" />
    <ellipse cx="12" cy="9" rx="10" ry="5" />
    <svg:path d="M7 13.4v7.9" />
    <svg:path d="M12 14v8" />
    <svg:path d="M17 13.4v7.9" />
    <svg:path d="M2 9v8a10 5 0 0 0 20 0V9" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDrumIcon implements OnInit {
  private readonly elementRef = Inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
