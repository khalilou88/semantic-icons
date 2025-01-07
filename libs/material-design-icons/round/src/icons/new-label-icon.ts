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
  selector: 'svg[si-new-label-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m20.18 13.16-3.55 5c-.38.53-.98.84-1.63.84h-3v-3c0-1.66-1.34-3-3-3 0-1.66-1.34-3-3-3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84l3.55 5c.49.7.49 1.62 0 2.32zM10 16c0-.55-.45-1-1-1H7v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNewLabelIcon implements OnInit {
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
