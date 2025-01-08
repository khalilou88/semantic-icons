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
  selector: 'svg[si-toilets-portable-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M32 0L224 0c17.7 0 32 14.3 32 32l0 32L0 64 0 32C0 14.3 14.3 0 32 0zM0 96l24 0 208 0 24 0 0 24 0 368c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8L48 480l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 120 0 96zM192 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zM352 0L544 0c17.7 0 32 14.3 32 32l0 32L320 64l0-32c0-17.7 14.3-32 32-32zM320 96l24 0 208 0 24 0 0 24 0 368c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-160 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-368 0-24zM512 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiToiletsPortableIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 576 512');
  }
}
