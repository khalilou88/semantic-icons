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
  selector: 'svg[si-cloud-offline-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M41.37 64l22.628-22.628L470.627 448l-22.628 22.627zM38.72 212.78C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h228.12L110.51 178.39c-28.01 5.39-53.09 17.33-71.79 34.39zM476.59 407.23C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 00256 80c-30.47 0-58.9 8.62-83.07 25l302.82 302.86c.25-.21.57-.41.84-.63z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudOfflineSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
