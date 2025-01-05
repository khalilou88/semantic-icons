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
  selector: 'svg[si-nexon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Nexon</svg:title>
    <svg:path
      d="M5.138 10.158v3.693h3.775v-.783H6.126v-.706h2.787v-.789H6.126v-.632h2.787v-.783zm15.778 3.693v-2.234l2.34 2.234H24v-3.693h-.987v2.234l-2.34-2.234h-.745v3.693zm-2.051-3.701h-4.072v3.7h4.072zm-.988 2.918H15.78v-2.127h2.097zm-16.89.783v-2.234l2.34 2.234h.748v-3.693h-.99v2.234l-2.34-2.234H0v3.693zm10.241-1.844-1.633 1.844h1.249l1.009-1.14 1.012 1.14h1.249l-1.637-1.844 1.64-1.849h-1.25l-1.014 1.145-1.012-1.145H9.589z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNexonIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#000000');
  }
}
