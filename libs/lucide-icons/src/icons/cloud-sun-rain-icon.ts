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
  selector: 'svg[si-cloud-sun-rain-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 2v2" />
    <svg:path d="m4.93 4.93 1.41 1.41" />
    <svg:path d="M20 12h2" />
    <svg:path d="m19.07 4.93-1.41 1.41" />
    <svg:path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
    <svg:path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
    <svg:path d="M11 20v2" />
    <svg:path d="M7 19v2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudSunRainIcon implements OnInit {
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
