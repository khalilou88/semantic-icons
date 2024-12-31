import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-clock-hour-10-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-clock-hour-10"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5.401 9.576l.052 .021l.08 .026l.08 .019l.072 .011l.117 .007l.076 -.003l.135 -.02l.082 -.02l.103 -.039l.073 -.035l.078 -.046l.06 -.042l.08 -.069l.083 -.088l.062 -.083l.053 -.09l.031 -.064l.032 -.081l.03 -.109l.015 -.094l.007 -.117v-5a1 1 0 0 0 -2 0v3.131l-1.445 -.963a1 1 0 0 0 -1.317 .184l-.07 .093a1 1 0 0 0 .277 1.387l3.038 2.024z"
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
export class SvgClockHour10Icon {
  readonly class = input<string>('');
}
