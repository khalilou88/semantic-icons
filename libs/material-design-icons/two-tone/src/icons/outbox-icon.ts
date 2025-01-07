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
  selector: 'svg[si-outbox-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 18c-1.63 0-3.06-.79-3.98-2H5v3h14v-3h-3.02c-.92 1.21-2.35 2-3.98 2z"
      opacity=".3"
    />
    <svg:path d="M11 14h2v-3h3l-4-4-4 4h3z" />
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H19v3zm0-5h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14v9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOutboxIcon implements OnInit {
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
