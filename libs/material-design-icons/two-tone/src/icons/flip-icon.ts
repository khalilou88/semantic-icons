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
  selector: 'svg[si-flip-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 7h2v2h-2zm0 14c1.1 0 2-.9 2-2h-2v2zm0-6h2v2h-2zm0-4h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zm10-2v2h2c0-1.1-.9-2-2-2zm-8-2h2v22h-2zm4 2h2v2h-2zm0 16h2v2h-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFlipIcon implements OnInit {
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
