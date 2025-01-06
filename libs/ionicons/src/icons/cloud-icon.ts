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
  selector: 'svg[si-cloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22 18.11-16.53 42.22-28.25 69.18-33.87a16 16 0 0011.37-9.15 156.24 156.24 0 0142.05-56C187.76 91.69 220.5 80 256 80a153.57 153.57 0 01107.14 42.9c24.73 23.81 41.5 55.28 49.18 92a16 16 0 0012.12 12.39C470 237.42 512 270.43 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
