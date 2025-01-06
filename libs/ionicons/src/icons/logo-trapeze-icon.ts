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
  selector: 'svg[si-logo-trapeze-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M311.05 189.26l.055-.093 64.98-110.618L257.923 8l-64.98 110.617-.096.164L8 433.451 126.162 504l85.948-146.312c14.612 17.618 32.393 33.074 53.108 45.442l168.804 100.785L504 384.789 335.197 284.004c-32.599-19.463-43.396-61.862-24.147-94.744z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoTrapezeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
