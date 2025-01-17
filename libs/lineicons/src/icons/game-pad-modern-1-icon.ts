import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-game-pad-modern-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.30277 7.73899C9.71699 7.73899 10.0528 8.07477 10.0528 8.48899V9.49289H11.0577C11.4719 9.49289 11.8077 9.82868 11.8077 10.2429C11.8077 10.6571 11.4719 10.9929 11.0577 10.9929H10.0528V11.9998C10.0528 12.414 9.71699 12.7498 9.30277 12.7498C8.88856 12.7498 8.55277 12.414 8.55277 11.9998V10.9929H7.54691C7.1327 10.9929 6.79691 10.6571 6.79691 10.2429C6.79691 9.82868 7.1327 9.49289 7.54691 9.49289H8.55277V8.48899C8.55277 8.07477 8.88856 7.73899 9.30277 7.73899Z"
      fill="#323544"
    />
    <svg:path
      d="M14.4786 11.7458C14.4786 11.3316 14.8143 10.9958 15.2286 10.9958H16.1063C16.5205 10.9958 16.8563 11.3316 16.8563 11.7458C16.8563 12.16 16.5205 12.4958 16.1063 12.4958H15.2286C14.8143 12.4958 14.4786 12.16 14.4786 11.7458Z"
      fill="#323544"
    />
    <svg:path
      d="M15.2286 7.98899C14.8143 7.98899 14.4786 8.32477 14.4786 8.73899C14.4786 9.1532 14.8143 9.48899 15.2286 9.48899H16.1063C16.5205 9.48899 16.8563 9.1532 16.8563 8.73899C16.8563 8.32477 16.5205 7.98899 16.1063 7.98899H15.2286Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.40196 5.01796C10.0998 4.33386 13.8918 4.33386 17.5897 5.01796L19.1553 5.30761C20.1235 5.48672 20.8627 6.2745 20.98 7.25207L22.1472 16.9817C22.3078 18.321 21.2621 19.4997 19.9132 19.4997H17.8162C17.0356 19.4997 16.3108 19.0951 15.901 18.4307L14.4675 16.106C14.3309 15.8845 14.0893 15.7497 13.8291 15.7497H10.1625C9.90231 15.7497 9.66071 15.8845 9.52413 16.106L8.09059 18.4307C7.68086 19.0951 6.95605 19.4997 6.17545 19.4997H4.07843C2.72954 19.4997 1.68378 18.321 1.84445 16.9817L3.01164 7.25207C3.12892 6.2745 3.86817 5.48672 4.83632 5.30761L6.40196 5.01796ZM17.3168 6.49293C13.7993 5.8422 10.1923 5.8422 6.67483 6.49293L5.10919 6.78258C4.78647 6.84228 4.54006 7.10488 4.50096 7.43073L3.33377 17.1603C3.28022 17.6068 3.6288 17.9997 4.07843 17.9997H6.17545C6.43565 17.9997 6.67726 17.8648 6.81383 17.6433L8.24738 15.3187C8.6571 14.6542 9.38192 14.2497 10.1625 14.2497H13.8291C14.6097 14.2497 15.3345 14.6542 15.7442 15.3187L17.1778 17.6433C17.3144 17.8648 17.556 17.9997 17.8162 17.9997H19.9132C20.3628 17.9997 20.7114 17.6068 20.6578 17.1603L19.4907 7.43073C19.4516 7.10488 19.2051 6.84228 18.8824 6.78258L17.3168 6.49293Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGamePadModern1Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
