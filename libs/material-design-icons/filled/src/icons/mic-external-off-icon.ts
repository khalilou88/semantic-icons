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
  selector: 'svg[si-mic-external-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 5.17 8H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4v-1.17l5.78 5.78 1.41-1.42zM12 18c0 1.1-.9 2-2 2s-2-.9-2-2h1l.56-5.61L12 14.83V18zm2-12v5.17l-2-2V6c0-2.21 1.79-4 4-4s4 1.79 4 4v11.17l-2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2zm-4-1c0 .62-.2 1.18-.52 1.66L5.33 2.51A2.996 2.996 0 0 1 10 5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMicExternalOffIcon implements OnInit {
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
