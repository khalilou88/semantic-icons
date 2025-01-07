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
  selector: 'svg[si-single-bed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 10V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33l.51 1.53c.1.28.36.47.66.47a.7.7 0 0 0 .66-.47L7.67 17h8.67l.51 1.53c.09.28.35.47.65.47a.7.7 0 0 0 .66-.47l.51-1.53H20v-5c0-1.1-.9-2-2-2zm-7 0H8V8c0-.55.45-1 1-1h2v3zm5 0h-3V7h2c.55 0 1 .45 1 1v2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSingleBedIcon implements OnInit {
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
