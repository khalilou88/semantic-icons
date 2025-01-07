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
  selector: 'svg[si-data-exploration-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 20c-2.89 0-5.43-1.54-6.83-3.84l2.95-2.95L11.41 16 16 11.42V13h2V8h-5v2h1.58l-3.28 3.28L8 10.5l-3.69 3.7C4.11 13.5 4 12.76 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm7.5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      opacity=".3"
    />
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm0 18c-2.89 0-5.43-1.54-6.83-3.84l2.95-2.95L11.41 16 16 11.42V13h2V8h-5v2h1.58l-3.28 3.28L8 10.5l-3.69 3.7C4.11 13.5 4 12.76 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm7.5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDataExplorationIcon implements OnInit {
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
