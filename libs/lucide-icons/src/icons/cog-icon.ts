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
  selector: 'svg[si-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <svg:path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <svg:path d="M12 2v2" />
    <svg:path d="M12 22v-2" />
    <svg:path d="m17 20.66-1-1.73" />
    <svg:path d="M11 10.27 7 3.34" />
    <svg:path d="m20.66 17-1.73-1" />
    <svg:path d="m3.34 7 1.73 1" />
    <svg:path d="M14 12h8" />
    <svg:path d="M2 12h2" />
    <svg:path d="m20.66 7-1.73 1" />
    <svg:path d="m3.34 17 1.73-1" />
    <svg:path d="m17 3.34-1 1.73" />
    <svg:path d="m11 13.73-4 6.93" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCogIcon implements OnInit {
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
