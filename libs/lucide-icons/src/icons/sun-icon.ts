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
  selector: 'svg[si-sun-icon]',
  standalone: true,
  imports: [],
  template: `
    <circle cx="12" cy="12" r="4" />
    <svg:path d="M12 2v2" />
    <svg:path d="M12 20v2" />
    <svg:path d="m4.93 4.93 1.41 1.41" />
    <svg:path d="m17.66 17.66 1.41 1.41" />
    <svg:path d="M2 12h2" />
    <svg:path d="M20 12h2" />
    <svg:path d="m6.34 17.66-1.41 1.41" />
    <svg:path d="m19.07 4.93-1.41 1.41" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSunIcon implements OnInit {
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
