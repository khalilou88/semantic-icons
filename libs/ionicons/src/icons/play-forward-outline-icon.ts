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
  selector: 'svg[si-play-forward-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52zM260.57 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlayForwardOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
