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
  selector: 'svg[si-peseta-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 32C46.3 32 32 46.3 32 64l0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 96 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 96 0c77.4 0 142-55 156.8-128l3.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-3.2 0C334 87 269.4 32 192 32L64 32zM282.5 160L96 160l0-64 96 0c41.8 0 77.4 26.7 90.5 64zM96 224l186.5 0c-13.2 37.3-48.7 64-90.5 64l-96 0 0-64z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPesetaSignIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 384 512');
  }
}
