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
  selector: 'svg[si-radio-tower-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
    <svg:path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
    <circle cx="12" cy="9" r="2" />
    <svg:path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
    <svg:path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
    <svg:path d="M9.5 18h5" />
    <svg:path d="m8 22 4-11 4 11" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRadioTowerIcon implements OnInit {
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
