import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-chat-voice-ai-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM12 2C6.47715 2 2 6.47715 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711L2 22H12C17.5228 22 22 17.5228 22 12C22 11.5975 21.9762 11.2002 21.9298 10.8094L19.9437 11.0452C19.9809 11.3579 20 11.6765 20 12C20 16.4183 16.4183 20 12 20H6.82843L7.75736 19.0711L6.34315 17.6569C4.85124 16.1649 4 14.1524 4 12C4 7.58172 7.58172 4 12 4C12.6919 4 13.3618 4.0876 14 4.25179L14.4983 2.31487C13.6987 2.10914 12.8614 2 12 2ZM9 9H7V15H9V9ZM17 9H15V15H17V9ZM13 6H11V18H13V6Z"
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
export class SiChatVoiceAiLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
