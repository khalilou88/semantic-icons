import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-meteor-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Meteor</title>
      <path
        d="M0 .234l21.912 20.537s.412.575-.124 1.151c-.535.576-1.236.083-1.236.083L0 .234zm6.508 2.058l17.01 15.638s.413.576-.123 1.152c-.534.576-1.235.083-1.235.083L6.508 2.292zM1.936 6.696l17.01 15.638s.412.576-.123 1.152-1.235.082-1.235.082L1.936 6.696zm10.073-2.635l11.886 10.927s.287.401-.087.805-.863.058-.863.058L12.009 4.061zm-8.567 7.737l11.886 10.926s.285.4-.088.803c-.375.403-.863.059-.863.059L3.442 11.798zm14.187-5.185l5.426 4.955s.142.188-.044.377c-.185.188-.428.027-.428.027l-4.954-5.358v-.001zM6.178 17.231l5.425 4.956s.144.188-.042.377-.427.026-.427.026l-4.956-5.359z"
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
export class SvgMeteorIcon {
  readonly class = input<string>('');
}
