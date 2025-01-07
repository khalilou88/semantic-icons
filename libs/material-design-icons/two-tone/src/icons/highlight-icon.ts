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
  selector: 'svg[si-highlight-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M11 20h2v-3.83l3-3V11H8v2.17l3 3z" opacity=".3" />
    <svg:path
      d="m6 14 3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM4.916 4.464l2.12 2.122L5.62 8 3.5 5.877zM18.372 8l-1.414-1.414 2.12-2.12 1.415 1.413z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHighlightIcon implements OnInit {
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
