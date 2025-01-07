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
  selector: 'svg[si-oil-barrel-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 13v-2h-2V5h2V3H3v2h2v6H3v2h2v6H3v2h18v-2h-2v-6h2zm-9 3c-1.66 0-3-1.32-3-2.95 0-1.3.52-1.67 3-4.55 2.47 2.86 3 3.24 3 4.55 0 1.63-1.34 2.95-3 2.95z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOilBarrelIcon implements OnInit {
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
