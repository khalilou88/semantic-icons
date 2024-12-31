import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lunacy-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lunacy</title>
      <path
        d="M12.031 6h-6v12h11.996v-6l-5.996 5.996Zm6.563 2.309a4.013 4.013 0 0 1-2.371-2.375 4.03 4.03 0 0 1-2.375 2.375 4.04 4.04 0 0 1 2.375 2.375 4.013 4.013 0 0 1 2.37-2.375ZM0 9.602c0-3.364 0-5.043.652-6.325A6.044 6.044 0 0 1 3.277.652C4.56 0 6.238 0 9.602 0h4.796c3.364 0 5.043 0 6.325.652a6.044 6.044 0 0 1 2.625 2.625C24 4.56 24 6.238 24 9.602v4.796c0 3.364 0 5.043-.652 6.325a6.044 6.044 0 0 1-2.625 2.625C19.44 24 17.762 24 14.398 24H9.602c-3.364 0-5.043 0-6.325-.652a6.044 6.044 0 0 1-2.625-2.625C0 19.44 0 17.762 0 14.398Z"
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
export class SvgLunacyIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
