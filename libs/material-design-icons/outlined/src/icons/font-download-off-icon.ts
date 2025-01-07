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
  selector: 'svg[si-font-download-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.83 2H20c1.1 0 2 .9 2 2v15.17l-2-2V4H6.83l-2-2zm6.09 4-.57 1.52 1.36 1.36.23-.66h.1l.54 1.52 3.04 3.04L13.07 6h-2.15zm9.57 17.31L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20h13.17z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFontDownloadOffIcon implements OnInit {
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
