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
  selector: 'svg[si-view-compact-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 4v16h20V4H2zm4.5 14H4v-2.5h2.5V18zm0-4.75H4v-2.5h2.5v2.5zm0-4.75H4V6h2.5v2.5zM11 18H8.5v-2.5H11V18zm0-4.75H8.5v-2.5H11v2.5zm0-4.75H8.5V6H11v2.5zm4.5 9.5H13v-2.5h2.5V18zm0-4.75H13v-2.5h2.5v2.5zm0-4.75H13V6h2.5v2.5zM20 18h-2.5v-2.5H20V18zm0-4.75h-2.5v-2.5H20v2.5zm0-4.75h-2.5V6H20v2.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiViewCompactIcon implements OnInit {
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
