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
  selector: 'svg[si-star-off-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M23.4132 8.7918L18.0211 13.7783L9.70961 5.46678L12.0006 0.5L15.3862 7.84006L23.4132 8.7918ZM18.6224 20.0361L21.193 22.6067L22.6072 21.1925L2.80818 1.39348L1.39397 2.80769L6.65832 8.07205L0.587891 8.7918L6.52248 14.2799L4.94715 22.2082L12.0006 18.26L19.054 22.2082L18.6224 20.0361Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStarOffFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
