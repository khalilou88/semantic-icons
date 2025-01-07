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
  selector: 'svg[si-blinds-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 9h8v2H6zm0-4h8v2H6zm10 4h2v2h-2zm0-4h2v2h-2z"
      opacity=".3"
    />
    <svg:path
      d="M20 19V3H4v16H2v2h20v-2h-2zM6 5h8v2H6V5zm0 4h8v2H6V9zm12 10H6v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6zm0-8h-2V9h2v2zm0-4h-2V5h2v2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlindsIcon implements OnInit {
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
