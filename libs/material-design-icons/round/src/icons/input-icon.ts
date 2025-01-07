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
  selector: 'svg[si-input-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 3.01H3c-1.1 0-2 .9-2 2V8c0 .55.45 1 1 1s1-.45 1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V16c0-.55-.45-1-1-1s-1 .45-1 1v3.01c0 1.09.89 1.98 1.98 1.98H21c1.1 0 2-.9 2-2V5.01c0-1.1-.9-2-2-2zm-9.15 12.14 2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.495.495 0 0 0-.85.35V11H2c-.55 0-1 .45-1 1s.45 1 1 1h9v1.79c0 .45.54.67.85.36z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInputIcon implements OnInit {
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
