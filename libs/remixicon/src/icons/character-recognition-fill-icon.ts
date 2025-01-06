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
  selector: 'svg[si-character-recognition-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.998 3V21H2.99805V3H20.998ZM12.997 6H10.997L6.59805 17H8.75205L9.95105 14H14.041L15.242 17H17.397L12.997 6ZM11.997 8.88517L13.242 12H10.75L11.997 8.88517Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCharacterRecognitionFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
