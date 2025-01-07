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
  selector: 'svg[si-keyboard-double-arrow-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58 8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4z"
    />
    <svg:path
      d="M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeyboardDoubleArrowDownIcon implements OnInit {
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
