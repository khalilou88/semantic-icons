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
  selector: 'svg[si-bedtime-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.65 3.46c.27-.71-.36-1.45-1.12-1.34-5.52.8-9.47 6.07-8.34 11.88.78 4.02 4.09 7.21 8.14 7.87 3.74.61 7.16-.87 9.32-3.44.48-.57.19-1.48-.55-1.62-6.02-1.15-9.68-7.54-7.45-13.35z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBedtimeIcon implements OnInit {
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
