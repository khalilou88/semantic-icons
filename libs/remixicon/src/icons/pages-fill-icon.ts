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
  selector: 'svg[si-pages-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 22H4C3.44772 22 3 21.5523 3 21V8H21V21C21 21.5523 20.5523 22 20 22ZM21 6H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V6ZM7 11V15H11V11H7ZM7 17V19H17V17H7ZM13 12V14H17V12H13Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPagesFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
