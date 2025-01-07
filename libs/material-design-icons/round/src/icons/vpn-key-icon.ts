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
  selector: 'svg[si-vpn-key-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.65 10a5.998 5.998 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVpnKeyIcon implements OnInit {
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
