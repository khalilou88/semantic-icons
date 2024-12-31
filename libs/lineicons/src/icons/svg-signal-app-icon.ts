import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-signal-app-icon',
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
        d="M9.6368 2.29216L9.85832 3.20146C8.98689 3.41912 8.15288 3.76941 7.38465 4.24042L6.91087 3.43738C7.75745 2.91826 8.67648 2.53215 9.6368 2.29216ZM14.3626 2.29216L14.1411 3.20146C15.0125 3.41912 15.8465 3.76941 16.6147 4.24042L17.0916 3.43738C16.244 2.91797 15.324 2.53185 14.3626 2.29216ZM3.56957 6.83086C3.05842 7.69068 2.67826 8.62408 2.44196 9.59939L3.33728 9.82438C3.55158 8.93934 3.89648 8.09233 4.36028 7.31207L3.56957 6.83086ZM3.0773 11.9992C3.077 11.5447 3.11043 11.0909 3.17729 10.6415L2.26505 10.5009C2.11738 11.4941 2.11738 12.5043 2.26505 13.4975L3.17729 13.3569C3.11043 12.9075 3.077 12.4537 3.0773 11.9992ZM17.0885 20.561L16.6147 19.758C15.8474 20.2287 15.0145 20.579 14.1441 20.797L14.3656 21.7063C15.3249 21.466 16.2429 21.0799 17.0885 20.561ZM20.9221 11.9992C20.9224 12.4537 20.889 12.9075 20.8221 13.3569L21.7343 13.4975C21.882 12.5043 21.882 11.4941 21.7343 10.5009L20.8221 10.6415C20.889 11.0909 20.9224 11.5447 20.9221 11.9992ZM21.5574 14.399L20.6621 14.174C20.4478 15.0591 20.1029 15.9061 19.6391 16.6863L20.4298 17.1707C20.9412 16.3099 21.3214 15.3754 21.5574 14.399ZM13.3365 20.961C12.4503 21.0964 11.5491 21.0964 10.6629 20.961L10.5244 21.8875C11.5024 22.0375 12.497 22.0375 13.475 21.8875L13.3365 20.961ZM19.1822 17.3754C18.65 18.1073 18.0127 18.7541 17.2916 19.294L17.8392 20.0486C18.6348 19.4545 19.3379 18.7425 19.9252 17.9362L19.1822 17.3754ZM17.2916 4.70445C18.0129 5.2448 18.6502 5.89207 19.1822 6.62462L19.9252 6.06217C19.3398 5.25641 18.6387 4.54439 17.8454 3.94984L17.2916 4.70445ZM4.81718 6.62462C5.34921 5.89207 5.98651 5.2448 6.70781 4.70445L6.154 3.94984C5.36063 4.54439 4.65954 5.25641 4.07416 6.06217L4.81718 6.62462ZM20.4298 6.83086L19.6391 7.31207C20.1026 8.09137 20.4475 8.9373 20.6621 9.82127L21.5574 9.59625C21.3208 8.62204 20.9407 7.68972 20.4298 6.83086ZM10.6629 3.03897C11.5491 2.90356 12.4503 2.90356 13.3365 3.03897L13.475 2.11249C12.497 1.9625 11.5024 1.9625 10.5244 2.11249L10.6629 3.03897ZM5.29096 20.297L3.38497 20.7485L3.82955 18.8127L2.93115 18.5987L2.48657 20.5345C2.45076 20.6898 2.45456 20.8518 2.49762 21.0052C2.54067 21.1586 2.62155 21.2983 2.7326 21.4111C2.84365 21.5239 2.98121 21.606 3.13224 21.6497C3.28328 21.6935 3.4428 21.6973 3.59572 21.661L5.50019 21.2172L5.29096 20.297ZM3.12345 17.7628L4.02184 17.9753L4.3295 16.6332C3.88106 15.8677 3.54668 15.039 3.33728 14.174L2.44196 14.399C2.64267 15.2275 2.94772 16.0262 3.34958 16.7754L3.12345 17.7628ZM7.43079 19.7939L6.10936 20.1064L6.31859 21.0188L7.2908 20.7892C8.0285 21.1973 8.81494 21.5071 9.63066 21.711L9.85218 20.8017C9.00228 20.5864 8.18841 20.2447 7.43694 19.7877L7.43079 19.7939ZM11.9997 3.87485C10.5704 3.8756 9.16744 4.26524 7.93668 5.00329C6.70592 5.74134 5.69239 6.80079 5.00138 8.07148C4.31039 9.34216 3.96726 10.7777 4.00763 12.2287C4.04802 13.6798 4.47042 15.0933 5.231 16.3223L4.46181 19.6549L7.74309 18.8737C8.79254 19.545 9.98134 19.9593 11.2155 20.0838C12.4498 20.2083 13.6956 20.0397 14.8545 19.5911C16.0136 19.1426 17.054 18.4265 17.8936 17.4994C18.7333 16.5724 19.3492 15.4597 19.6927 14.2493C20.0362 13.0389 20.0979 11.764 19.8729 10.5252C19.6479 9.28645 19.1423 8.11783 18.3962 7.11162C17.65 6.10542 16.6838 5.28919 15.5736 4.72741C14.4635 4.16567 13.2399 3.87381 11.9997 3.87485Z"
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
export class SvgSignalAppIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
