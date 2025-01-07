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
  selector: 'svg[si-living-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15.5 12v2.5h-7V12h-2v4.5h11V12z" />
    <svg:path d="M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z" />
    <svg:path d="M22 2H2v20h20V2zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99H19z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLivingIcon implements OnInit {
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
