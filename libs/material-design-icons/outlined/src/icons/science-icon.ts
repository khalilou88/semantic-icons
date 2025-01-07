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
  selector: 'svg[si-science-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScienceIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
