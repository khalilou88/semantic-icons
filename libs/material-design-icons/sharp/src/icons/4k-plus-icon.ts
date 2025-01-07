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
  selector: 'svg[si-4k-plus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 3H3v18h18V3zM11 13.5h-1V15H8.5v-1.5h-3V9H7v3h1.5V9H10v3h1v1.5zm3.75 1.5L13 12.75V15h-1.5V9H13v2.25L14.75 9h1.75l-2.25 3 2.25 3h-1.75zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19v1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si4kPlusIcon implements OnInit {
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
