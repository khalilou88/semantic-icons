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
  selector: 'svg[si-sidebar-fold-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H13V3ZM15 21V3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15ZM11 8.5V15.5L7 12L11 8.5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSidebarFoldFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
