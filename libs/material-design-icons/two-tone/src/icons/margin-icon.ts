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
  selector: 'svg[si-margin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 19h14V5H5v14zM15 7h2v2h-2V7zm0 4h2v2h-2v-2zm-4-4h2v2h-2V7zm0 4h2v2h-2v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2z"
      opacity=".3"
    />
    <svg:path d="M7 7h2v2H7zm0 4h2v2H7z" />
    <svg:path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
    <svg:path d="M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMarginIcon implements OnInit {
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
