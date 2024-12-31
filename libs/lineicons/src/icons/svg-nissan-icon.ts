import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nissan-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.03 3.44043C7.95 3.44043 4.51 6.14043 3.51 9.80043C3.08 9.85043 2.87 9.88043 2.69 9.93043C2.12 10.0604 2 10.2604 2 10.6704V13.4404C2 13.8404 2.43 14.1204 2.73 14.1704C3.03 14.2304 3.22 14.2504 3.53 14.2804H3.53333C4.56667 17.9054 7.97416 20.5604 12.03 20.5604C16.085 20.5604 19.5008 17.8971 20.5258 14.2746C20.7756 14.2538 21.0241 14.219 21.27 14.1704C21.57 14.1204 22 13.8404 22 13.4404V10.6704C22 10.2604 21.88 10.0604 21.31 9.93043C21.1383 9.88291 20.9342 9.85291 20.5442 9.80711C20.5408 9.79862 20.5394 9.78953 20.54 9.78043C19.53 6.12043 16.1 3.44043 12.03 3.44043ZM12.04 5.46043C14.92 5.46043 17.38 7.22043 18.34 9.69043C18.34 9.70043 18.35 9.71043 18.35 9.71043L18.3617 9.71459C16.2867 9.63627 13.6067 9.55043 12 9.55043C10.415 9.55043 7.79 9.63375 5.72584 9.71127L5.73 9.71043C6.69 7.23043 9.15 5.46043 12.04 5.46043ZM7.33 10.8904H7.87C7.92 10.8904 7.93 10.9104 7.93 10.9504V13.0504C7.93 13.1004 7.92 13.1204 7.86 13.1204H7.35C7.29 13.1204 7.28 13.1104 7.28 13.0504V10.9504C7.28 10.9104 7.29 10.8904 7.33 10.8904ZM9.12 10.9004H10.72C10.78 10.9004 10.8 10.9104 10.8 10.9604V11.3204C10.8 11.3704 10.78 11.3904 10.72 11.3804H9.15C9.08 11.3804 9.05 11.4104 9.04 11.4804V11.5704C9.04 11.6204 9.07 11.6604 9.14 11.6704C9.32 11.7004 9.9 11.7404 10.12 11.7604C10.51 11.8004 10.8 11.8704 10.88 12.2404C10.88 12.2704 10.89 12.3704 10.89 12.4804C10.89 12.5504 10.89 12.6404 10.87 12.7204C10.8 13.0704 10.54 13.1404 10.12 13.1404H8.47C8.41 13.1404 8.4 13.1304 8.4 13.0704V12.7204C8.4 12.6604 8.41 12.6504 8.47 12.6504H10.14C10.21 12.6504 10.23 12.6304 10.24 12.5804V12.4304C10.23 12.3904 10.22 12.3304 10.13 12.3204C9.75942 12.294 9.38935 12.2607 9.02 12.2204C8.54 12.1704 8.42 11.9704 8.4 11.7904C8.39 11.7304 8.39 11.6504 8.39 11.5804C8.39 11.5204 8.39 11.4304 8.4 11.3604C8.47 11.0504 8.7 10.9004 9.12 10.9004ZM11.96 10.9004H13.56C13.62 10.9004 13.64 10.9104 13.64 10.9604V11.3204C13.64 11.3704 13.62 11.3904 13.56 11.3804H11.99C11.92 11.3804 11.89 11.4104 11.88 11.4804V11.5704C11.88 11.6204 11.9 11.6604 11.98 11.6704C12.16 11.7004 12.74 11.7404 12.95 11.7604C13.34 11.8004 13.63 11.8704 13.71 12.2404C13.71 12.2704 13.72 12.3704 13.72 12.4804C13.72 12.5504 13.72 12.6404 13.7 12.7204C13.63 13.0704 13.37 13.1404 12.95 13.1404H11.31C11.25 13.1404 11.24 13.1304 11.24 13.0704V12.7204C11.24 12.6604 11.25 12.6504 11.31 12.6504H12.98C13.05 12.6504 13.07 12.6304 13.08 12.5804V12.4304C13.07 12.3904 13.05 12.3304 12.97 12.3204C12.5994 12.294 12.2294 12.2607 11.86 12.2204C11.38 12.1704 11.27 11.9704 11.24 11.7904C11.23 11.7304 11.23 11.6504 11.23 11.5804C11.23 11.5204 11.23 11.4304 11.24 11.3604C11.31 11.0504 11.54 10.9004 11.96 10.9004ZM4.19 10.9104H4.7C5.08 10.9104 5.13 10.9004 5.27 11.1004C5.38 11.2804 6.27 12.6504 6.27 12.6504V10.9804C6.27 10.9304 6.28 10.9104 6.34 10.9104H6.78C6.84 10.9104 6.85 10.9304 6.85 10.9804V13.0704C6.85 13.1304 6.84 13.1404 6.78 13.1404H6.18C5.83 13.1404 5.8 13.1404 5.68 12.9404C5.44 12.5604 4.7 11.4304 4.7 11.4304V13.0704C4.7 13.1304 4.69 13.1404 4.63 13.1404H4.19C4.13 13.1404 4.12 13.1304 4.12 13.0704V10.9804C4.12 10.9304 4.13 10.9104 4.19 10.9104ZM15.37 10.9104C15.48 10.9104 15.56 10.9104 15.59 10.9204C15.95 10.9304 15.89 10.8904 16.06 11.2604C16.15 11.4704 16.79 12.8404 16.89 13.0804C16.92 13.1504 16.9 13.1404 16.82 13.1404H16.27C16.24 13.1404 16.21 13.1304 16.2 13.1004C16.2 13.0904 16.13 12.9304 16.03 12.7004H14.74C14.64 12.9304 14.56 13.1004 14.56 13.1004C14.55 13.1204 14.53 13.1404 14.49 13.1404H13.96C13.88 13.1404 13.85 13.1404 13.9 13.0404L13.91 13.0204C14.16 12.4704 14.75 11.1504 14.75 11.1504C14.87 10.9004 14.81 10.9204 15.15 10.9204C15.24 10.9104 15.26 10.9104 15.37 10.9104ZM17.29 10.9104H17.8C18.18 10.9104 18.23 10.9004 18.37 11.1004C18.49 11.2804 19.37 12.6504 19.37 12.6504V10.9804C19.37 10.9304 19.38 10.9104 19.44 10.9104H19.88C19.94 10.9104 19.95 10.9304 19.95 10.9804V13.0704C19.95 13.1304 19.94 13.1404 19.88 13.1404H19.28C18.93 13.1404 18.9 13.1404 18.78 12.9404C18.53 12.5604 17.8 11.4304 17.8 11.4304V13.0704C17.8 13.1304 17.79 13.1404 17.73 13.1404H17.29C17.23 13.1404 17.22 13.1304 17.22 13.0704V10.9804C17.22 10.9304 17.23 10.9104 17.29 10.9104ZM15.4 11.4104C15.37 11.4104 15.34 11.4104 15.33 11.4204C15.3 11.4204 15.28 11.4304 15.27 11.4504C15.27 11.4604 15.11 11.8404 14.94 12.2304H15.83C15.7 11.9004 15.55 11.5704 15.51 11.4604C15.5 11.4304 15.48 11.4204 15.46 11.4204C15.45 11.4104 15.42 11.4104 15.4 11.4104ZM18.3 14.4021C18.2975 14.4138 18.28 14.4413 18.28 14.4504C17.28 16.8504 14.86 18.5504 12.03 18.5504C9.18 18.5504 6.75 16.8304 5.76 14.4104L5.74084 14.4046C7.55416 14.4963 9.90248 14.5904 12 14.5904C14.115 14.5904 16.48 14.4954 18.3 14.4029V14.4021Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNissanIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
