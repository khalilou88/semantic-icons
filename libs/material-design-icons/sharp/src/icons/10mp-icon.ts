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
  selector: 'svg[si-10mp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.5 7H15v3h-1.5V7zM21 3H3v18h18V3zm-8.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm2.5 0h-1.5v-6H18V17h-3v1.5zm-5-13v6H8.5V7H7V5.5h3zm6.5 0v6H12v-6h4.5zM15 14h1.5v1.5H15V14z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si10mpIcon implements OnInit {
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
