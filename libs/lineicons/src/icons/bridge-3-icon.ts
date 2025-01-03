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
  selector: 'svg[si-bridge-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.32931 12.8713C4.94407 9.19032 8.14427 6.38477 11.9998 6.38477C15.8552 6.38477 19.0554 9.19032 19.6702 12.8713H22.0001C22.3654 12.8713 22.6776 13.1345 22.7393 13.4946C22.801 13.8547 22.5942 14.2069 22.2497 14.3285L21.7946 14.4891C20.871 14.8151 20.1647 15.5714 19.9025 16.5151L19.7493 17.0656C19.6488 17.4269 19.2968 17.6583 18.9253 17.6076C18.5537 17.5569 18.2768 17.2395 18.2768 16.8645V14.3713H12.0001C12.0001 14.3713 12.0001 14.3713 12.0001 14.3713H5.72273V16.8645C5.72273 17.2396 5.44554 17.5571 5.07382 17.6077C4.7021 17.6582 4.35019 17.4264 4.24998 17.0648L4.0976 16.5151C4.09757 16.515 4.09764 16.5153 4.0976 16.5151C3.83537 15.5716 3.129 14.815 2.20551 14.4891L1.75046 14.3285C1.40593 14.2069 1.19915 13.8547 1.26084 13.4946C1.32252 13.1345 1.63472 12.8713 2.00007 12.8713H4.32931ZM5.85553 12.8713H8.00593V9.319C6.92789 10.2091 6.15209 11.4522 5.85553 12.8713ZM9.50593 8.39968V12.8713H11.25L11.2498 7.9291C10.6371 8.00206 10.0514 8.16327 9.50593 8.39968ZM12.7498 7.92911L12.75 12.8713H14.4942V8.39995C13.9486 8.16341 13.3627 8.0021 12.7498 7.92911ZM15.9942 9.31952V12.8713H18.144C17.8475 11.4524 17.0719 10.2096 15.9942 9.31952Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBridge3Icon implements OnInit {
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
