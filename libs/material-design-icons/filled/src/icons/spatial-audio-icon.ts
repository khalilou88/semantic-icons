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
  selector: 'svg[si-spatial-audio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="10" cy="9" r="4" />
    <svg:path
      d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 1h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7z"
    />
    <svg:path d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSpatialAudioIcon implements OnInit {
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
