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
  selector: 'svg[si-hdr-auto-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12.04 8.04h-.09l-1.6 4.55h3.29z" opacity=".3" />
    <svg:path
      d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3.21 13-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11h-1.9z"
      opacity=".3"
    />
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
    <svg:path
      d="M11.01 6 6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6h-1.97zm-.66 6.59 1.6-4.55h.09l1.6 4.55h-3.29z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHdrAutoIcon implements OnInit {
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
