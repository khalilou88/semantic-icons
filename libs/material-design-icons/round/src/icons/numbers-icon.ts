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
  selector: 'svg[si-numbers-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m20.68 9.27.01-.06A.961.961 0 0 0 19.76 8H17l.7-2.79A.972.972 0 0 0 16.76 4c-.45 0-.83.3-.94.73L15 8h-4l.7-2.79A.972.972 0 0 0 10.76 4c-.45 0-.83.3-.94.73L9 8H5.76c-.45 0-.84.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H8.5l-1 4H4.26c-.45 0-.83.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H7l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L9 16h4l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L15 16h3.24c.45 0 .83-.3.94-.73l.01-.06a.976.976 0 0 0-.94-1.21H15.5l1-4h3.24c.45 0 .84-.3.94-.73zM13.5 14h-4l1-4h4l-1 4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNumbersIcon implements OnInit {
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
