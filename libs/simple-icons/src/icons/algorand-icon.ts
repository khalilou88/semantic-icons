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
  selector: 'svg[si-algorand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Algorand</svg:title>
    <svg:path
      d="M13.874 0h3.673l1.61 5.963h3.789l-2.588 4.5 3.624 13.533h-3.757l-2.44-9.077-5.247 9.079H8.345l8.107-14.051-1.304-4.878L4.215 24H.018Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlgorandIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
