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
  selector: 'svg[si-cncf-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CNCF</svg:title>
    <svg:path
      d="M0 0v24h24V0H8.004Zm3.431 3.431h4.544l.029.023 4.544 4.544h3.03l-4.572-4.567h9.569v9.563l-.789-.782-3.784-3.79v3.03l2.271 2.272 2.272 2.272.029.03v4.543h-4.55l-.023-.023-2.272-2.278-2.272-2.272H8.427l3.785 3.79.782.783H3.43v-9.563l4.573 4.567v-3.031l-4.55-4.544-.023-.023Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCncfIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '231F20');
  }
}
