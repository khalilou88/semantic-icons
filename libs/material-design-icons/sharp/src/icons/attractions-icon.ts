import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-attractions-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.44 18.75c.37-.46.94-.75 1.57-.75s1.19.29 1.56.75c.39-.09.76-.21 1.12-.36l-1.42-3.18a3.522 3.522 0 0 1-2.56-.02l-1.43 3.19c.37.16.75.29 1.16.37zM5.16 10a7.06 7.06 0 0 0 .08 4c.63.05 1.22.4 1.56.99.33.57.35 1.23.11 1.79.27.27.56.53.87.76l1.52-3.39c-.47-.58-.75-1.32-.75-2.13 0-1.89 1.55-3.41 3.46-3.41s3.46 1.53 3.46 3.41c0 .82-.29 1.57-.78 2.16l1.5 3.35c.32-.24.62-.5.9-.79-.22-.55-.2-1.2.12-1.75.33-.57.9-.92 1.52-.99a7.025 7.025 0 0 0 .09-4.02c-.64-.04-1.26-.39-1.6-1-.36-.62-.35-1.36-.03-1.95-.91-.98-2.1-1.71-3.44-2.05C13.4 5.6 12.74 6 12.01 6s-1.39-.41-1.74-1.01a7.053 7.053 0 0 0-3.44 2.03c.33.6.35 1.35-.02 1.98-.36.62-.99.97-1.65 1zm-1.3-.42c-.78-.6-1.02-1.7-.51-2.58s1.58-1.23 2.49-.85a8.53 8.53 0 0 1 4.18-2.42c.13-.98.97-1.73 1.99-1.73s1.85.75 1.98 1.73c1.63.39 3.07 1.24 4.18 2.42a1.99 1.99 0 0 1 2.49.85c.51.88.27 1.98-.51 2.58.23.77.35 1.58.35 2.42s-.12 1.65-.35 2.42c.78.6 1.02 1.7.51 2.58s-1.58 1.23-2.49.85c-.4.43-.85.81-1.34 1.15l1.34 3h-1.86l-.97-2.17c-.43.18-.88.33-1.34.44-.14.98-.98 1.73-1.99 1.73s-1.85-.75-1.98-1.73c-.48-.12-.94-.27-1.38-.46L7.66 22H5.79l1.36-3.03a8.72 8.72 0 0 1-1.3-1.12c-.92.38-1.99.03-2.5-.85s-.27-1.98.51-2.58c-.24-.77-.35-1.58-.35-2.42s.11-1.65.35-2.42z"
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
export class SiAttractionsIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
