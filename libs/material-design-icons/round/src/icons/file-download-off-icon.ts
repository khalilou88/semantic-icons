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
  selector: 'svg[si-file-download-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9 6.17V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v5h1.59c.89 0 1.33 1.08.7 1.71l-1.88 1.88L9 6.17zm11.49 14.32L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.5 4.5c-.26.37-.28.91.1 1.28l4.59 4.59c.35.35.88.37 1.27.09L15.17 18H6c-.55 0-1 .45-1 1s.45 1 1 1h11.17l1.9 1.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFileDownloadOffIcon implements OnInit {
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
