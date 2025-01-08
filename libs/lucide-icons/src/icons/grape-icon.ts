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
  selector: 'svg[si-grape-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M22 5V2l-5.89 5.89" />
    <svg:circle cx="16.6" cy="15.89" r="3" />
    <svg:circle cx="8.11" cy="7.4" r="3" />
    <svg:circle cx="12.35" cy="11.65" r="3" />
    <svg:circle cx="13.91" cy="5.85" r="3" />
    <svg:circle cx="18.15" cy="10.09" r="3" />
    <svg:circle cx="6.56" cy="13.2" r="3" />
    <svg:circle cx="10.8" cy="17.44" r="3" />
    <svg:circle cx="5" cy="19" r="3" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGrapeIcon implements OnInit {
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
