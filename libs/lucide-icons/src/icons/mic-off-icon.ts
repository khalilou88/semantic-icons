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
  selector: 'svg[si-mic-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="2" x2="22" y1="2" y2="22" />
    <svg:path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
    <svg:path d="M5 10v2a7 7 0 0 0 12 5" />
    <svg:path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
    <svg:path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    <svg:line x1="12" x2="12" y1="19" y2="22" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMicOffIcon implements OnInit {
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
