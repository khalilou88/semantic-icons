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
  selector: 'svg[si-island-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.9674 4.42937C8.89108 4.19389 8.7943 3.96627 8.68128 3.75148C8.31435 3.05411 7.73911 2.42124 7.01378 2.06805C6.64137 1.88671 6.19247 2.0416 6.01113 2.41401C5.82979 2.78642 5.98468 3.23532 6.35709 3.41666C6.73854 3.60241 7.1032 3.97362 7.35382 4.44993C7.42144 4.57846 7.47806 4.70949 7.52344 4.84056C6.97007 4.69438 6.37828 4.65634 5.77641 4.74742C4.48432 4.94295 3.41266 5.69315 2.76784 6.71683C2.54708 7.06731 2.65223 7.53039 3.00271 7.75116C3.35319 7.97192 3.81627 7.86677 4.03704 7.51629C4.45939 6.84578 5.15784 6.3581 6.00084 6.23054C6.6151 6.13759 7.21261 6.24997 7.72447 6.51725C6.63858 7.07811 5.79076 7.97294 5.27781 9.03347C5.09746 9.40636 5.25353 9.85485 5.62642 10.0352C5.99931 10.2156 6.4478 10.0595 6.62816 9.68659C7.03872 8.83773 7.74027 8.13687 8.64181 7.74081C9.03114 8.6979 9.35196 9.6257 9.55508 10.6921C9.8131 12.0467 9.88605 13.6564 9.623 15.8412C7.1808 16.3692 5.03202 17.6855 3.45729 19.5091C3.26553 19.7312 3.22087 20.0447 3.34298 20.3115C3.46509 20.5782 3.73154 20.7493 4.02494 20.7493H20.0252C20.3186 20.7493 20.585 20.5782 20.7071 20.3115C20.8292 20.0447 20.7846 19.7312 20.5928 19.5091C18.5189 17.1075 15.4493 15.5856 12.0251 15.5856C11.7332 15.5856 11.444 15.5966 11.1577 15.6184C11.3812 13.5045 11.3034 11.854 11.0286 10.4114C10.8176 9.30344 10.4929 8.33463 10.1212 7.39891C11.0008 7.36413 11.851 7.61946 12.5559 8.09827C12.8985 8.33102 13.3649 8.24194 13.5977 7.89931C13.8304 7.55667 13.7414 7.09023 13.3987 6.85748C12.342 6.13963 11.0417 5.78743 9.71189 5.92497C10.0027 5.43544 10.4438 5.03 11.005 4.78475C11.7863 4.44334 12.6372 4.48368 13.3519 4.82587C13.7255 5.00474 14.1734 4.84688 14.3523 4.47327C14.5311 4.09967 14.3733 3.6518 13.9997 3.47294C12.9085 2.9505 11.6018 2.88697 10.4044 3.41025C9.84256 3.65577 9.35921 4.00666 8.9674 4.42937ZM18.1736 19.2493H5.87654C7.55948 17.8952 9.69747 17.0856 12.0251 17.0856C14.3526 17.0856 16.4906 17.8952 18.1736 19.2493Z"
      fill="#323544"
    />
    <svg:path
      d="M18.0249 7.49966C16.5062 7.49966 15.2749 8.73087 15.2749 10.2497C15.2749 11.7684 16.5062 12.9997 18.0249 12.9997C19.5437 12.9997 20.7749 11.7684 20.7749 10.2497C20.7749 8.73087 19.5437 7.49966 18.0249 7.49966ZM16.7749 10.2497C16.7749 9.5593 17.3346 8.99966 18.0249 8.99966C18.7153 8.99966 19.2749 9.5593 19.2749 10.2497C19.2749 10.94 18.7153 11.4997 18.0249 11.4997C17.3346 11.4997 16.7749 10.94 16.7749 10.2497Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIsland2Icon implements OnInit {
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
