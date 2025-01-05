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
  selector: 'svg[si-cakephp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CakePHP</svg:title>
    <svg:path
      d="M0 13.875v3.745c0 2.067 5.37 3.743 12 3.743V17.62c-6.63 0-12-1.68-12-3.743v-.002zm21.384 2.333L12 13.875v3.745l9.384 2.333C23.02 19.313 24 18.503 24 17.62v-3.745c0 .882-.98 1.692-2.616 2.333zM12 10.133v3.742c-6.627 0-12-1.677-12-3.744V6.38c0-2.064 5.37-3.743 12-3.743 6.625 0 12 1.68 12 3.744v3.75c0 .883-.98 1.69-2.616 2.334L12 10.13v.003z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCakephpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#D33C43');
  }
}
