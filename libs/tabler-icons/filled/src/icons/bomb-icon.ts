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
  selector: 'svg[si-bomb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M14.499 3.996a2.2 2.2 0 0 1 1.556 .645l3.302 3.301a2.2 2.2 0 0 1 0 3.113l-.567 .567l.043 .192a8.5 8.5 0 0 1 -3.732 8.83l-.23 .144a8.5 8.5 0 1 1 -2.687 -15.623l.192 .042l.567 -.566a2.2 2.2 0 0 1 1.362 -.636zm-4.499 5.004a4 4 0 0 0 -4 4a1 1 0 0 0 2 0a2 2 0 0 1 2 -2a1 1 0 0 0 0 -2z"
    />
    <svg:path
      d="M21 2a1 1 0 0 1 .117 1.993l-.117 .007h-1c0 .83 -.302 1.629 -.846 2.25l-.154 .163l-1.293 1.293a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.293 -1.292c.232 -.232 .375 -.537 .407 -.86l.007 -.14a2 2 0 0 1 1.85 -1.995l.15 -.005h1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBombIcon implements OnInit {
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
