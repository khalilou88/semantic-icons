import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-emoji-nature-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="18" cy="6" r="1" opacity=".3" />
    <svg:path
      d="M21.94 4.88c-.19-.55-.75-.92-1.36-.88h-.98l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-.98a1.32 1.32 0 0 0-1.35.88c-.19.56.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.5.37 1.17.35 1.64-.06l.81-.7.81.7c.47.4 1.15.43 1.64.06.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48zM18 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
    <svg:path
      d="M6.1 17.9c.53.53 1.27.69 1.94.5-.03-1.19.35-2.37.92-3.36-1 .57-2.17.95-3.36.92-.19.67-.02 1.41.5 1.94zm3.55-6.35 1.61.66c.25.1.44.3.54.54l.66 1.61c.75-.78.74-2.01-.03-2.78-.77-.78-2-.78-2.78-.03z"
      opacity=".3"
    />
    <svg:path
      d="M14.86 12c-.17-.67-.5-1.31-1.03-1.84-.52-.52-1.16-.85-1.83-1.02V7h-1v2c-1.01.01-2.02.39-2.79 1.16l-.56.56-1.53-.63c-1.52-.63-3.27.1-3.89 1.62a2.98 2.98 0 0 0 1.44 3.8A3.97 3.97 0 0 0 4.7 19.3c1.03 1.03 2.48 1.36 3.79 1.03a2.98 2.98 0 0 0 3.8 1.44 2.98 2.98 0 0 0 1.62-3.89l-.63-1.53.56-.56C14.61 15.02 15 14.01 15 13h2v-1h-2.14zM4.58 13.8a.993.993 0 0 1-.54-1.3c.21-.51.79-.75 1.3-.54l2.92 1.2c-1.04.68-2.43 1.15-3.68.64zm3.46 4.6c-.67.19-1.41.02-1.94-.5-.53-.53-.69-1.27-.5-1.94 1.19.03 2.37-.35 3.36-.92-.57.99-.95 2.17-.92 3.36zm3.46 1.56a.993.993 0 0 1-1.3-.54c-.51-1.25-.04-2.64.64-3.67l1.2 2.92c.21.5-.03 1.09-.54 1.29zm.95-5.61-.66-1.61c-.1-.25-.3-.44-.54-.54l-1.61-.66a1.98 1.98 0 0 1 2.78.03c.78.77.78 2 .03 2.78z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEmojiNatureIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
