import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-slice-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.802 4.22117C19.9563 3.3755 18.5852 3.3755 17.7395 4.22117L2.24147 19.7192L2.24232 19.7201C2.02847 19.9346 1.96461 20.2567 2.08055 20.5366C2.19664 20.8168 2.47011 20.9996 2.77346 20.9996H10.8979C12.1406 20.9996 13.1479 19.9922 13.1479 18.7495L13.1478 14.9378L20.802 7.28361C21.6476 6.43794 21.6476 5.06684 20.802 4.22117ZM13.1477 12.8165L13.1477 10.9343L18.8002 5.28183C19.0601 5.02194 19.4814 5.02194 19.7413 5.28183C20.0012 5.54171 20.0012 5.96307 19.7413 6.22295L13.1477 12.8165ZM4.58412 19.4996L11.6477 12.436L11.6479 18.7496C11.6479 19.1638 11.3121 19.4996 10.8979 19.4996H4.58412Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSlice2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
