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
  selector: 'svg[si-work-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 4h4v2h-3.6l2 2H20v7.6l2 2V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4zM3.4 1.84 1.99 3.25 4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l2 2 1.41-1.41L3.4 1.84zM4 19V8h2.74l11 11H4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWorkOffIcon implements OnInit {
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
