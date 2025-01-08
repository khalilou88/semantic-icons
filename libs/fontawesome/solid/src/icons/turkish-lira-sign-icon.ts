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
  selector: 'svg[si-turkish-lira-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M96 32c17.7 0 32 14.3 32 32l0 35.3L247.2 65.2c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 165.9l0 29.4 119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 261.9 128 416l63.8 0c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480L96 480c-17.7 0-32-14.3-32-32l0-167.9-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 213.6l0-29.4-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 117.6 64 64c0-17.7 14.3-32 32-32z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTurkishLiraSignIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 384 512');
  }
}
