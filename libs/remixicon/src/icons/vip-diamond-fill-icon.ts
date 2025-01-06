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
  selector: 'svg[si-vip-diamond-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.87759 3.00275H19.1319C19.4518 3.00275 19.7524 3.15583 19.9406 3.41457L23.7634 8.67097C23.9037 8.86385 23.8882 9.12895 23.7265 9.30419L12.3721 21.6047C12.1848 21.8076 11.8685 21.8203 11.6656 21.633C11.6558 21.6239 11.6464 21.6145 11.6373 21.6047L0.282992 9.30419C0.121226 9.12895 0.10575 8.86385 0.246026 8.67097L4.06886 3.41457C4.25704 3.15583 4.55766 3.00275 4.87759 3.00275Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVipDiamondFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
