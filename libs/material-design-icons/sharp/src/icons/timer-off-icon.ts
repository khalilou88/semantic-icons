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
  selector: 'svg[si-timer-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9 1h6v2H9zm4 7v2.17l6.98 6.98a8.963 8.963 0 0 0-.95-9.76l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42a8.962 8.962 0 0 0-9.77-.96L10.83 8H13zM2.81 2.81 1.39 4.22l3.4 3.4a8.994 8.994 0 0 0 12.59 12.59l2.4 2.4 1.41-1.41L2.81 2.81z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTimerOffIcon implements OnInit {
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
