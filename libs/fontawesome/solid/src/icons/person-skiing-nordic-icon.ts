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
  selector: 'svg[si-person-skiing-nordic-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M336 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM227.2 160c1.9 0 3.8 .1 5.6 .3L201.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9L291.3 464l-88.5 0 41.1-88.1-32.4-20.3c-7.8-4.9-14.7-10.7-20.6-17.3L132.2 464l-32.4 0 54.2-257.6c4.6-1.5 9-4.1 12.7-7.8l23.1-23.1c9.9-9.9 23.4-15.5 37.5-15.5zM121.4 198.6c.4 .4 .8 .8 1.3 1.2L67 464l-43 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l135.3 0c.5 0 .9 0 1.4 0l158.6 0c.5 0 1 0 1.4 0L504 512c39.8 0 72-32.2 72-72l0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8c0 13.3-10.7 24-24 24l-69.4 0 27.6-179.3c10.5-5.2 17.8-16.1 17.8-28.7c0-17.7-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3l-23.1 23.1c-12.5 12.5-12.5 32.8 0 45.3zm308 89.4L402.3 464l-44.4 0 21.6-75.6c5.9-20.6-2.6-42.6-20.7-53.9L302 299l30.9-82.4 5.1 12.3C353 264.7 387.9 288 426.7 288l2.7 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPersonSkiingNordicIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 576 512');
  }
}
