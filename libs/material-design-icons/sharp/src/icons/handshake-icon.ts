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
  selector: 'svg[si-handshake-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m10.59 5.95-7.05 7.04L.7 10.3l8.55-8.55L17.2 9.7l-1.42 1.42-5.19-5.17zm12.65 4.29-8.49-8.49-2.06 2.06 5.9 5.88-2.83 2.83-5.17-5.17-6.27 6.27 1.42 1.41 5.32-5.32.71.71-5.32 5.32 1.42 1.41 5.32-5.32.71.71-5.32 5.32 1.41 1.41 5.32-5.32.71.71L10.68 20l1.41 1.41 11.15-11.17z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHandshakeIcon implements OnInit {
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
