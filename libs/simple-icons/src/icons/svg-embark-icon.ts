import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-embark-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Embark</title>
      <path
        d="M3.658 16.662v-6.644C9.197 10.017 13.687 5.533 13.69 0h6.653c-.003 9.202-7.472 16.662-16.685 16.662ZM3.656 24v-6.672h16.689V24H3.657"
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
export class SvgEmbarkIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
