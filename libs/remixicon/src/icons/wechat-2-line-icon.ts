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
  selector: 'svg[si-wechat-2-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.66725 11.5114C7.94997 11.5114 7.38211 10.9432 7.38211 10.2255C7.38211 9.50784 7.94997 8.93968 8.66725 8.93968C9.38454 8.93968 9.95239 9.50784 9.95239 10.2255C9.95239 10.9432 9.38454 11.5114 8.66725 11.5114ZM15.3339 11.5114C14.6166 11.5114 14.0488 10.9432 14.0488 10.2255C14.0488 9.50784 14.6166 8.93968 15.3339 8.93968C16.0512 8.93968 16.6191 9.50784 16.6191 10.2255C16.6191 10.9432 16.0512 11.5114 15.3339 11.5114ZM6.82289 19.2153L7.53841 18.7789C8.34812 18.2851 9.30697 18.095 10.2438 18.2426C10.4553 18.2759 10.6292 18.3015 10.7634 18.3192C11.1696 18.3728 11.5828 18.4 12.0006 18.4C16.4213 18.4 19.9006 15.3776 19.9006 11.8C19.9006 8.22235 16.4213 5.19995 12.0006 5.19995C7.57986 5.19995 4.10059 8.22235 4.10059 11.8C4.10059 13.1655 4.60024 14.4728 5.53227 15.5809C5.58056 15.6383 5.65277 15.7177 5.74666 15.8155C6.54199 16.6438 6.94301 17.7739 6.84765 18.9182L6.82289 19.2153ZM6.19286 21.9423C6.00989 22.0566 5.79484 22.1087 5.57981 22.0908C5.02944 22.045 4.62045 21.5616 4.66631 21.0112L4.85456 18.7521C4.90224 18.1799 4.70173 17.6149 4.30407 17.2008C4.1819 17.0735 4.08111 16.9627 4.0017 16.8683C2.80622 15.447 2.10059 13.6951 2.10059 11.8C2.10059 7.0503 6.53297 3.19995 12.0006 3.19995C17.4682 3.19995 21.9006 7.0503 21.9006 11.8C21.9006 16.5496 17.4682 20.4 12.0006 20.4C11.4911 20.4 10.9906 20.3665 10.5018 20.302C10.3491 20.2819 10.1593 20.254 9.93256 20.2182C9.46412 20.1444 8.9847 20.2395 8.57985 20.4864L6.19286 21.9423Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWechat2LineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
