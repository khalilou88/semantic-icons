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
  selector: 'svg[si-husqvarna-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Husqvarna</svg:title>
    <svg:path
      d="M12 0c1.022 0 1.687.18 1.968.242-.14 1.307-.1 2.354 0 2.657.34 1.005 2.276 1.474 3.058 1.011.86-.522.664-2.11.664-3.156 0 0 1.268.3 2.046.593.632.238 1.563.703 1.563.703.185 1.324.01 3.282-1.292 3.946.982.985 1.312 2.152 1.732 4.304.34 1.93.26 3.28.24 4.405-.1 1.53-.1 2.355-.46 3.743-.52 1.589-.829 2.335-1.883 3.439C17.496 24.132 14.007 24 12 23.998c-2.007.002-5.494.134-7.635-2.111-1.055-1.104-1.363-1.85-1.883-3.439-.36-1.388-.36-2.213-.46-3.743-.021-1.125-.1-2.474.24-4.405.42-2.154.75-3.319 1.732-4.304-1.302-.664-1.477-2.622-1.292-3.946 0 0 .933-.465 1.563-.703C5.043 1.055 6.31.754 6.31.754c0 1.047-.196 2.632.664 3.156.782.461 2.716-.006 3.058-1.011.1-.303.14-1.35 0-2.657C10.313.18 10.979 0 12 0m-.003 21.125c2.342 0 3.09 0 4.251-.322.4-.142 1.122-.342 1.644-1.167.96-1.65.96-4.748.96-6.235 0-1.49 0-4.124-.96-5.754-.52-.844-1.233-1.078-1.644-1.186-1.186-.316-1.948-.297-4.251-.302h.001c-2.303.005-3.065-.014-4.251.302-.41.11-1.122.342-1.644 1.186-.96 1.63-.96 4.266-.96 5.754s0 4.586.96 6.235c.52.825 1.241 1.025 1.644 1.167 1.16.324 1.909.322 4.25.322zM12 14.458c2.004 0 1.96.002 1.96.644v4.053h2.724V7.928H13.96V11.3c0 .664.044.662-1.96.662h.002c-2.003 0-1.96.002-1.96-.662V7.928H7.321v11.23h2.721v-4.056c0-.644-.04-.644 1.958-.644z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHusqvarnaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '273A60');
  }
}
