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
  selector: 'svg[si-filter-9-plus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 17h14v-6h-2v2h-2v-2h-2V9h2V7h2v2h2V3H7v14zm2-5h3v-1h-1a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9v-2z"
      opacity=".3"
    />
    <svg:path d="M19 21H3V5H1v16c0 1.1.9 2 2 2h16v-2z" />
    <svg:path d="M11 8h1v1h-1z" opacity=".3" />
    <svg:path
      d="M12 6h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H9v2h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 3h-1V8h1v1zm9-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFilter9PlusIcon implements OnInit {
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
