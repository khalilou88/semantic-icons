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
  selector: 'svg[si-vr-cardboard-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVrCardboardIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 512');
  }
}
