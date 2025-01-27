import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-renovate-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Renovate</svg:title>
    <svg:path
      d="M7.598 0A1.7 1.7 0 0 0 6.37.465a1.71 1.71 0 0 0-.072 2.421l.002.002L8.91 5.65a.623.623 0 0 1-.025.891.625.625 0 0 1-.89-.027l-1.26-1.332a1.727 1.727 0 0 0-2.428-.073 1.71 1.71 0 0 0-.075 2.422v.002l1.88 1.988a.626.626 0 0 1-.026.891.623.623 0 0 1-.89-.027h-.003l-.685-.729-.014-.02a1.73 1.73 0 0 0-2.427-.073 1.71 1.71 0 0 0-.074 2.423l2.253 2.444.006.008.352.363q.004-.06.013-.117a1.75 1.75 0 0 0 .488 1.47l.141.143 1.29 1.28c.68.68 1.795.68 2.474 0l.523-.522 1.588-1.582 1.102-1.09 1.77-1.766 2.532-2.52v-.003a1.745 1.745 0 0 0 0-2.463l-.443-.442a1.295 1.295 0 0 1 1.576.202l1.057 1.054c.904.905.905 2.353.002 3.248v.002l-3.496 3.48h-.002c-.56.56-.56 1.477.004 2.03l.504.498-.676.674a.51.51 0 0 0-.031.69l.15.185h.008l2.488-2.49-.184-.15a.52.52 0 0 0-.357-.116.53.53 0 0 0-.334.15l-.648.647-.51-.504h-.002a.84.84 0 0 1 .004-1.201l3.494-3.48a2.88 2.88 0 0 0 .002-4.075l-1.06-1.056a1.88 1.88 0 0 0-1.33-.55c-.38 0-.76.116-1.083.343l-.564-.563a1.74 1.74 0 0 0-1.237-.508v-.002a2 2 0 0 0-.205.014l-.937-1.03-.008-.005-1.28-1.358L8.8.538A1.73 1.73 0 0 0 7.6.002ZM7.58.635a1.08 1.08 0 0 1 .756.344l2.63 2.778 1.278 1.353.744.82a1.7 1.7 0 0 0-.367.278l-3.91 3.895-3.606 3.587a1.8 1.8 0 0 0-.308.426l.01-.021-.094-.098-2.253-2.443-.004-.002a1.063 1.063 0 0 1 .042-1.522l.004-.002a1.08 1.08 0 0 1 1.527.041l.002.012.701.74a1.27 1.27 0 0 0 1.79.057 1.27 1.27 0 0 0 .056-1.79h-.002l-1.88-1.989v-.002a1.06 1.06 0 0 1 .042-1.522 1.08 1.08 0 0 1 1.533.045l1.256 1.33a1.27 1.27 0 0 0 1.791.057 1.27 1.27 0 0 0 .055-1.79h-.002l-2.61-2.763a1.06 1.06 0 0 1 .042-1.52A1.08 1.08 0 0 1 7.58.635m6.277 5.696c.143 0 .285.03.418.084a1.1 1.1 0 0 0-.418-.084m.44.096q.19.08.346.232a1.1 1.1 0 0 0-.346-.232m-9.52 7.732a1.8 1.8 0 0 0-.154.473 1.7 1.7 0 0 1 .154-.473m13.397 3.037-2.557 2.557 2.848 3.435q.065.075.14.15c.875.873 2.317.89 3.206 0a2.25 2.25 0 0 0-.152-3.33z"
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
export class SiRenovateIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#308BE3');
}
