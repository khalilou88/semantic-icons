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
  selector: 'svg[si-electric-meter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 11a9 9 0 0 0-18 0c0 3.92 2.51 7.24 6 8.48V22h2v-2.06a8.262 8.262 0 0 0 2 0V22h2v-2.52c3.49-1.24 6-4.56 6-8.48zm-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
    />
    <svg:path
      d="M8 7h8v2H8zm4.75 3-3 3L11 14.25 9.75 15.5l1.5 1.5 3-3L13 12.75l1.25-1.25z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiElectricMeterIcon implements OnInit {
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
