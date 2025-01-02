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
  selector: 'svg[si-snowflake-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 4l2 1l2 -1" />
    <svg:path d="M12 2v6.5l3 1.72" />
    <svg:path d="M17.928 6.268l.134 2.232l1.866 1.232" />
    <svg:path d="M20.66 7l-5.629 3.25l.01 3.458" />
    <svg:path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
    <svg:path d="M20.66 17l-5.629 -3.25l-2.99 1.738" />
    <svg:path d="M14 20l-2 -1l-2 1" />
    <svg:path d="M12 22v-6.5l-3 -1.72" />
    <svg:path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
    <svg:path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
    <svg:path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
    <svg:path d="M3.34 7l5.629 3.25l2.99 -1.738" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSnowflakeIcon implements OnInit {
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
