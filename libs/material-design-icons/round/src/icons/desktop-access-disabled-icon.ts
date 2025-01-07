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
  selector: 'svg[si-desktop-access-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M.31 2a.996.996 0 0 0 0 1.41l.69.68V16c0 1.1.9 2 2 2h7v2H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h.9l5.29 5.29a.996.996 0 1 0 1.41-1.41L1.72 2A.996.996 0 0 0 .31 2zm2.68 13V6.09L12.9 16H3.99c-.55 0-1-.45-1-1zM4.55 2l2 2H20c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-1.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4.55z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDesktopAccessDisabledIcon implements OnInit {
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
