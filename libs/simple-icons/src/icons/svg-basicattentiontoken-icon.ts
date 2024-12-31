import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-basicattentiontoken-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Basic Attention Token</title>
      <path
        d="m23.917 21.886.062-.124v-.042c0-.041.021-.083.021-.103v-.042c0-.041 0-.103-.02-.145l-.063-.124v-.021L12.54 2.135A.618.618 0 0 0 12 1.824c-.228 0-.415.124-.539.31L.083 21.265v.021l-.062.124C0 21.451 0 21.513 0 21.554v.042c0 .041 0 .083.02.103v.042c.021.041.021.083.063.124l.02.021c.021.041.042.083.084.104l.062.062c.02.02.041.041.062.041.02.021.062.021.083.042.02 0 .041.02.062.02.062.021.104.021.166.021h22.736c.062 0 .103 0 .165-.02.021 0 .042-.021.063-.021.041-.021.062-.021.103-.042.02-.02.042-.02.062-.041l.062-.062a.364.364 0 0 0 .083-.104h.021ZM12 11.316l3.627 5.845H8.373L12 11.316Zm-.622-1.347-4.56 7.357-4.455 2.55 9.015-15.15v5.243ZM7.42 18.425h9.14l4.456 2.55H2.964l4.456-2.55Zm9.761-1.099-4.56-7.357V4.725l9.016 15.15-4.456-2.549Z"
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
export class SvgBasicattentiontokenIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
