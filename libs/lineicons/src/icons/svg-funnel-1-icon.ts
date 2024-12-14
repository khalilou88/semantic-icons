import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-funnel-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.0625 4.47852C4.0625 3.23587 5.06986 2.22852 6.3125 2.22852H17.5625C18.8051 2.22852 19.8125 3.23587 19.8125 4.47852V5.83904C19.8125 6.66156 19.5421 7.46126 19.0429 8.11497L14.7164 13.7806C14.6166 13.9113 14.5625 14.0712 14.5625 14.2358V20.474C14.5625 21.8343 13.0786 22.6745 11.9121 21.9747L10.4049 21.0703C9.72717 20.6637 9.3125 19.9313 9.3125 19.1409V14.2358C9.3125 14.0712 9.25842 13.9113 9.15858 13.7806L4.83212 8.11497C4.33292 7.46126 4.0625 6.66156 4.0625 5.83904V4.47852ZM6.3125 3.72852C5.89829 3.72852 5.5625 4.0643 5.5625 4.47852V5.83904C5.5625 6.33255 5.72475 6.81237 6.02427 7.2046L10.3507 12.8702C10.6502 13.2624 10.8125 13.7422 10.8125 14.2358V19.1409C10.8125 19.4044 10.9507 19.6485 11.1766 19.7841L12.6839 20.6884C12.8505 20.7884 13.0625 20.6684 13.0625 20.474V14.2358C13.0625 13.7422 13.2248 13.2624 13.5243 12.8702L17.8507 7.2046C18.1502 6.81237 18.3125 6.33255 18.3125 5.83904V4.47852C18.3125 4.0643 17.9767 3.72852 17.5625 3.72852H6.3125Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFunnel1Icon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
