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
  selector: 'svg[si-tele5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>TELE 5</svg:title>
    <svg:path
      d="M.006 0v5.027H3.83V0h-.685v4.18H2.23V.074h-.677V4.18h-.87V0H.007zm5.623.004v14.154h8.658V7.254h8.791V.004H5.628zM3.145 6.076v3.9H.005v.85H3.83v-4.75h-.685zM23 9.926 5.389 18.502c2.371 4.857 8.236 6.874 13.1 4.506v.002C23.352 20.64 25.372 14.783 23 9.926zM.006 12.129v5.027H3.83V12.13h-.685v4.18H2.23v-4.106h-.677v4.106h-.87v-4.18H.007zm0 6.07v5.791h.687v-2.47H3.83v-.848H.693v-2.473H.006z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTele5Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
