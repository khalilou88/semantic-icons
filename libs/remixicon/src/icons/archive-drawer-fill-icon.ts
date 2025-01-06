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
  selector: 'svg[si-archive-drawer-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 13H21V21.0025C21 21.5534 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5537 3 21.0025V13ZM3 2.99754C3 2.44662 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.44631 21 2.99754V11H3V2.99754ZM9 5V7H15V5H9ZM9 16V18H15V16H9Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArchiveDrawerFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
