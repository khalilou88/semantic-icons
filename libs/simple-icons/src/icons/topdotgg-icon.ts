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
  selector: 'svg[si-topdotgg-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Top.gg</svg:title>
    <svg:path
      d="M0 4.3785h7.6215V12H2.329A2.3212 2.3212 0 0 1 .0077 9.6788Zm24 0H8.757v15.243h3.1144a4.5071 4.5071 0 0 0 4.507-4.5071V12h3.1145A4.5073 4.5073 0 0 0 24 7.4929z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTopdotggIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF3366');
  }
}
