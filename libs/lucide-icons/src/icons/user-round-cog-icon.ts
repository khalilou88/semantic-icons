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
  selector: 'svg[si-user-round-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M2 21a8 8 0 0 1 10.434-7.62" />
    <circle cx="10" cy="8" r="5" />
    <circle cx="18" cy="18" r="3" />
    <svg:path d="m19.5 14.3-.4.9" />
    <svg:path d="m16.9 20.8-.4.9" />
    <svg:path d="m21.7 19.5-.9-.4" />
    <svg:path d="m15.2 16.9-.9-.4" />
    <svg:path d="m21.7 16.5-.9.4" />
    <svg:path d="m15.2 19.1-.9.4" />
    <svg:path d="m19.5 21.7-.4-.9" />
    <svg:path d="m16.9 15.2-.4-.9" />
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUserRoundCogIcon implements OnInit {
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
