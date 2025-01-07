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
  selector: 'svg[si-library-add-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 16h12V4H8v12zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3V9z"
      opacity=".3"
    />
    <svg:path
      d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zM8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8zm12 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLibraryAddIcon implements OnInit {
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
