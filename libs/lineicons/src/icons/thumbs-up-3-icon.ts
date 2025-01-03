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
  selector: 'svg[si-thumbs-up-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.6387 6.87094L14.1192 4.74639C14.4376 3.33902 13.3676 2 11.9247 2H11.6692C10.9853 2 10.3386 2.31102 9.91159 2.84521L6.40881 7.22761H4.25C3.00736 7.22761 2 8.23497 2 9.47761V16.435C2 17.6776 3.00736 18.685 4.25 18.685H6.68024L6.68633 18.6864C6.74811 18.7011 6.83803 18.7221 6.95293 18.7479C7.18269 18.7995 7.51273 18.8706 7.91793 18.9495C8.72718 19.107 9.84188 19.2966 11.0594 19.4233C12.2736 19.5496 13.6097 19.6154 14.8561 19.5178C16.0867 19.4214 17.3131 19.16 18.2456 18.5682C20.1839 17.3381 21.4767 15.2871 21.8717 13.1949C22.2678 11.0971 21.7704 8.85732 19.9779 7.39626C19.2743 6.82281 18.4122 6.56286 17.5749 6.46799C16.7358 6.37293 15.8728 6.43782 15.1118 6.55723C14.5675 6.64265 14.0626 6.75806 13.6387 6.87094ZM11.6692 3.5H11.9247C12.4057 3.5 12.7623 3.94634 12.6562 4.41546L11.8879 7.81215C11.8267 8.08261 11.9198 8.36475 12.1298 8.54576C12.3398 8.72671 12.6334 8.77673 12.8918 8.67642L12.899 8.67367L12.9325 8.66114C12.9631 8.64981 13.0099 8.6328 13.0712 8.6114C13.1939 8.56858 13.3741 8.50838 13.5981 8.44118C14.0477 8.30626 14.6656 8.14561 15.3444 8.03909C16.0267 7.93201 16.7459 7.88366 17.4061 7.95846C18.0681 8.03346 18.6223 8.22647 19.0302 8.55896C20.2934 9.58859 20.7191 11.2148 20.3978 12.9166C20.0753 14.6241 19.0101 16.3065 17.4419 17.3017C16.8149 17.6997 15.8773 17.9332 14.739 18.0224C13.6166 18.1103 12.3791 18.0524 11.2146 17.9313C10.0534 17.8105 8.98435 17.6289 8.20452 17.4771C7.9395 17.4256 7.70855 17.3776 7.51948 17.3367V8.24051L11.0833 3.78174C11.2256 3.60367 11.4412 3.5 11.6692 3.5ZM6.01948 17.185H4.25C3.83579 17.185 3.5 16.8492 3.5 16.435V9.47761C3.5 9.0634 3.83579 8.72761 4.25 8.72761H6.01948V17.185Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiThumbsUp3Icon implements OnInit {
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
