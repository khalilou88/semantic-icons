import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-codementor-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Codementor</title>
      <path
        d="M8.487 14.887c.39 0 .706.314.706.7a.703.703 0 0 1-.706.7H5.632a.703.703 0 0 1-.707-.7c0-.386.317-.7.707-.7zm.69-2.593c.39 0 .706.315.706.7a.703.703 0 0 1-.707.7H5.648a.703.703 0 0 1-.706-.7c0-.386.316-.7.706-.7zm3.864-3.46a2.109 2.109 0 0 1 2.118-2.099 2.109 2.109 0 0 1 2.118 2.1 2.115 2.115 0 0 1-2.118 2.103 2.116 2.116 0 0 1-2.118-2.104Zm6.259 6.559c.1.619-.378 1.18-1.005 1.178h-6.272a1.016 1.016 0 0 1-1.005-1.178c.315-1.942 1.391-3.509 2.796-4.13a2.768 2.768 0 0 0 2.69 0c1.405.621 2.482 2.19 2.796 4.13zm-8.712-4.29c-8.38 0-.147-.002-4.941-.002a.703.703 0 0 1-.707-.7c0-.386.317-.7.707-.7l4.941.001c.39 0 .707.314.706.701a.702.702 0 0 1-.706.7zm-4.94-2.594a.702.702 0 0 1-.707-.7c0-.386.317-.7.707-.7h4.94c.389 0 .705.313.705.7a.703.703 0 0 1-.706.699zm7.809 10.117a.658.658 0 0 0 .66-.654h7.06v-12.6H2.824v12.599h7.059c0 .361.295.654.66.654zM24 17.972v.957c0 .605-.496 1.096-1.106 1.096H1.106c-.61 0-1.106-.49-1.106-1.096v-.957h1.413V5.357c0-.763.623-1.382 1.394-1.382h18.387c.77 0 1.394.619 1.394 1.382v12.615Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCodementorIcon {
  readonly class = input<string>('');
}
