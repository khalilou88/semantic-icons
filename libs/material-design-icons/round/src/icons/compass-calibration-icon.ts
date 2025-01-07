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
  selector: 'svg[si-compass-calibration-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="17" r="4" />
    <svg:path
      d="M12 3C8.49 3 5.28 4.29 2.8 6.41a1.01 1.01 0 0 0-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08 1.2-.94 2.71-1.5 4.34-1.5 1.64 0 3.14.56 4.34 1.49.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCompassCalibrationIcon implements OnInit {
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
