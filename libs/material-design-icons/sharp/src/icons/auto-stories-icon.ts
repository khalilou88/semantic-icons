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
  selector: 'svg[si-auto-stories-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 4.6v12.02c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4S2.62 4.55 1 5.48V20c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2V5.48c-.63-.36-1.3-.64-2-.88z"
    />
    <svg:path d="m19 .5-5 5V15l5-4.5z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAutoStoriesIcon implements OnInit {
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
