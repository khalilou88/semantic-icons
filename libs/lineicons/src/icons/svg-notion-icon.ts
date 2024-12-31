import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-notion-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.71559 5.50641C6.33766 6.01182 6.57102 5.97324 7.73915 5.89531L18.7515 5.23407C18.9851 5.23407 18.7909 5.00106 18.713 4.96234L16.8841 3.64017C16.5336 3.3681 16.0667 3.05652 15.1719 3.13446L4.5086 3.9122C4.11971 3.95077 4.04204 4.14521 4.19691 4.30106L5.71559 5.50641ZM6.37677 8.07285V19.6598C6.37677 20.2825 6.68796 20.5155 7.38834 20.477L19.4909 19.7766C20.1917 19.7381 20.2698 19.3098 20.2698 18.804V7.29475C20.2698 6.78972 20.0755 6.51735 19.6465 6.55624L6.99919 7.29475C6.53241 7.33399 6.37677 7.56747 6.37677 8.07285ZM18.3244 8.69442C18.402 9.04468 18.3244 9.39467 17.9735 9.43406L17.3904 9.55025V18.1045C16.8841 18.3766 16.4172 18.5322 16.0282 18.5322C15.4053 18.5322 15.2492 18.3376 14.7827 17.7547L10.9684 11.7667V17.5602L12.1754 17.8326C12.1754 17.8326 12.1754 18.5322 11.2016 18.5322L8.51702 18.6879C8.43903 18.5322 8.51702 18.1437 8.78933 18.0658L9.48986 17.8717V10.2115L8.51721 10.1335C8.43918 9.78323 8.63349 9.27813 9.1787 9.23893L12.0586 9.04481L16.0282 15.1108V9.74466L15.016 9.6285C14.9384 9.20026 15.2492 8.88932 15.6385 8.85075L18.3244 8.69442ZM3.61329 2.86243L14.7048 2.04561C16.0669 1.92879 16.4173 2.00705 17.2734 2.62891L20.814 5.11741C21.3982 5.54533 21.5929 5.66183 21.5929 6.12832V19.7766C21.5929 20.632 21.2813 21.1379 20.1919 21.2153L7.31126 21.9931C6.49346 22.0321 6.10428 21.9156 5.67598 21.3709L3.06867 17.988C2.60152 17.3653 2.40723 16.8994 2.40723 16.3544V4.22284C2.40723 3.52335 2.71892 2.93986 3.61329 2.86243Z"
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
export class SvgNotionIcon {
  readonly class = input<string>('');
}
