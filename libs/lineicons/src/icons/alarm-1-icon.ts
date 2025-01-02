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
  selector: 'svg[si-alarm-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.35281 2.61417C5.69063 2.37448 5.77017 1.90631 5.53048 1.5685C5.29079 1.23068 4.82262 1.15114 4.48481 1.39083C3.25694 2.26205 2.18702 3.34102 1.3261 4.57669C1.08931 4.91655 1.17287 5.38401 1.51273 5.6208C1.85259 5.85759 2.32006 5.77403 2.55684 5.43417C3.31882 4.34051 4.26601 3.3853 5.35281 2.61417Z"
      fill="#323544"
    />
    <svg:path
      d="M19.5143 1.39083C19.1765 1.15114 18.7083 1.23068 18.4686 1.5685C18.2289 1.90631 18.3085 2.37448 18.6463 2.61417C19.7331 3.3853 20.6803 4.34051 21.4423 5.43417C21.6791 5.77403 22.1465 5.85759 22.4864 5.6208C22.8263 5.38401 22.9098 4.91655 22.673 4.57669C21.8121 3.34102 20.7422 2.26205 19.5143 1.39083Z"
      fill="#323544"
    />
    <svg:path
      d="M11.2496 11.9999V6.50024C11.2496 6.08603 11.5854 5.75024 11.9996 5.75024C12.4138 5.75024 12.7496 6.08603 12.7496 6.50024V11.6894L15.3582 14.298C15.6511 14.5909 15.6511 15.0658 15.3582 15.3587C15.0653 15.6516 14.5905 15.6516 14.2976 15.3587L11.4692 12.5304L11.2496 11.9999Z"
      fill="#323544"
    />
    <svg:path
      d="M11.4677 12.5288L11.2496 11.9999C11.2496 12.2062 11.3329 12.3932 11.4677 12.5288Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.00007 12C2.00007 6.47736 6.47706 2.00037 11.9997 2.00037C17.5224 2.00037 21.9994 6.47736 21.9994 12C21.9994 17.5227 17.5224 21.9997 11.9997 21.9997C6.47706 21.9997 2.00007 17.5227 2.00007 12ZM11.9997 3.50037C7.30549 3.50037 3.50007 7.30579 3.50007 12C3.50007 16.6943 7.30549 20.4997 11.9997 20.4997C16.694 20.4997 20.4994 16.6943 20.4994 12C20.4994 7.30579 16.694 3.50037 11.9997 3.50037Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAlarm1Icon implements OnInit {
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
