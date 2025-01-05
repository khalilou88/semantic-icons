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
  selector: 'svg[si-gurobi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Gurobi</svg:title>
    <svg:path
      d="m11.036 0 7.032 1.359L24 18.37 18.37 24 0 17.635 1.805 5.952 11.036 0Zm12.389 18.239L17.887 2.36l-3.557 7.83 3.88 13.264 5.215-5.214Zm-5.822-16.46L11.138.528l-8.71 5.617 11.554 3.6 3.62-7.968Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGurobiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'EE3524');
  }
}
