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
  selector: 'svg[si-autoprefixer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Autoprefixer</svg:title>
    <svg:path
      d="M5.87 21.045h2.923l.959-3.068h4.503l.949 3.068h2.922L11.94 2.955l-6.07 18.09zm6.162-10.12 1.543 4.917h-3.153l1.553-4.916h.057zM24 17.617l-.378-1.182-6.266-.59.733 2.127 5.91-.354zM6.644 15.843l-6.266.591L0 17.616l5.911.355.733-2.128z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAutoprefixerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'DD3735');
  }
}
