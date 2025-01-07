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
  selector: 'svg[si-window-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 11V3H5c-1.1 0-2 .9-2 2v6h8zm2 0h8V5c0-1.1-.9-2-2-2h-6v8zm-2 2H3v6c0 1.1.9 2 2 2h6v-8zm2 0v8h6c1.1 0 2-.9 2-2v-6h-8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWindowIcon implements OnInit {
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
