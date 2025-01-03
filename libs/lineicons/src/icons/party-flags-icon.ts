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
  selector: 'svg[si-party-flags-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.9626 8.99751C22.0197 8.82515 22.0147 8.63172 21.9341 8.45321C21.7637 8.07586 21.3197 7.90803 20.9423 8.07817L20.9364 8.08079L20.9091 8.09272C20.8836 8.1037 20.8438 8.1206 20.7903 8.14257C20.6832 8.18652 20.5211 8.25074 20.3084 8.32853C19.8828 8.48417 19.2557 8.69382 18.4621 8.90411C16.8735 9.32507 14.6267 9.74628 12.0006 9.74628C9.37444 9.74628 7.12764 9.32507 5.53905 8.90411C4.74546 8.69382 4.11829 8.48417 3.69277 8.32853C3.48008 8.25074 3.31797 8.18652 3.21086 8.14257C3.15732 8.1206 3.11754 8.1037 3.09209 8.09272L3.06472 8.08079L3.05927 8.07838C2.68183 7.90812 2.23749 8.07581 2.06705 8.45321C2.04012 8.51283 2.02163 8.57411 2.01108 8.63572C1.99075 8.75235 1.99783 8.87551 2.03701 8.99594L3.78763 14.3756C3.86618 14.617 4.0615 14.8023 4.3067 14.868C4.5519 14.9337 4.81369 14.8709 5.00242 14.7011L8.63323 11.4349L11.3714 15.6472C11.5098 15.8601 11.7464 15.9885 12.0002 15.9885C12.2541 15.9885 12.4907 15.8601 12.6291 15.6472L15.368 11.4338L18.9982 14.6995C19.187 14.8693 19.4488 14.9321 19.694 14.8664C19.9392 14.8007 20.1345 14.6154 20.213 14.374L21.9626 8.99751ZM20.0592 9.99929L19.1437 12.8127L16.8974 10.792C17.6198 10.6577 18.2733 10.5059 18.8463 10.3541C19.3029 10.2331 19.7091 10.1119 20.0592 9.99929ZM5.15483 10.3541C5.72817 10.506 6.38197 10.6579 7.10484 10.7922L4.85698 12.8143L3.94082 9.99893C4.29118 10.1116 4.69775 10.2329 5.15483 10.3541ZM13.7382 11.1888L12.0002 13.8623L10.2623 11.1887C10.821 11.2256 11.4014 11.2463 12.0006 11.2463C12.5995 11.2463 13.1797 11.2256 13.7382 11.1888Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPartyFlagsIcon implements OnInit {
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
