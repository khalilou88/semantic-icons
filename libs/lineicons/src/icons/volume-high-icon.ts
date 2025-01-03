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
  selector: 'svg[si-volume-high-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.75 6.34034C13.75 4.39892 11.4562 3.36887 10.0052 4.65867L6.80858 7.50009H4.75C3.50736 7.50009 2.5 8.50745 2.5 9.75009V14.2501C2.5 15.4927 3.50736 16.5001 4.75 16.5001H6.80862L10.0052 19.3415C11.4562 20.6313 13.75 19.6012 13.75 17.6598V6.34034ZM11.0017 5.77978C11.4854 5.34985 12.25 5.6932 12.25 6.34034V17.6598C12.25 18.3069 11.4854 18.6503 11.0017 18.2204L7.59204 15.1895C7.45475 15.0675 7.27745 15.0001 7.09377 15.0001H4.75C4.33579 15.0001 4 14.6643 4 14.2501V9.75009C4 9.33587 4.33579 9.00009 4.75 9.00009H7.09373C7.27742 9.00009 7.45472 8.93268 7.592 8.81064L11.0017 5.77978Z"
      fill="#323544"
    />
    <svg:path
      d="M17.0769 8.83653C18.6384 10.5756 18.6384 13.4253 17.0769 15.1644C16.8001 15.4726 16.8256 15.9468 17.1338 16.2235C17.442 16.5002 17.9162 16.4747 18.193 16.1665C20.2664 13.8574 20.2664 10.1435 18.193 7.83437C17.9162 7.52617 17.442 7.50066 17.1338 7.7774C16.8256 8.05414 16.8001 8.52833 17.0769 8.83653Z"
      fill="#323544"
    />
    <svg:path
      d="M19.2658 16.8863C21.5781 14.199 21.5781 9.80197 19.2658 7.11467C18.9956 6.80069 19.0311 6.32715 19.3451 6.05698C19.6591 5.78681 20.1326 5.82233 20.4028 6.13631C23.1991 9.38607 23.1991 14.6149 20.4028 17.8647C20.1326 18.1786 19.6591 18.2142 19.3451 17.944C19.0311 17.6738 18.9956 17.2003 19.2658 16.8863Z"
      fill="#323544"
    />
    <svg:path
      d="M14.9853 10.6534C15.6729 11.4179 15.6729 12.5831 14.9853 13.3476C14.7084 13.6556 14.7335 14.1298 15.0415 14.4068C15.3495 14.6838 15.8237 14.6586 16.1007 14.3506C17.3011 13.0157 17.3011 10.9852 16.1007 9.65036C15.8237 9.34236 15.3495 9.31721 15.0415 9.59418C14.7335 9.87115 14.7084 10.3454 14.9853 10.6534Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiVolumeHighIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}