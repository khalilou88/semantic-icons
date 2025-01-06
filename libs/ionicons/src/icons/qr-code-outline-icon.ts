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
  selector: 'svg[si-qr-code-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
    <svg:rect x="272" y="272" width="64" height="64" rx="8" ry="8" />
    <svg:rect x="416" y="416" width="64" height="64" rx="8" ry="8" />
    <svg:rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
    <svg:rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
    <svg:rect x="336" y="96" width="80" height="80" rx="8" ry="8" />
    <svg:rect
      x="288"
      y="48"
      width="176"
      height="176"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect x="96" y="96" width="80" height="80" rx="8" ry="8" />
    <svg:rect
      x="48"
      y="48"
      width="176"
      height="176"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect x="96" y="336" width="80" height="80" rx="8" ry="8" />
    <svg:rect
      x="48"
      y="288"
      width="176"
      height="176"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQrCodeOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
