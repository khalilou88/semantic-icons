import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-recharging-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
    <svg:path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
    <svg:path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
    <svg:path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
    <svg:path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
    <svg:path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
    <svg:path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
    <svg:path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
    <svg:path d="M12 8l-2 4h4l-2 4" />
    <svg:path d="M12 21a9 9 0 0 0 0 -18" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRechargingIcon implements OnInit {
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
