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
  selector: 'svg[si-drop-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDropLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
