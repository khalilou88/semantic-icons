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
  selector: 'svg[si-folder-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.85.85c-.14.28-.23.59-.23.93L2 18c0 1.1.9 2 2 2h13.17l2.61 2.61a.996.996 0 1 0 1.41-1.41L2.81 2.81zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFolderOffIcon implements OnInit {
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
