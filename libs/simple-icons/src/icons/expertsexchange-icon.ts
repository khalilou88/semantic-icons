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
  selector: 'svg[si-expertsexchange-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Experts Exchange</svg:title>
    <svg:path
      d="M7.28.9H0L8.36 12 0 23.1h7.28L15.64 12zM24 .9h-7.28l-2.3 3.06 3.64 4.82zM14.42 20.05l2.3 3.05H24l-5.94-7.88z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExpertsexchangeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '00AAE7');
  }
}
