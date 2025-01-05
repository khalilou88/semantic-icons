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
  selector: 'svg[si-wire-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wire</svg:title>
    <svg:path
      d="M24 14.475c.009 4.084-3.296 7.401-7.38 7.41h-.016c-1.637-.015-3.222-.58-4.5-1.605-3.269 2.544-7.981 1.957-10.524-1.313-1-1.286-1.555-2.862-1.58-4.492V2.82h1.41v11.655c-.002 3.314 2.683 6.002 5.996 6.004 1.293.001 2.552-.416 3.589-1.189-1.163-1.335-1.806-3.043-1.815-4.814v-9.54c0-1.557 1.263-2.82 2.82-2.82s2.82 1.263 2.82 2.82v9.54c.006 1.766-.623 3.474-1.77 4.814 2.674 1.957 6.429 1.371 8.383-1.304.745-1.019 1.149-2.248 1.157-3.511V2.82H24v11.655zm-10.59-9.54c0-.778-.632-1.41-1.41-1.41-.779 0-1.41.631-1.41 1.41v9.54c.002 1.41.501 2.776 1.41 3.855.908-1.079 1.408-2.445 1.41-3.855v-9.54z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWireIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#000000');
  }
}
