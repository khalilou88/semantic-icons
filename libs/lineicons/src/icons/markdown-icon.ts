import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-markdown-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.5161 5.87109H3.45161C2.67742 5.87109 2 6.51626 2 7.32271V16.7098C2 17.4517 2.64516 18.1292 3.45161 18.1292H20.5484C21.3226 18.1292 22 17.484 22 16.6775V7.25819C21.9677 6.484 21.3226 5.87109 20.5161 5.87109ZM21 16.7098C21 16.9679 20.7742 17.1937 20.5161 17.1937H3.45161C3.19355 17.1937 2.96774 16.9679 2.96774 16.7098V7.25819C2.96774 7.00013 3.19355 6.77432 3.45161 6.77432H20.5484C20.8065 6.77432 21.0323 7.00013 21.0323 7.25819V16.6775H21V16.7098Z"
      fill="#323544"
    />
    <svg:path
      d="M17.839 8.70976H15.9358V12.0646H13.9681L16.8713 15.2582L19.7422 12.0646H17.839V8.70976Z"
      fill="#323544"
    />
    <svg:path
      d="M8.70935 11.1291L6.80613 8.70976H4.87066V15.2582H6.80613V11.484L8.70935 13.8711L10.6126 11.484V15.2582H12.5803V8.70976H10.6126L8.70935 11.1291Z"
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
export class SiMarkdownIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
