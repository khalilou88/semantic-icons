import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-edgeimpulse-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Edge Impulse</title>
    <svg:path
      d="M16.008 10.287h4.51l1.348 3.53h-5.858c-.979 0-1.772-.79-1.772-1.766s.793-1.766 1.772-1.766v.002ZM.677 12.049a1.77 1.77 0 0 1 1.773-1.766h8.597a1.77 1.77 0 0 1 1.772 1.766c0 .976-.793 1.766-1.772 1.766H2.45c-.98 0-1.773-.79-1.773-1.766ZM24 19.613H4.448a2.515 2.515 0 0 1-1.93.899A2.514 2.514 0 0 1 0 18.002a2.514 2.514 0 0 1 2.518-2.509c.775 0 1.467.351 1.93.899h18.321L24 19.613ZM19.594 7.655H4.404a2.51 2.51 0 0 1-1.886.852A2.514 2.514 0 0 1 0 5.998a2.514 2.514 0 0 1 2.518-2.51c.797 0 1.506.371 1.967.946h13.878l1.231 3.221Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEdgeimpulseIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}