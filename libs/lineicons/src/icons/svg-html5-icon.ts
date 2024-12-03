import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-html5-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.23332 2H7.13477V2.89062H7.95937V2H8.86086V4.69703H7.95941V3.79391H7.1348V4.69703H6.2334V2H6.23332ZM10.0463 2.89437H9.25273V2H11.7418V2.89437H10.9479V4.69703H10.0464L10.0463 2.89437ZM12.1368 2H13.0767L13.6549 2.94766L14.2326 2H15.1729V4.69703H14.2752V3.36023L13.655 4.31918H13.6395L13.0188 3.36023V4.69703H12.1368V2H12.1368ZM15.6215 2H16.5232V3.80555H17.7909V4.69703H15.6215V2Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.91504 5.93047L6.20449 20.3936L11.991 22L17.7934 20.3914L19.0843 5.93047H4.91504ZM16.1168 12.4772H9.65238L9.49027 10.6608H16.2782L16.437 8.88692H7.55168L8.03012 14.2511H14.1778L13.9719 16.5516L11.9936 17.0856V17.0857L11.9919 17.0862L10.0163 16.5527L9.89004 15.138H8.10937L8.35789 17.9232L11.9915 18.9319L11.9996 18.9296V18.9294L15.63 17.9232L16.0735 12.9536L16.1168 12.4772Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHtml5Icon {
  readonly class = input('');
}