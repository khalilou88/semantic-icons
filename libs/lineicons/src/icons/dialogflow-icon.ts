import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dialogflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0004 12.0527L3.93458 8.01977V14.8354C3.93383 14.9891 4.00457 15.1344 4.12607 15.2286L8.80425 18.0013C8.85715 18.0294 8.90125 18.0715 8.93154 18.1232C8.96183 18.1749 8.97712 18.234 8.97573 18.2938V21.8327C8.97725 21.8943 9.01173 21.9503 9.06573 21.9795C9.11973 22.0087 9.18547 22.0065 9.23773 21.974L19.8343 15.2286C19.9785 15.1361 20.0658 14.9766 20.0663 14.8051V8.01977L12.0004 12.0527Z"
      fill="#323544"
    />
    <svg:path
      d="M12.0004 10.0362L20.0663 6.00329L12.1214 2.03088C12.0843 2.01062 12.0427 2 12.0004 2C11.9582 2 11.9165 2.01062 11.8794 2.03088L3.93457 6.00329L12.0004 10.0362Z"
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
export class SiDialogflowIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
