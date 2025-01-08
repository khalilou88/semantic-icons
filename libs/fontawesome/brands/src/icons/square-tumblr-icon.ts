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
  selector: 'svg[si-square-tumblr-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM256.8 416c-75.5 0-91.9-55.5-91.9-87.9v-90H135.2c-3.4 0-6.2-2.8-6.2-6.2V189.4c0-4.5 2.8-8.5 7.1-10c38.8-13.7 50.9-47.5 52.7-73.2c.5-6.9 4.1-10.2 10-10.2h44.3c3.4 0 6.2 2.8 6.2 6.2v72h51.9c3.4 0 6.2 2.8 6.2 6.2v51.1c0 3.4-2.8 6.2-6.2 6.2H249.1V321c0 21.4 14.8 33.5 42.5 22.4c3-1.2 5.6-2 8-1.4c2.2 .5 3.6 2.1 4.6 4.9L318 387.1c1 3.2 2 6.7-.3 9.1c-8.5 9.1-31.2 19.8-60.9 19.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSquareTumblrIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 448 512');
  }
}
