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
  selector: 'svg[si-signal-wifi-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5 23.64 7zM4.12 2.01a.996.996 0 1 0-1.41 1.41l1.35 1.35C1.91 5.76.59 6.82.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l2.35-2.93 2.61 2.61a.996.996 0 1 0 1.41-1.41L4.12 2.01z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSignalWifiOffIcon implements OnInit {
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
