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
  selector: 'svg[si-live-photo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <svg:path d="M15.9 20.11l0 .01" />
    <svg:path d="M19.04 17.61l0 .01" />
    <svg:path d="M20.77 14l0 .01" />
    <svg:path d="M20.77 10l0 .01" />
    <svg:path d="M19.04 6.39l0 .01" />
    <svg:path d="M15.9 3.89l0 .01" />
    <svg:path d="M12 3l0 .01" />
    <svg:path d="M8.1 3.89l0 .01" />
    <svg:path d="M4.96 6.39l0 .01" />
    <svg:path d="M3.23 10l0 .01" />
    <svg:path d="M3.23 14l0 .01" />
    <svg:path d="M4.96 17.61l0 .01" />
    <svg:path d="M8.1 20.11l0 .01" />
    <svg:path d="M12 21l0 .01" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLivePhotoIcon implements OnInit {
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
