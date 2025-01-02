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
  selector: 'svg[si-keyboard-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M 20 4 A2 2 0 0 1 22 6" />
    <svg:path d="M 22 6 L 22 16.41" />
    <svg:path d="M 7 16 L 16 16" />
    <svg:path d="M 9.69 4 L 20 4" />
    <svg:path d="M14 8h.01" />
    <svg:path d="M18 8h.01" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
    <svg:path d="M6 8h.01" />
    <svg:path d="M8 12h.01" />
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
export class SiKeyboardOffIcon implements OnInit {
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
