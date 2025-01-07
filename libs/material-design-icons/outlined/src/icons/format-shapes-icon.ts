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
  selector: 'svg[si-format-shapes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFormatShapesIcon implements OnInit {
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
