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
  selector: 'svg[si-java-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.3472 14.228C15.7021 13.9699 16.2506 13.7441 16.2506 13.7441C16.2506 13.7441 14.7665 14.0022 13.2501 14.1635C11.411 14.2603 9.44295 14.3248 8.44276 14.1635C6.0875 13.8409 9.70106 12.9697 9.70106 12.9697C9.70106 12.9697 8.28144 12.8729 6.50693 13.7441C4.50657 14.712 11.6369 15.1637 15.3472 14.228ZM12.0563 12.9375C11.282 11.2597 8.79767 9.80787 12.0563 7.25902C16.0893 4.03263 13.9922 2 13.9922 2C14.8633 5.32318 11.0239 6.32337 9.66879 8.35599C8.73314 9.71108 10.1528 11.2275 12.0563 12.9375ZM16.5087 6.09752C16.5087 6.09752 9.63653 7.83977 12.9274 11.5824C13.8954 12.6794 12.6693 13.6795 12.6693 13.6795C12.6693 13.6795 15.1214 12.4212 13.9922 10.8081C12.9597 9.32391 12.1209 8.58184 16.5087 6.09752ZM16.2829 16.6156C16.2506 16.6478 16.2506 16.6478 16.2506 16.7123C21.2515 15.3895 19.4448 12.0341 17.025 12.9052C16.8959 12.9375 16.7669 13.0343 16.7023 13.1633C16.8314 13.1311 16.9604 13.0665 17.154 13.0343C18.2833 12.8084 20.0255 14.6797 16.2829 16.6156ZM18.0897 19.0676C18.0897 19.0676 18.6382 19.5193 17.4444 19.8742C15.1859 20.5518 8.0556 20.7453 6.05523 19.9065C5.31316 19.5838 6.70051 19.1321 7.08768 19.0354C7.53937 18.9386 7.76522 19.0031 7.76522 19.0031C6.99089 18.4546 2.63526 20.1001 5.57127 20.5518C13.605 21.9068 20.1868 20.0355 18.0897 19.0676ZM9.37842 17.4544C6.34561 18.3255 11.2497 20.1001 15.1537 18.4223C14.7988 18.2933 14.3793 18.0674 14.0567 17.8739C12.2822 18.2288 11.5078 18.2288 9.9269 18.0674C8.60408 17.9061 9.37842 17.4544 9.37842 17.4544ZM16.412 21.2616C13.3791 21.8101 9.50747 21.7455 7.28126 21.3906C7.28126 21.3906 7.73296 21.7455 10.0882 21.9391C13.6695 22.165 19.2189 21.8101 19.348 20.0678C19.348 20.0678 19.1221 20.7776 16.412 21.2616ZM14.6697 15.7767C12.3467 16.2284 10.9916 16.2284 9.31389 16.0348C7.99107 15.9058 8.8622 15.2605 8.8622 15.2605C5.50675 16.3897 10.7335 17.6803 15.5086 16.2607C15.2182 16.1639 14.9601 16.0025 14.6697 15.7767Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiJavaIcon implements OnInit {
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
