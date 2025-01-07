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
  selector: 'svg[si-castle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9h-2zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4v6z"
    />
    <svg:path d="M9 9h2v3H9zm4 0h2v3h-2z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCastleIcon implements OnInit {
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
