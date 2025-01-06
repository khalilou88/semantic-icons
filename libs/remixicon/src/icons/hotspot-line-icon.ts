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
  selector: 'svg[si-hotspot-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 2V4H7V20H17V11H19V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H11ZM13 7C14.1046 7 15 7.89543 15 9H13V7ZM13 4C15.7614 4 18 6.23858 18 9H16C16 7.34315 14.6569 6 13 6V4ZM13 1C17.4183 1 21 4.58172 21 9H19C19 5.68629 16.3137 3 13 3V1Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHotspotLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
