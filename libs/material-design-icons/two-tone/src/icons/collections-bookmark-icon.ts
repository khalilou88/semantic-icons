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
  selector: 'svg[si-collections-bookmark-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M20 4h-1v9l-3-2.25L13 13V4H8v12h12z" opacity=".3" />
    <svg:path
      d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zm18-6V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM15 4h2v5l-1-.75L15 9V4zM8 4h5v9l3-2.25L19 13V4h1v12H8V4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCollectionsBookmarkIcon implements OnInit {
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
