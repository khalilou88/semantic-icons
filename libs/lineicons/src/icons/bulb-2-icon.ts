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
  selector: 'svg[si-bulb-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.0625 18.0453C9.01679 16.914 8.26885 15.8509 7.26013 14.8658C5.86655 13.5048 5 11.6029 5 9.49987C5 5.35781 8.35781 2 12.4999 2C16.6419 2 19.9997 5.35781 19.9997 9.49987C19.9997 11.6027 19.1333 13.5046 17.7399 14.8655C16.6988 15.8824 15.9355 16.9822 15.9355 18.1544V19.75C15.9355 20.9926 14.9282 22 13.6855 22H11.3125C10.0699 22 9.0625 20.9926 9.0625 19.75V18.0453ZM6.5 9.49987C6.5 11.1825 7.19168 12.7023 8.30817 13.7927C9.04933 14.5165 9.81983 15.4258 10.2412 16.5H11.75L11.75 11.8412C11.4429 11.7329 11.1547 11.556 10.909 11.3104L10.0635 10.4649C9.77054 10.1721 9.77051 9.69719 10.0634 9.40427C10.3563 9.11136 10.8311 9.11133 11.124 9.40421L11.9696 10.2497C12.2625 10.5425 12.7374 10.5425 13.0303 10.2497L13.8757 9.40424C14.1686 9.11135 14.6434 9.11135 14.9363 9.40424C15.2292 9.69713 15.2292 10.172 14.9363 10.4649L14.0909 11.3103C13.8453 11.5559 13.5571 11.7329 13.25 11.8412V16.5H14.7589C15.1802 15.4257 15.9506 14.5164 16.6918 13.7925C17.8082 12.7021 18.4997 11.1824 18.4997 9.49987C18.4997 6.18624 15.8135 3.5 12.4999 3.5C9.18624 3.5 6.5 6.18624 6.5 9.49987ZM10.5625 18.2129V19.75C10.5625 20.1642 10.8983 20.5 11.3125 20.5H13.6855C14.0998 20.5 14.4355 20.1642 14.4355 19.75V18H10.5625V18.0175C10.564 18.063 10.5647 18.1088 10.5647 18.1549C10.5647 18.1744 10.564 18.1938 10.5625 18.2129Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBulb2Icon implements OnInit {
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
