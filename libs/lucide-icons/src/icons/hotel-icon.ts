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
  selector: 'svg[si-hotel-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 22v-6.57" />
    <svg:path d="M12 11h.01" />
    <svg:path d="M12 7h.01" />
    <svg:path d="M14 15.43V22" />
    <svg:path d="M15 16a5 5 0 0 0-6 0" />
    <svg:path d="M16 11h.01" />
    <svg:path d="M16 7h.01" />
    <svg:path d="M8 11h.01" />
    <svg:path d="M8 7h.01" />
    <svg:rect x="4" y="2" width="16" height="20" rx="2" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHotelIcon implements OnInit {
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
