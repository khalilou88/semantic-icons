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
  selector: 'svg[si-cottage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.39 12.19a.992.992 0 0 0-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0L6 7.58V7c0-.55-.45-1-1-1s-1 .45-1 1v2.11l-2.21 1.68c-.44.33-.52.96-.19 1.4.34.44.96.52 1.4.19l1-.76V20c0 .55.45 1 1 1h6v-5c0-.55.45-1 1-1s1 .45 1 1v5h6c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19zM5.27 5c-.74 0-1.26-.8-.9-1.45C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53.15-.31.5-.47.84-.47.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53-.15.31-.5.47-.84.47z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCottageIcon implements OnInit {
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
