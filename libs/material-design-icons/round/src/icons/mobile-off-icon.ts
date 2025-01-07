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
  selector: 'svg[si-mobile-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 16.44 3.61 3.05A.996.996 0 1 0 2.2 4.46L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75L20 22.27a.996.996 0 1 0 1.41-1.41L19 18.44l-2-2zM7 19V9.27L16.73 19H7zM17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMobileOffIcon implements OnInit {
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
