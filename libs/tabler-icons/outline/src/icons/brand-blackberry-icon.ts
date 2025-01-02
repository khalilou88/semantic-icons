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
  selector: 'svg[si-brand-blackberry-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M7 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M6 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M13 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M14 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M12 18a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M20 15a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
    <svg:path d="M21 9a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBrandBlackberryIcon implements OnInit {
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
