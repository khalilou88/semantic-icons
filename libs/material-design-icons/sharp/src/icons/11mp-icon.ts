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
  selector: 'svg[si-11mp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3v18h18V3H3zm5 2.5h3v6H9.5V7H8V5.5zm4.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm.5-13h3v6h-1.5V7H13V5.5zM18 17h-3v1.5h-1.5v-6H18V17z"
    />
    <svg:path d="M15 14h1.5v1.5H15z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si11mpIcon implements OnInit {
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
