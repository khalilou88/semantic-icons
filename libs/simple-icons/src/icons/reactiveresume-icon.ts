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
  selector: 'svg[si-reactiveresume-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Reactive Resume</svg:title>
    <svg:path
      d="M0 3.393v12.949h3.662v-3.44h2c1.8-.002 4.084-.395 5.276-2.183.468-.716.703-1.56.703-2.535 0-.986-.235-1.836-.704-2.551-.468-.728-1.135-1.284-1.998-1.666-.85-.382-1.836-.574-3.02-.574H0zm3.662 2.886h2.035c.765 0 1.331.167 1.701.5.382.332.575.8.575 1.405 0 .592-.193 1.055-.575 1.388-.37.333-.936.5-1.7.5H3.661V6.28zm8.906 4.301 3.764 5.012-3.764 5.015h3.92l1.795-2.388 1.795 2.388H24L16.488 10.58h-3.92zm7.51 0-1.369 1.834 1.969 2.61L24 10.58h-3.922zM9.096 12.912s-1.496.628-3.467.604l2.115 2.826h3.92l-2.568-3.43z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiReactiveresumeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '000000');
  }
}
