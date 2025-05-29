import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-supabase-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.6435 21.6677C13.1325 22.3111 12.0966 21.9586 12.0843 21.137L11.9042 9.12064H19.9841C21.4475 9.12064 22.2637 10.811 21.3537 11.9571L13.6435 21.6677Z"
      fill="#323544"
    />
    <svg:path
      d="M13.6435 21.6677C13.1325 22.3111 12.0966 21.9586 12.0843 21.137L11.9042 9.12064H19.9841C21.4475 9.12064 22.2637 10.811 21.3537 11.9571L13.6435 21.6677Z"
      fill="#323544"
    />
    <svg:path
      d="M10.3574 2.33232C10.8684 1.68882 11.9044 2.04141 11.9167 2.86299L11.9956 14.8794H4.01686C2.55334 14.8794 1.73711 13.189 2.64717 12.0429L10.3574 2.33232Z"
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
export class SiSupabaseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
