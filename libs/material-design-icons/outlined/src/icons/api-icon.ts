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
  selector: 'svg[si-api-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m14 12-2 2-2-2 2-2 2 2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiApiIcon implements OnInit {
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
