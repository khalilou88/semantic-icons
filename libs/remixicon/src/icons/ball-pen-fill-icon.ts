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
  selector: 'svg[si-ball-pen-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.8492 11.805L17.1421 11.0979L7.24264 20.9974H3V16.7547L14.3137 5.44101L19.9706 11.0979C20.3611 11.4884 20.3611 12.1216 19.9706 12.5121L12.8995 19.5831L11.4853 18.1689L17.8492 11.805ZM18.5563 2.61258L21.3848 5.44101C21.7753 5.83153 21.7753 6.4647 21.3848 6.85522L19.9706 8.26943L15.7279 4.02679L17.1421 2.61258C17.5327 2.22206 18.1658 2.22206 18.5563 2.61258Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBallPenFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
