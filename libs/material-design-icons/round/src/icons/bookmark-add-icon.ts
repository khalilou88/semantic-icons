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
  selector: 'svg[si-bookmark-add-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 6c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V7h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V4c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1zm-2 13.48c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9v8.58z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBookmarkAddIcon implements OnInit {
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
