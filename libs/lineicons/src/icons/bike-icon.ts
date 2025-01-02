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
  selector: 'svg[si-bike-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.7921 3.61612C15.3039 3.12796 14.5125 3.12796 14.0243 3.61612C13.5362 4.10427 13.5362 4.89573 14.0243 5.38388C14.5125 5.87204 15.304 5.87211 15.7922 5.38395C16.2803 4.8958 16.2802 4.10427 15.7921 3.61612Z"
      fill="#323544"
    />
    <svg:path
      d="M17.0682 10.2183C17.4817 10.2426 17.8366 9.92713 17.8609 9.51363C17.8852 9.10013 17.5697 8.74523 17.1562 8.72093L15.0741 8.59858C14.799 8.58241 14.5549 8.41671 14.4384 8.16701L13.6545 6.48696C13.576 6.31882 13.4688 6.1657 13.3376 6.0345C12.716 5.41289 11.7081 5.41289 11.0865 6.0345L8.42821 8.69279C7.79921 9.32178 7.79921 10.3416 8.42821 10.9706C8.54175 11.0841 8.67162 11.18 8.81354 11.2552L10.8699 12.3438C11.1171 12.4746 11.2709 12.7321 11.269 13.0117L11.2509 15.6707C11.2481 16.0849 11.5816 16.423 11.9958 16.4258C12.41 16.4286 12.7481 16.0951 12.7509 15.6809L12.769 13.0219C12.7747 12.183 12.3132 11.4106 11.5717 11.0181L10.3003 10.345L12.6855 7.95767L13.0791 8.80129C13.4287 9.5504 14.1609 10.0475 14.9861 10.096L17.0682 10.2183Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 15.7501C2 13.679 3.67893 12.0001 5.75 12.0001C7.82107 12.0001 9.5 13.679 9.5 15.7501C9.5 17.8211 7.82107 19.5001 5.75 19.5001C3.67893 19.5001 2 17.8211 2 15.7501ZM5.75 13.5001C4.50736 13.5001 3.5 14.5074 3.5 15.7501C3.5 16.9927 4.50736 18.0001 5.75 18.0001C6.99264 18.0001 8 16.9927 8 15.7501C8 14.5074 6.99264 13.5001 5.75 13.5001Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.25 12.0001C16.1789 12.0001 14.5 13.679 14.5 15.7501C14.5 17.8211 16.1789 19.5001 18.25 19.5001C20.3211 19.5001 22 17.8211 22 15.7501C22 13.679 20.3211 12.0001 18.25 12.0001ZM16 15.7501C16 14.5074 17.0074 13.5001 18.25 13.5001C19.4926 13.5001 20.5 14.5074 20.5 15.7501C20.5 16.9927 19.4926 18.0001 18.25 18.0001C17.0074 18.0001 16 16.9927 16 15.7501Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBikeIcon implements OnInit {
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
