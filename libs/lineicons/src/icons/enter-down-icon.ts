import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-enter-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0781 13.25C12.301 13.25 12.5012 13.1528 12.6386 12.9984L16.6083 9.03122C16.9013 8.73842 16.9014 8.26354 16.6086 7.97056C16.3158 7.67757 15.841 7.67742 15.548 7.97022L12.8281 10.6883L12.8281 4.75C12.8281 4.33579 12.4923 4 12.0781 4C11.6639 4 11.3281 4.33579 11.3281 4.75L11.3281 10.6882L8.60827 7.9702C8.31527 7.67741 7.8404 7.67758 7.54761 7.97057C7.25482 8.26357 7.25498 8.73844 7.54798 9.03123L11.5157 12.9962C11.6531 13.1518 11.8541 13.25 12.0781 13.25Z"
      fill="#323544"
    />
    <svg:path
      d="M22.0781 12C22.0781 10.7574 21.0708 9.75 19.8281 9.75H17.95C17.8691 9.87082 17.7753 9.98555 17.6686 10.0922L16.5101 11.25L19.8281 11.25C20.2423 11.25 20.5781 11.5858 20.5781 12V18C20.5781 18.4142 20.2423 18.75 19.8281 18.75L4.32812 18.75C3.91391 18.75 3.57812 18.4142 3.57812 18L3.57812 12C3.57812 11.5858 3.91391 11.25 4.32812 11.25L7.64624 11.25L6.48769 10.0923C6.38093 9.98558 6.28714 9.87084 6.2063 9.75L4.32812 9.75C3.08549 9.75 2.07812 10.7574 2.07812 12V18C2.07812 19.2426 3.08548 20.25 4.32812 20.25H19.8281C21.0708 20.25 22.0781 19.2426 22.0781 18V12Z"
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
export class SiEnterDownIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
