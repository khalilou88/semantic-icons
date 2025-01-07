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
  selector: 'svg[si-camera-indoor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 10v9h12v-9l-6-4.5L6 10zm8 2v1l2-1.06v4.12L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1z"
      opacity=".3"
    />
    <svg:path
      d="M8 12v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1z"
    />
    <svg:path d="M12 3 4 9v12h16V9l-8-6zm6 16H6v-9l6-4.5 6 4.5v9z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCameraIndoorIcon implements OnInit {
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
