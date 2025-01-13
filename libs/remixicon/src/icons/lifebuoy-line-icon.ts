import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lifebuoy-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 17C11.355 17 10.7386 16.8779 10.1725 16.6555L7.93604 18.8923C9.12707 19.5961 10.5164 20 12 20C13.4836 20 14.8729 19.5961 16.064 18.8923L13.8275 16.6555C13.2614 16.8779 12.645 17 12 17ZM4 12C4 13.4836 4.40386 14.8729 5.10765 16.064L7.34451 13.8275C7.12213 13.2614 7 12.645 7 12C7 11.355 7.12213 10.7386 7.34451 10.1725L5.10765 7.93604C4.40386 9.12707 4 10.5164 4 12ZM18.8923 7.93604L16.6555 10.1725C16.8779 10.7386 17 11.355 17 12C17 12.645 16.8779 13.2614 16.6555 13.8275L18.8923 16.064C19.5961 14.8729 20 13.4836 20 12C20 10.5164 19.5961 9.12707 18.8923 7.93604ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM12 4C10.5164 4 9.12707 4.40386 7.93604 5.10765L10.1725 7.34451C10.7386 7.12213 11.355 7 12 7C12.645 7 13.2614 7.12213 13.8275 7.34451L16.064 5.10765C14.8729 4.40386 13.4836 4 12 4Z"
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
export class SiLifebuoyLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
