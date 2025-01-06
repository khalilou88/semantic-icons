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
  selector: 'svg[si-anthropic-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.1219 5H16.2678L22.1012 20H19.9553L14.1219 5ZM7.65986 5H10.3411L16.1103 20H13.9675L12.429 16H5.57192L4.03345 20H1.89062L7.65986 5ZM11.6598 14L9.00047 7.08577L6.34115 14H11.6598Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnthropicLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
