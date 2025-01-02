import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-koyeb-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Koyeb</title>
    <svg:path
      d="M0 12.822V7.044L11.985.115 24 7.037v5.77L11.992 5.892Zm11.985 1.114L1.92 19.759 0 18.645v-3.557l11.985-6.93L24 15.089v3.542l-1.92 1.13Zm-3.028 9.949L3.95 21.004l8.036-4.656 8.066 4.656-5.009 2.88-3.05-1.759Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKoyebIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
