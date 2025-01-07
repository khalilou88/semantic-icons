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
  selector: 'svg[si-calendar-view-week-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.5 6H11v12H8.5zM13 6h2.5v12H13zM4 6h2.5v12H4zm13.5 0H20v12h-2.5z"
      opacity=".3"
    />
    <svg:path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6.5 18H4V6h2.5v12zm4.5 0H8.5V6H11v12zm4.5 0H13V6h2.5v12zm4.5 0h-2.5V6H20v12z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalendarViewWeekIcon implements OnInit {
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
