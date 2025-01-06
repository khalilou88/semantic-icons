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
  selector: 'svg[si-open-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M224 304a16 16 0 01-11.31-27.31l157.94-157.94A55.7 55.7 0 00344 112H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V168a55.7 55.7 0 00-6.75-26.63L235.31 299.31A15.92 15.92 0 01224 304z"
    />
    <svg:path
      d="M448 48H336a16 16 0 000 32h73.37l-38.74 38.75a56.35 56.35 0 0122.62 22.62L432 102.63V176a16 16 0 0032 0V64a16 16 0 00-16-16z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
