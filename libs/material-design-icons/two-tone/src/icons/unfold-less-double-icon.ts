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
  selector: 'svg[si-unfold-less-double-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z" />
    <svg:path
      d="M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
    />
    <svg:path d="M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUnfoldLessDoubleIcon implements OnInit {
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
