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
  selector: 'svg[si-file-4-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 15H14V22H3.99826C3.44694 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.44892 21 3.00748V15ZM21 17L16 21.9968V17H21Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFile4FillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
