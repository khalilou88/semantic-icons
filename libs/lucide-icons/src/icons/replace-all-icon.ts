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
  selector: 'svg[si-replace-all-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
    <svg:path d="M14 4a2 2 0 0 1 2-2" />
    <svg:path d="M16 10a2 2 0 0 1-2-2" />
    <svg:path d="M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
    <svg:path d="M20 2a2 2 0 0 1 2 2" />
    <svg:path d="M22 8a2 2 0 0 1-2 2" />
    <svg:path d="m3 7 3 3 3-3" />
    <svg:path d="M6 10V5a 3 3 0 0 1 3-3h1" />
    <rect x="2" y="14" width="8" height="8" rx="2" />
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiReplaceAllIcon implements OnInit {
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
