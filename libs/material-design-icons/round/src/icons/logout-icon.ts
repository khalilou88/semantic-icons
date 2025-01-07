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
  selector: 'svg[si-logout-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5V5z"
    />
    <svg:path
      d="m20.65 11.65-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoutIcon implements OnInit {
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
