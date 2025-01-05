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
  selector: 'svg[si-okx-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>OKX</svg:title>
    <svg:path
      d="M 7.15 8.685 C 7.18 8.705 7.2 8.745 7.2 8.785 L 7.2 15.225 C 7.2 15.265 7.18 15.305 7.15 15.325 C 7.121 15.355 7.082 15.372 7.04 15.375 L 0.16 15.375 C 0.118 15.372 0.079 15.355 0.05 15.325 C 0.02 15.3 0.002 15.264 0 15.225 L 0 8.785 C 0 8.745 0.02 8.705 0.05 8.685 C 0.079 8.655 0.118 8.638 0.16 8.635 L 7.04 8.635 C 7.08 8.635 7.12 8.655 7.15 8.685 Z M 4.8 11.035 C 4.798 10.996 4.78 10.96 4.75 10.935 C 4.721 10.905 4.682 10.887 4.64 10.885 L 2.56 10.885 C 2.52 10.885 2.481 10.899 2.45 10.925 C 2.42 10.95 2.402 10.986 2.4 11.025 L 2.4 12.975 C 2.4 13.015 2.42 13.055 2.45 13.075 C 2.48 13.115 2.52 13.125 2.56 13.125 L 4.64 13.125 C 4.68 13.125 4.72 13.115 4.75 13.085 C 4.78 13.06 4.798 13.024 4.8 12.985 L 4.8 11.035 Z M 21.6 11.035 L 21.6 12.975 C 21.6 13.065 21.53 13.125 21.44 13.125 L 19.36 13.125 C 19.27 13.125 19.2 13.065 19.2 12.975 L 19.2 11.035 C 19.2 10.955 19.27 10.885 19.36 10.885 L 21.44 10.885 C 21.53 10.885 21.6 10.945 21.6 11.035 Z M 19.2 8.785 L 19.2 10.735 C 19.2 10.815 19.13 10.885 19.04 10.885 L 16.96 10.885 C 16.87 10.885 16.8 10.815 16.8 10.735 L 16.8 8.785 C 16.8 8.705 16.87 8.635 16.96 8.635 L 19.04 8.635 C 19.13 8.635 19.2 8.705 19.2 8.785 Z M 24 8.785 L 24 10.735 C 24 10.815 23.93 10.885 23.84 10.885 L 21.76 10.885 C 21.67 10.885 21.6 10.815 21.6 10.735 L 21.6 8.785 C 21.6 8.705 21.67 8.635 21.76 8.635 L 23.84 8.635 C 23.93 8.635 24 8.705 24 8.785 Z M 19.2 13.285 L 19.2 15.225 C 19.2 15.305 19.13 15.375 19.04 15.375 L 16.96 15.375 C 16.87 15.375 16.8 15.305 16.8 15.225 L 16.8 13.275 C 16.8 13.195 16.87 13.125 16.96 13.125 L 19.04 13.125 C 19.13 13.125 19.2 13.195 19.2 13.275 L 19.2 13.285 Z M 24 13.285 L 24 15.225 C 24 15.305 23.93 15.375 23.84 15.375 L 21.76 15.375 C 21.67 15.375 21.6 15.305 21.6 15.225 L 21.6 13.275 C 21.6 13.195 21.67 13.125 21.76 13.125 L 23.84 13.125 C 23.93 13.125 24 13.195 24 13.275 L 24 13.285 Z M 15.6 8.785 L 15.6 10.735 C 15.6 10.815 15.53 10.885 15.44 10.885 L 13.36 10.885 C 13.27 10.885 13.2 10.815 13.2 10.735 L 13.2 8.785 C 13.2 8.705 13.27 8.635 13.36 8.635 L 15.44 8.635 C 15.53 8.635 15.6 8.705 15.6 8.785 Z M 15.6 13.285 L 15.6 15.225 C 15.6 15.305 15.53 15.375 15.44 15.375 L 13.36 15.375 C 13.27 15.375 13.2 15.305 13.2 15.225 L 13.2 13.275 C 13.2 13.195 13.27 13.125 13.36 13.125 L 15.44 13.125 C 15.53 13.125 15.6 13.195 15.6 13.275 L 15.6 13.285 Z M 13.2 12.985 C 13.195 13.069 13.125 13.135 13.04 13.135 L 10.8 13.135 L 10.8 15.215 C 10.8 15.255 10.78 15.295 10.75 15.325 C 10.719 15.351 10.68 15.365 10.64 15.365 L 8.56 15.365 C 8.516 15.368 8.473 15.353 8.44 15.325 C 8.414 15.298 8.399 15.262 8.4 15.225 L 8.4 8.775 C 8.4 8.735 8.41 8.695 8.44 8.675 C 8.472 8.643 8.515 8.625 8.56 8.625 L 10.64 8.625 C 10.68 8.625 10.72 8.645 10.75 8.675 C 10.78 8.695 10.8 8.735 10.8 8.775 L 10.8 10.875 L 13.04 10.875 C 13.08 10.875 13.12 10.885 13.15 10.915 C 13.18 10.945 13.2 10.985 13.2 11.015 L 13.2 12.965 L 13.2 12.985 Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOkxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '000000');
  }
}
