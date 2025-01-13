import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scissors-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 14.1179L9.68347 16.4345C9.88726 16.9144 10 17.4423 10 17.9966C10 20.2058 8.20914 21.9966 6 21.9966C3.79086 21.9966 2 20.2058 2 17.9966C2 15.7875 3.79086 13.9966 6 13.9966C6.55427 13.9966 7.08222 14.1094 7.56215 14.3131L9.87868 11.9966L4.21142 6.32936C3.43037 5.54831 3.43037 4.28198 4.21142 3.50093L4.91852 2.79382L12 9.8753L19.0815 2.79382L19.7886 3.50093C20.5696 4.28198 20.5696 5.54831 19.7886 6.32936L14.1213 11.9966L16.4379 14.3131C16.9178 14.1094 17.4457 13.9966 18 13.9966C20.2091 13.9966 22 15.7875 22 17.9966C22 20.2058 20.2091 21.9966 18 21.9966C15.7909 21.9966 14 20.2058 14 17.9966C14 17.4423 14.1127 16.9144 14.3165 16.4345L12 14.1179ZM6 19.9966C7.10457 19.9966 8 19.1012 8 17.9966C8 16.892 7.10457 15.9966 6 15.9966C4.89543 15.9966 4 16.892 4 17.9966C4 19.1012 4.89543 19.9966 6 19.9966ZM18 19.9966C19.1046 19.9966 20 19.1012 20 17.9966C20 16.892 19.1046 15.9966 18 15.9966C16.8954 15.9966 16 16.892 16 17.9966C16 19.1012 16.8954 19.9966 18 19.9966Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScissors2FillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
