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
  selector: 'svg[si-back-hand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 16c0 3.31-2.69 6-6 6-2.61 0-4.95-1.59-5.91-4.01l-2.6-6.54.53.14c.46.12.83.46 1 .9L7 15h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V7c0-.28.22-.5.5-.5s.5.22.5.5v9z"
      opacity=".3"
    />
    <svg:path
      d="M21 7a2.5 2.5 0 0 0-3-2.45V4a2.5 2.5 0 0 0-3.17-2.41A2.509 2.509 0 0 0 12.5 0c-1.23 0-2.25.89-2.46 2.06A2.5 2.5 0 0 0 7 4.5v5.89c-.34-.31-.76-.54-1.22-.66l-.77-.21c-.83-.23-1.7.09-2.19.83-.38.57-.4 1.31-.15 1.95l2.56 6.43A8.354 8.354 0 0 0 13 24c4.42 0 8-3.58 8-8V7zm-2 9c0 3.31-2.69 6-6 6-2.61 0-4.95-1.59-5.91-4.01l-2.6-6.54.53.14c.46.12.83.46 1 .9L7 15h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V7c0-.28.22-.5.5-.5s.5.22.5.5v9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBackHandIcon implements OnInit {
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
