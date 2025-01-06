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
  selector: 'svg[si-pentagon-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0004 3.03043L20.5309 9.22822L17.2725 19.2564H6.72821L3.46984 9.22822L12.0004 3.03043ZM22.7473 8.50806L12.0004 0.699951L1.25342 8.50806L5.35838 21.1418H18.6423L22.7473 8.50806Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPentagonLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
