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
  selector: 'svg[si-openid-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenidIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 448 512');
  }
}
