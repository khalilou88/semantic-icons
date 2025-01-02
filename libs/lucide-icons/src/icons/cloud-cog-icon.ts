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
  selector: 'svg[si-cloud-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <circle cx="12" cy="17" r="3" />
    <svg:path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
    <svg:path d="m15.7 18.4-.9-.3" />
    <svg:path d="m9.2 15.9-.9-.3" />
    <svg:path d="m10.6 20.7.3-.9" />
    <svg:path d="m13.1 14.2.3-.9" />
    <svg:path d="m13.6 20.7-.4-1" />
    <svg:path d="m10.8 14.3-.4-1" />
    <svg:path d="m8.3 18.6 1-.4" />
    <svg:path d="m14.7 15.8 1-.4" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCloudCogIcon implements OnInit {
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
