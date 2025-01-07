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
  selector: 'svg[si-keyboard-double-arrow-up-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.7 18.29c.39.39 1.02.39 1.41 0L12 14.42l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 12.3a.996.996 0 0 0-1.41 0L6.7 16.88a.996.996 0 0 0 0 1.41z"
    />
    <svg:path
      d="M6.7 11.7c.39.39 1.02.39 1.41 0L12 7.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L6.7 10.29a.996.996 0 0 0 0 1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeyboardDoubleArrowUpIcon implements OnInit {
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
