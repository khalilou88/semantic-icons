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
  selector: 'svg[si-airplay-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.4 13.5333L17.4 20.2C17.5657 20.4209 17.5209 20.7343 17.3 20.9C17.2135 20.9649 17.1082 21 17 21H7C6.72386 21 6.5 20.7761 6.5 20.5C6.5 20.3918 6.53509 20.2865 6.6 20.2L11.6 13.5333C11.7657 13.3124 12.0791 13.2676 12.3 13.4333C12.3379 13.4618 12.3716 13.4954 12.4 13.5333ZM18 19V17H20V5H4V17H6V19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H18Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAirplayFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
