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
  selector: 'svg[si-crib-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.32 18.32a.971.971 0 0 0-1.31-.08c-.32.25-.65.48-1 .69V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-6V6c0-1.1-.9-2-2-2H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.35-.2-.69-.43-1-.69-.39-.32-.96-.27-1.31.08-.42.42-.39 1.12.08 1.5A9.948 9.948 0 0 0 12 22c2.36 0 4.53-.82 6.24-2.18.47-.38.5-1.08.08-1.5zM14 19.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4v3.75z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCribIcon implements OnInit {
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
