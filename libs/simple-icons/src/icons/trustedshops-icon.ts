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
  selector: 'svg[si-trustedshops-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Trusted Shops</svg:title>
    <svg:path
      d="M15.187 14.332c-1.1 1.626-2.63 3.108-4.687 3.108-2.175 0-3.442-1.362-3.442-3.562 0-3.561 2.63-7.052 6.335-7.052 1.242 0 2.916.502 2.916 2.009 0 2.7-4.231 3.609-6.311 4.135-.072.457-.143.908-.143 1.362 0 .933.501 1.793 1.53 1.793 1.338 0 2.412-1.29 3.203-2.247zm-1.148-5.808c0-.55-.31-.978-.884-.978-1.722 0-2.608 3.346-2.94 4.66 1.601-.48 3.824-1.794 3.824-3.682zM12 0a12 12 0 1 0 12 11.997A11.997 11.997 0 0 0 12 0zm-.1 19.523a7.563 7.563 0 1 1 7.564-7.563 7.563 7.563 0 0 1-7.563 7.56Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrustedshopsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FFDC0F');
  }
}
