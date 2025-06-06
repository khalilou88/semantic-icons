import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-spellcheck-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.2503 4.5C9.54669 4.5 9.81528 4.67455 9.93566 4.9454L15.9355 18.4454C16.1038 18.8239 15.9333 19.2671 15.5548 19.4354C15.1763 19.6036 14.7331 19.4331 14.5648 19.0546L12.8371 15.1672L5.6633 15.167L3.93554 19.0543C3.76731 19.4328 3.32408 19.6033 2.94557 19.4351C2.56706 19.2668 2.3966 18.8236 2.56483 18.4451L8.56494 4.94539C8.68532 4.67454 8.95391 4.5 9.2503 4.5ZM9.25028 7.09664L6.32998 13.6671L12.1705 13.6672L9.25028 7.09664Z"
      fill="#323544"
    />
    <svg:path
      d="M22.2807 5.78036C22.5736 5.48747 22.5736 5.0126 22.2807 4.7197C21.9878 4.42681 21.5129 4.42681 21.22 4.7197L17.7385 8.20123L16.3272 6.78994C16.0343 6.49705 15.5594 6.49705 15.2666 6.78994C14.9737 7.08284 14.9737 7.55771 15.2666 7.85061L17.2082 9.79222C17.5011 10.0851 17.976 10.0851 18.2689 9.79222L22.2807 5.78036Z"
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
export class SiSpellcheckIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
