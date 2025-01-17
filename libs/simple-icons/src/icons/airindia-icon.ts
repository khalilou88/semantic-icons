import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-airindia-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Air India</svg:title>
    <svg:path
      d="M8.483.001C6.247.043 4.102 1.018 2.092 2.898c.141-.065-.545.44-1.637 1.676.013.006-.009.017-.013.025 0 0 .014.037.14-.064.75-.61 3.198-2.893 9.86.101a276.52 276.52 0 0 0 6.42 2.78s1.027 3.236 2.207 6.637c2.398 6.89-.087 9.135-.76 9.82-.102.114-.064.127-.064.127a16.746 16.746 0 0 0 2.385-2.08c1.624-1.637 2.588-3.428 2.855-5.344.254-1.878-.203-3.5-.584-4.566-.266-.75-.481-1.346-.672-1.88-.862-2.423-1.028-2.867-1.625-5.29l-.203-.8c-.023-.003.009-.016.014-.025l-.787-.254c-2.386-.774-2.804-.964-5.165-2.017-.52-.229-1.103-.496-1.826-.813-.85-.368-2.146-.875-3.707-.926a8.027 8.027 0 0 0-.447-.004Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAirindiaIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DA0E29');
}
