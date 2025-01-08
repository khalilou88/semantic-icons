import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-dot-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
    <svg:path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
    <svg:path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
    <svg:path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
    <svg:path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
    <svg:path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
    <svg:path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
    <svg:path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
    <svg:circle cx="12" cy="12" r="1" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCircleDotDashedIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly class = input<string>('');

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
