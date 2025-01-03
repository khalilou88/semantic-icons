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
  selector: 'svg[si-user-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="18" cy="15" r="3" />
    <svg:circle cx="9" cy="7" r="4" />
    <svg:path d="M10 15H6a4 4 0 0 0-4 4v2" />
    <svg:path d="m21.7 16.4-.9-.3" />
    <svg:path d="m15.2 13.9-.9-.3" />
    <svg:path d="m16.6 18.7.3-.9" />
    <svg:path d="m19.1 12.2.3-.9" />
    <svg:path d="m19.6 18.7-.4-1" />
    <svg:path d="m16.8 12.3-.4-1" />
    <svg:path d="m14.3 16.6 1-.4" />
    <svg:path d="m20.7 13.8 1-.4" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUserCogIcon implements OnInit {
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
