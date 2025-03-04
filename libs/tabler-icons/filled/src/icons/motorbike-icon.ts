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
  selector: 'svg[si-motorbike-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M15 5a1 1 0 0 1 .894 .553l3.225 6.449l.08 .003a4 4 0 1 1 -4.199 3.995l.005 -.2a4 4 0 0 1 2.111 -3.33l-.557 -1.115l-3.352 3.352a1 1 0 0 1 -.707 .293h-3.626q .124 .481 .126 1a4 4 0 1 1 -8 0l.005 -.2a4 4 0 0 1 6.33 -3.049l1.749 -1.751h-3.084a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h9.381l-1 -2h-1.381a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMotorbikeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
