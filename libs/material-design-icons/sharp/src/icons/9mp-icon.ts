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
  selector: 'svg[si-9mp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15 14h1.5v1.5H15z" />
    <svg:path
      d="M3 3v18h18V3H3zm7 7h3V9h-3V5.5h4.5v6H10V10zm2.5 8.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM18 17h-3v1.5h-1.5v-6H18V17z"
    />
    <svg:path d="M11.5 6.5H13V8h-1.5z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si9mpIcon implements OnInit {
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
