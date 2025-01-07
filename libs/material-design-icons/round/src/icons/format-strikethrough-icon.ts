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
  selector: 'svg[si-format-strikethrough-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 19c1.1 0 2-.9 2-2v-1h-4v1c0 1.1.9 2 2 2zM5 5.5C5 6.33 5.67 7 6.5 7H10v3h4V7h3.5c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5zM4 14h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFormatStrikethroughIcon implements OnInit {
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
