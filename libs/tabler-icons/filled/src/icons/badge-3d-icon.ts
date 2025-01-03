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
  selector: 'svg[si-badge-3d-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10.5 4h-1.5a1 1 0 1 0 0 2h1.5a.5 .5 0 0 1 .09 .992l-.09 .008h-.5c-1.287 0 -1.332 1.864 -.133 1.993l.133 .007h.5a.5 .5 0 1 1 0 1h-1.5a1 1 0 0 0 0 2h1.5a2.5 2.5 0 0 0 2.5 -2.5l-.005 -.164a2.5 2.5 0 0 0 -.477 -1.312l-.019 -.024l.019 -.024a2.5 2.5 0 0 0 -2.018 -3.976m6.5 0h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBadge3dIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
