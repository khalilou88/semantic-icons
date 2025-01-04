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
  selector: 'svg[si-jovian-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Jovian</svg:title>
    <svg:path
      d="M20.25 1.65C20.25.74 19.51 0 18.6 0H5.4c-.91 0-1.65.74-1.65 1.65v20.7c0 .91.74 1.65 1.65 1.65h13.2c.91 0 1.65-.74 1.65-1.65V1.65zm-5.275 4.341a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm.04 9.018a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-6.015 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJovianIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
