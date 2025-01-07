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
  selector: 'svg[si-maps-home-work-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z"
    />
    <svg:path d="M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMapsHomeWorkIcon implements OnInit {
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
