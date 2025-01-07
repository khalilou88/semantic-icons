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
  selector: 'svg[si-hive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m13.79 8 1.8-3-1.8-3h-3.58l-1.8 3 1.8 3zm-3.58 1-1.8 3 1.8 3h3.58l1.8-3-1.8-3zm6.24 2.51h3.59l1.79-3-1.79-3h-3.59l-1.8 3zm3.59 1h-3.59l-1.8 3 1.8 3h3.59l1.79-3zm-12.49-1 1.8-3-1.8-3H3.96l-1.79 3 1.79 3zm0 1H3.96l-1.79 3 1.79 3h3.59l1.8-3zM10.21 16l-1.8 3 1.8 3h3.58l1.8-3-1.8-3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHiveIcon implements OnInit {
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
