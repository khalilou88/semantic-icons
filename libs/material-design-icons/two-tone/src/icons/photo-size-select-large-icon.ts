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
  selector: 'svg[si-photo-size-select-large-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 19h2v2h-2zM1 19c0 1.1.9 2 2 2h12V11H1v8zm4.5-3.21 1.79 2.15 2.5-3.22L13 19H3l2.5-3.21zM17 3h2v2h-2zm4 8h2v2h-2zm0 4h2v2h-2zM3 3C2 3 1 4 1 5h2V3zm18 4h2v2h-2zm-8-4h2v2h-2zm8 18c1 0 2-1 2-2h-2v2zM1 7h2v2H1zm8-4h2v2H9zM5 3h2v2H5zm16 0v2h2c0-1-1-2-2-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhotoSizeSelectLargeIcon implements OnInit {
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
