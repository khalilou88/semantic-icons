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
  selector: 'svg[si-device-projector-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" />
    <svg:path
      d="M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2"
    />
    <svg:path d="M6 15h1" />
    <svg:path d="M7 18l-1 2" />
    <svg:path d="M18 18l1 2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeviceProjectorIcon implements OnInit {
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
