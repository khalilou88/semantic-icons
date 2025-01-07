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
  selector: 'svg[si-border-bottom-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 11h2v2H3zm0 4h2v2H3zm0 4h18v2H3zm16-4h2v2h-2zM3 7h2v2H3zm16 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm4-4h2v2h-2zm-4-4h2v2h-2zm-8 8h2v2H7zM3 3h2v2H3zm8 4h2v2h-2zM7 3h2v2H7zm4 8h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBorderBottomIcon implements OnInit {
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
