import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-supernova-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path
      d="M15 15h.5c3.038 0 5.5 -1.343 5.5 -3s-2.462 -3 -5.5 -3c-1.836 0 -3.462 .49 -4.46 1.245"
    />
    <svg:path
      d="M9 9h-.5c-3.038 0 -5.5 1.343 -5.5 3s2.462 3 5.5 3c1.844 0 3.476 -.495 4.474 -1.255"
    />
    <svg:path
      d="M15 9v-.5c0 -3.038 -1.343 -5.5 -3 -5.5s-3 2.462 -3 5.5c0 1.833 .49 3.457 1.241 4.456"
    />
    <svg:path
      d="M9 15v.5c0 3.038 1.343 5.5 3 5.5s3 -2.462 3 -5.5c0 -1.842 -.494 -3.472 -1.252 -4.47"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBrandSupernovaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
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
