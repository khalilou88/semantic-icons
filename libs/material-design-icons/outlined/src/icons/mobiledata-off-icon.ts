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
  selector: 'svg[si-mobiledata-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m16 6.82 1.59 1.59L19 7l-4-4-4 4 1.41 1.41L14 6.82v4.35l2 2zM1.39 4.22 8 10.83v6.35l-1.59-1.59L5 17l4 4 4-4-1.41-1.41L10 17.18v-4.35l9.78 9.78 1.41-1.42L2.81 2.81z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMobiledataOffIcon implements OnInit {
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
