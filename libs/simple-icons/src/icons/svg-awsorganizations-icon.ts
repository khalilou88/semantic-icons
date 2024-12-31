import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-awsorganizations-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>AWS Organizations</title>
      <path
        d="M24 18.714v4.8c0 .288-.192.48-.48.48h-4.8c-.288 0-.48-.192-.48-.48v-4.8c0-.288.192-.48.48-.48h1.92v-1.92h-8.16v1.92h1.92c.288 0 .48.192.48.48v4.8c0 .288-.192.48-.48.48H9.6c-.288 0-.48-.192-.48-.48v-4.8c0-.288.192-.48.48-.48h1.92v-1.92H3.36v1.92h1.92c.288 0 .48.192.48.48v4.8c0 .288-.192.48-.48.48H.48c-.288 0-.48-.192-.48-.48v-4.8c0-.288.192-.48.48-.48H2.4v-2.4c0-.288.192-.48.48-.48h8.64v-1.44h.96v1.44h8.64c.288 0 .48.192.48.48v2.4h1.92c.288 0 .48.192.48.48zm-13.92 4.32h3.84v-3.84h-3.84zm-9.12 0H4.8v-3.84H.96Zm18.24 0h3.84v-3.84H19.2ZM6.24 9.642V3.546c0-.192.096-.336.24-.432L11.76.042c.144-.048.336-.048.48 0l5.28 3.072c.144.096.24.24.24.432v6.096c0 .144-.096.288-.24.384l-5.28 3.072q-.096.048-.24.048t-.24-.048l-5.28-3.072c-.144-.096-.24-.24-.24-.384Zm10.56-.288V4.362l-4.32 2.496v4.992zm-9.6 0 4.32 2.496V6.858L7.2 4.362Zm.48-5.808L12 5.994l4.32-2.448L12 1.05Z"
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
export class SvgAwsorganizationsIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
