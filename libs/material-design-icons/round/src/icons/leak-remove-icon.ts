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
  selector: 'svg[si-leak-remove-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.12 12.04c.5-.05.88-.48.88-.99 0-.59-.51-1.06-1.1-1-1.5.15-2.9.61-4.16 1.3l1.48 1.48c.9-.41 1.87-.69 2.9-.79zm.88 3.05c0-.61-.54-1.09-1.14-1-.38.06-.75.16-1.11.28l1.62 1.62c.37-.15.63-.49.63-.9zM13.97 4.14c.06-.59-.4-1.11-1-1.11-.5 0-.94.37-.99.87-.1 1.03-.38 2.01-.79 2.91l1.48 1.48c.69-1.26 1.15-2.66 1.3-4.15zm-4.04.02c.1-.6-.39-1.14-1-1.14a.98.98 0 0 0-.9.62l1.62 1.62c.13-.35.22-.72.28-1.1zm10.51 14.72L5.12 3.56a.996.996 0 1 0-1.41 1.41l2.15 2.15c-.59.41-1.26.7-1.99.82-.48.1-.84.5-.84 1 0 .61.54 1.09 1.14 1 1.17-.19 2.23-.68 3.13-1.37L8.73 10c-1.34 1.1-3 1.82-4.81 1.99-.5.05-.88.48-.88.99 0 .59.51 1.06 1.1 1 2.28-.23 4.36-1.15 6.01-2.56l2.48 2.48c-1.4 1.65-2.33 3.72-2.56 6-.06.59.4 1.11 1 1.11.5 0 .94-.37.99-.87.18-1.82.9-3.48 1.99-4.82l1.43 1.43c-.69.9-1.18 1.96-1.37 3.13-.1.6.39 1.14 1 1.14.49 0 .9-.36.98-.85.12-.73.42-1.4.82-1.99l2.13 2.13c.39.39 1.02.39 1.41 0 .38-.41.38-1.04-.01-1.43z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLeakRemoveIcon implements OnInit {
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
