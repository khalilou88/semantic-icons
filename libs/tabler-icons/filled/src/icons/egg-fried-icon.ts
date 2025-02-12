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
  selector: 'svg[si-egg-fried-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M14.001 1.996q .06 0 .117 .007l.155 .003a6 6 0 0 1 4.25 2.05l.176 .21a6 6 0 0 1 1.296 4.014l-.018 .244l.106 .06a4 4 0 0 1 1.904 3.087l.011 .204a4 4 0 0 1 -1.392 3.161l-.085 .069l.083 .16a4 4 0 0 1 .239 2.848l-.065 .204a4 4 0 0 1 -6.257 1.824l-.115 -.096l-.092 .1a6 6 0 0 1 -4.022 1.787l-.257 .006a6 6 0 0 1 -5.644 -8.04l.034 -.089l-.155 -.12a6 6 0 0 1 -1.662 -7.256l.105 -.211a6 6 0 0 1 7.246 -2.894l.188 .068l.073 -.06a6 6 0 0 1 3.505 -1.334zm-2.001 7.004a3 3 0 0 0 -2.996 2.85l-.004 .15a3 3 0 1 0 3 -3"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEggFriedIcon implements OnInit {
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
