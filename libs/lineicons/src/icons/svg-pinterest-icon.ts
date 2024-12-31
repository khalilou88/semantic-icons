import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pinterest-icon',
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
        d="M2.24876 12.0294C2.31334 15.0323 3.70182 18.0353 6.05898 19.8436C6.80165 20.3925 7.6089 20.7154 8.44844 21.0706C8.09325 18.778 8.96508 16.4854 9.44944 14.2251C9.51402 13.9991 9.54631 13.7407 9.54631 13.4824C9.54631 13.1272 9.41715 12.772 9.32028 12.4169C9.22341 11.8356 9.28799 11.2221 9.54631 10.6732C9.9015 9.93052 10.741 9.3493 11.4837 9.63991C12.1618 9.89823 12.4201 10.8024 12.291 11.5127C12.1618 12.2554 11.7743 12.9012 11.5806 13.6116C11.3545 14.322 11.3868 15.1938 11.9035 15.6782C12.3878 16.1302 13.1628 16.1625 13.7763 15.9042C14.6804 15.5167 15.2616 14.6126 15.6168 13.7085C16.2626 12.0294 16.1335 9.89823 14.8096 8.67121C14.2607 8.12228 13.4857 7.76709 12.6462 7.63793C11.2254 7.4119 9.67547 7.83167 8.67447 8.86495C7.67348 9.89823 7.22142 11.4804 7.64119 12.8366C7.77035 13.2887 8.02867 13.7407 8.12554 14.1928C8.22241 14.6449 8.19012 15.2261 7.86722 15.549C7.83493 15.5813 7.80264 15.6136 7.73806 15.6459C7.67348 15.6782 7.57661 15.6136 7.51203 15.5813C6.89852 15.1938 6.41417 14.5803 6.12356 13.9345C5.21944 11.9648 5.6715 9.51075 7.09226 7.89625C8.51302 6.28175 10.8056 5.50678 12.9368 5.79739C14.9387 6.05571 16.9084 7.25045 17.748 9.09098C18.2646 10.1888 18.3615 11.4482 18.1678 12.6429C17.974 13.8699 17.4897 15.0324 16.6824 15.9688C15.8752 16.9052 14.7127 17.551 13.4857 17.6156C12.4847 17.6801 11.4191 17.3249 10.9025 16.4854C10.5796 18.2291 9.96608 19.9404 9.06195 21.4581C9.02966 21.5227 11.1285 21.9747 11.3223 21.9747C13.7117 22.1685 16.2626 21.232 18.1355 19.7467C23.3019 15.6459 22.7529 7.79938 17.6511 3.92458C15.0033 1.8903 11.8712 1.50282 8.77134 2.60069C7.83493 2.92359 6.9631 3.47252 6.15585 4.05374C4.86426 5.02243 3.83098 6.28175 3.15288 7.7348C2.47479 9.05869 2.21647 10.544 2.24876 12.0294Z"
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
export class SvgPinterestIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
