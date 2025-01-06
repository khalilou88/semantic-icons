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
  selector: 'svg[si-replay-30-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 12C22 6.47715 17.5228 2 12 2 8.72873 2 5.82434 3.57075 3.99989 5.99918L4 3.5H2V9.5H6.75V10H9.37481C9.71999 10 9.99981 10.2798 9.99981 10.625 9.99981 10.9702 9.71999 11.25 9.37481 11.25H7.5V12.75H9.37481C9.71999 12.75 9.99981 13.0298 9.99981 13.375 9.99981 13.7202 9.71999 14 9.37481 14H6.75V15.5H9.37481C10.5484 15.5 11.4998 14.5486 11.4998 13.375 11.4998 12.8506 11.3099 12.3706 10.9951 12 11.3099 11.6294 11.4998 11.1494 11.4998 10.625 11.4998 9.4514 10.5484 8.5 9.37481 8.5H8V7.5L5.38451 7.50024C6.82447 5.38734 9.25022 4 12 4 16.4183 4 20 7.58172 20 12 20 16.4183 16.4183 20 12 20 7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22 17.5228 22 22 17.5228 22 12ZM12.5 10.75C12.5 9.36929 13.6193 8.25 15 8.25 16.3807 8.25 17.5 9.36929 17.5 10.75V13.25C17.5 14.6307 16.3807 15.75 15 15.75 13.6193 15.75 12.5 14.6307 12.5 13.25V10.75ZM15 9.75C14.4477 9.75 14 10.1977 14 10.75V13.25C14 13.8023 14.4477 14.25 15 14.25 15.5523 14.25 16 13.8023 16 13.25V10.75C16 10.1977 15.5523 9.75 15 9.75Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiReplay30LineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
