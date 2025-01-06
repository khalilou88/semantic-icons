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
  selector: 'svg[si-cloud-drizzle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="8" y1="19" x2="8" y2="21"></svg:line>
    <svg:line x1="8" y1="13" x2="8" y2="15"></svg:line>
    <svg:line x1="16" y1="19" x2="16" y2="21"></svg:line>
    <svg:line x1="16" y1="13" x2="16" y2="15"></svg:line>
    <svg:line x1="12" y1="21" x2="12" y2="23"></svg:line>
    <svg:line x1="12" y1="15" x2="12" y2="17"></svg:line>
    <svg:path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></svg:path>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudDrizzleIcon implements OnInit {
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
