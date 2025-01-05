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
  selector: 'svg[si-badoo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Badoo</svg:title>
    <svg:path
      d="M17.68 2.809c3.392 0 6.32 2.788 6.32 6.228 0 6.71-6.6 12.158-12 12.158S0 15.748 0 9.037c0-3.44 2.928-6.228 6.32-6.228 4.128 0 5.578 3.179 5.68 3.411a6.079 6.079 0 0 1 5.67-3.411zm1.078 6.488V9.11h-2.38v.186c0 2.352-1.97 4.276-4.378 4.276-2.417 0-4.369-1.924-4.369-4.276V9.11H5.233v.186c0 1.766.697 3.42 1.98 4.666a6.795 6.795 0 0 0 4.778 1.933 6.797 6.797 0 0 0 4.777-1.933 6.488 6.488 0 0 0 1.98-4.666Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBadooIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#783BF9');
  }
}
