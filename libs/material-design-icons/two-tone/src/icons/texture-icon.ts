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
  selector: 'svg[si-texture-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.88 3 3 11.88v2.83L14.71 3zM3 5v2l4-4H5c-1.1 0-2 .9-2 2zm16.51-1.92L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM21 9.29 9.29 21h2.83L21 12.12zm-.59 11.12c.37-.36.59-.86.59-1.41v-2l-4 4h2c.55 0 1.05-.22 1.41-.59z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTextureIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
