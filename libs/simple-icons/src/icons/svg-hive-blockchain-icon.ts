import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hive-blockchain-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hive</title>
      <path
        d="M6.076 1.637a.103.103 0 00-.09.05L.014 11.95a.102.102 0 000 .104l6.039 10.26c.04.068.14.068.18 0l5.972-10.262a.102.102 0 00-.002-.104L6.166 1.687a.103.103 0 00-.09-.05zm2.863 0c-.079 0-.13.085-.09.154l5.186 8.967a.105.105 0 00.09.053h3.117c.08 0 .13-.088.09-.157l-5.186-8.966a.104.104 0 00-.09-.051H8.94zm5.891 0a.102.102 0 00-.088.154L20.656 12l-5.914 10.209a.102.102 0 00.088.154h3.123a.1.1 0 00.088-.05l5.945-10.262a.1.1 0 000-.102L18.041 1.688a.1.1 0 00-.088-.051H14.83zm-.79 11.7a.1.1 0 00-.089.052l-5.101 8.82c-.04.069.01.154.09.154h3.117a.104.104 0 00.09-.05l5.1-8.82a.103.103 0 00-.09-.155h-3.118z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHiveBlockchainIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
