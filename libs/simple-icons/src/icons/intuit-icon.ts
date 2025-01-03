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
  selector: 'svg[si-intuit-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Intuit</title>
    <svg:path
      d="M12.32 12.38c0 1.174.974 2.033 2.211 2.033 1.237 0 2.212-.859 2.212-2.033v-2.7h-1.198v2.56c0 .633-.44 1.06-1.017 1.06s-1.017-.424-1.017-1.06V9.68h-1.198l.008 2.699zm7.624-1.619h1.429v3.563h1.198V10.76H24V9.68h-4.056v1.082zM19.17 9.68h-1.198v4.645h1.198V9.679zM7.482 10.761h1.43v3.563h1.197V10.76h1.428V9.68H7.482v1.082zM1.198 9.68H0v4.645h1.198V9.679zm5.653 1.94c0-1.174-.974-2.032-2.212-2.032-1.238 0-2.212.858-2.212 2.032v2.705h1.198v-2.56c0-.633.44-1.06 1.017-1.06s1.018.425 1.018 1.06v2.56h1.197L6.85 11.62h.001z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIntuitIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
