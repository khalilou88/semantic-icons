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
  selector: 'svg[si-chat-heart-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM12.0178 14.6997L15.3765 11.341C16.2552 10.4623 16.2552 9.03769 15.3765 8.15901C14.4978 7.28033 13.0732 7.28033 12.1945 8.15901L12.0178 8.33579L11.841 8.15901C10.9623 7.28033 9.53769 7.28033 8.65901 8.15901C7.78033 9.03769 7.78033 10.4623 8.65901 11.341L12.0178 14.6997Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChatHeartFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
