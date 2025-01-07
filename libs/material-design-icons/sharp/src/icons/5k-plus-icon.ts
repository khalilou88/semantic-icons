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
  selector: 'svg[si-5k-plus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 3H3v18h18V3zm-11 7.5H7.5v1H10V15H6v-1.5h2.5v-1H6V9h4v1.5zm6 4.5h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19v1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si5kPlusIcon implements OnInit {
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
