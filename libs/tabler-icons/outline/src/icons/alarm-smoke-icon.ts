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
  selector: 'svg[si-alarm-smoke-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M18 8l-.8 3a1.25 1.25 0 0 1 -1.2 1h-8a1.25 1.25 0 0 1 -1.2 -1l-.8 -3"
    />
    <svg:path
      d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"
    />
    <svg:path
      d="M12 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"
    />
    <svg:path
      d="M7 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"
    />
    <svg:path
      d="M17 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlarmSmokeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
