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
  selector: 'svg[si-gitlab-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="m20.7011 10.1255-.0253-.0672-2.4501-6.63953c-.0498-.13013-.1381-.24053-.2521-.31534-.1141-.07354-.2472-.10896-.3812-.10147-.1341.00748-.2628.05751-.3686.14332-.1047.08828-.1806.2079-.2175.34259l-1.6543 5.2556H8.65334l-1.65429-5.2556c-.03588-.13542-.11197-.25564-.21745-.34356-.10584-.08582-.23449-.13584-.36857-.14333-.13409-.00748-.26716.02794-.38125.10148-.11376.07511-.20195.18541-.25213.31534l-2.45472 6.6367-.02437.0671c-.35269.9569-.39623 2.007-.12404 2.9918.27219.9849.84535 1.8511 1.63305 2.4682l.00844.0068.02249.0166 3.73223 2.9022 1.84647 1.4512 1.1247.8817c.1316.1037.2922.1599.4574.1599.1652 0 .3258-.0562.4574-.1599l1.1247-.8817 1.8464-1.4512 3.7548-2.9198.0093-.0077c.786-.6172 1.3578-1.4826 1.6296-2.4661.2717-.9835.2288-2.0321-.1224-2.9881Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGitlabIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}