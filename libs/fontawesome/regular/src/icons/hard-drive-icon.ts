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
  selector: 'svg[si-hard-drive-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 80c-8.8 0-16 7.2-16 16l0 162c5.1-1.3 10.5-2 16-2l384 0c5.5 0 10.9 .7 16 2l0-162c0-8.8-7.2-16-16-16L64 80zM48 320l0 96c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L64 304c-8.8 0-16 7.2-16 16zM0 320L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 224 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-96zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHardDriveIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
