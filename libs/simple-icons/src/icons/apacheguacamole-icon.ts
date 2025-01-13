import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-apacheguacamole-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Apache Guacamole</svg:title>
    <svg:path
      d="M11.324 23.984c-.7-.055-1.581-.198-2.236-.363a11.942 11.942 0 0 1-7.814-6.303c-.61-1.239-.967-2.383-1.127-3.61a9.074 9.074 0 0 0-.102-.639c-.058-.25-.058-1.891 0-2.142.024-.103.07-.39.102-.638.16-1.228.517-2.372 1.127-3.611A11.799 11.799 0 0 1 6.68 1.272C7.919.663 9.063.305 10.29.145c.248-.032.536-.078.639-.102.25-.057 1.892-.057 2.142 0 .103.024.391.07.638.102 1.228.16 2.372.518 3.611 1.127a11.799 11.799 0 0 1 5.406 5.406c.61 1.239.967 2.383 1.127 3.611.032.248.078.535.102.638.026.113.043.541.043 1.071 0 .531-.017.958-.043 1.071-.024.103-.07.391-.102.639-.16 1.227-.517 2.371-1.127 3.61a11.799 11.799 0 0 1-5.406 5.406c-1.239.61-2.383.967-3.611 1.127-.247.033-.526.075-.619.094-.234.049-1.334.073-1.766.039Zm1.551-4.36a10.307 10.307 0 0 0 1.868-.248c2.176-.486 3.95-1.695 5.122-3.492.398-.61.405-.712.027-.416-1.135.891-3.013 1.632-4.999 1.973-1.082.186-1.423.211-2.837.211-1.058 0-1.464-.015-1.865-.065-.998-.127-2.116-.366-2.944-.631-1.252-.4-2.535-1.056-3.199-1.637-.212-.186-.314-.243-.314-.177 0 .048.269.554.426.801 1.435 2.269 3.908 3.516 7.295 3.679l.676.034c.042.003.377-.011.744-.032Zm.233-3.907c1.801-.132 3.472-.507 5.054-1.134 1.175-.466 2.374-1.167 2.867-1.675.167-.172.211-.316.345-1.119.05-.301.134-.672.187-.826.076-.219.105-.404.135-.871.058-.893.007-1.261-.237-1.694-.139-.247-.469-.607-.64-.7l-.129-.069-.221.161c-.317.229-.326.246-.243.41.133.261.2.572.199.923-.003.631-.222 1.091-.798 1.675-2.165 2.198-7.956 2.956-12.17 1.594-1.933-.625-3.219-1.592-3.559-2.676-.085-.27-.095-.358-.08-.676.02-.451.088-.613.511-1.239.166-.244.353-.576.418-.739.065-.163.142-.343.172-.402.086-.166.006-.167-.293-.002-.631.35-1.294.878-1.644 1.31-.469.579-.591 1.01-.547 1.934.027.562.087.854.225 1.094.066.116.096.24.113.476.042.551.138 1.102.215 1.228.1.164.616.593 1.066.886 2.328 1.516 5.915 2.36 9.054 2.131Zm-.056-3.569c1.745-.108 3.299-.463 4.478-1.023.594-.283.934-.515 1.331-.909.414-.413.573-.703.6-1.102.019-.282-.072-.621-.172-.638-.045-.008-.901.459-1.53.835-.067.039-.13.063-.142.051a1.993 1.993 0 0 1-.072-.336c-.071-.44-.135-.573-.345-.718-.324-.225-.391-.298-.523-.572-.116-.241-.149-.28-.288-.334-.26-.102-.557-.299-.557-.368 0-.072.239-.753.39-1.112a3.34 3.34 0 0 0 .099-.249c0-.036-.833-.632-.956-.683-.16-.067-.723-.128-1.205-.13a3.688 3.688 0 0 1-1.258-.206c-.631-.208-.665-.211-1.217-.13-.435.063-.514.087-.698.206-.49.315-.879.428-1.478.43a4.01 4.01 0 0 0-.654.059c-.511.106-.66.182-1.031.528-.469.439-.777.645-1.337.897-.589.265-.655.311-.741.515-.199.469-.293.645-.522.976-.367.53-.453.736-.424 1.016.072.69.818 1.448 1.947 1.981 1.638.772 4.02 1.156 6.305 1.016Zm6.174-4.675c.945-.578 1.504-1.038 1.672-1.377.087-.177.076-.241-.075-.425-.373-.452-1.844-1.32-2.491-1.47-.299-.069-.359-.045-.539.217-.277.403-.946 1.948-.946 2.183 0 .032.084.103.187.159.164.09.204.137.315.37.107.226.157.286.319.387.12.074.235.187.304.3.185.297.165.291.445.136.139-.077.503-.292.809-.48Z"
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
export class SiApacheguacamoleIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#578B34');
}
