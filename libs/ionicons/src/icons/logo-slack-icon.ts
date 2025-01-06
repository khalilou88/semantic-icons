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
  selector: 'svg[si-logo-slack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M126.12 315.1A47.06 47.06 0 1179.06 268h47.06zM149.84 315.1a47.06 47.06 0 0194.12 0v117.84a47.06 47.06 0 11-94.12 0zM196.9 126.12A47.06 47.06 0 11244 79.06v47.06zM196.9 149.84a47.06 47.06 0 010 94.12H79.06a47.06 47.06 0 010-94.12zM385.88 196.9a47.06 47.06 0 1147.06 47.1h-47.06zM362.16 196.9a47.06 47.06 0 01-94.12 0V79.06a47.06 47.06 0 1194.12 0zM315.1 385.88a47.06 47.06 0 11-47.1 47.06v-47.06zM315.1 362.16a47.06 47.06 0 010-94.12h117.84a47.06 47.06 0 110 94.12z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoSlackIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
