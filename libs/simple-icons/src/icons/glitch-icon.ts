import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-glitch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Glitch</svg:title>
    <svg:path
      d="M9.146 2.393c-.618 0-1.794 1.61-1.794 1.61s-.453 0-1.803.07c-1.35.07-2.553.67-4.159 1.934C-.216 7.27.011 8.537.011 8.537s1.498.507 1.498.781c0 .275-1.311.6-1.311.6.845 1.081 3.467 2.09 4.13 2.09h.524c-1.086.214-2.136.804-3.462 1.847-1.606 1.264-1.379 2.53-1.379 2.53s1.498.507 1.498.781c0 .275-1.311.6-1.311.6.845 1.081 3.467 2.09 4.13 2.09.635 0 1.079.018 1.882-.132.06.134.686 1.461 1.965 1.736 1.347.29 2.092.062 2.092.062s.067-.595-.24-1.189c1.17.115 2.495.145 3.792-.052 3.603-.547 5.382-1.413 5.963-1.528.582-.115 3.904 1.476 4.106 1.104.203-.373-.73-1.188-.295-2.288.434-1.1-.534-1.827.003-2.705.537-.879.43-2.219.292-2.29-.295-.15-3.423 1.407-4.106 1.28-1.686-.311-1.377-.513-3.647-1.027-.907-.206-.781-.084-.982-.236-.134-.102-.265-.116-.455-.306 3.015-.543 4.552-1.275 5.084-1.38.582-.116 3.904 1.476 4.106 1.103.202-.372-.73-1.187-.295-2.288.434-1.1-.534-1.826.003-2.705.537-.878.43-2.218.292-2.289-.295-.151-3.423 1.407-4.106 1.28-1.686-.312-1.377-.513-3.647-1.027-.907-.206-.781-.084-.982-.236-.2-.152-.39-.106-.782-.74-.392-.635-4.916-1.61-5.225-1.61zM8.09 5.158l.04.002.111.006.397.02a286.477 286.477 0 0 1 1.59.088c.348.02.64.038.865.054.861.06 2.172.26 3.177.464 1.556.315 2.82.778 4.81 1.673l.677.305c.131.059.195.228.143.377-.052.15-.201.222-.333.163a663.41 663.41 0 0 0-.675-.305c-1.962-.881-3.198-1.335-4.711-1.64-.988-.2-2.28-.397-3.12-.457a76.718 76.718 0 0 0-.859-.054l-.384-.022c-.383-.021-.793-.044-1.203-.065l-.126-.006a6.79 6.79 0 0 1 .339 1.187c.02.11.035.216.045.32.034.336-.028.816-.162 1.42-.044.2-.096.409-.153.624a21.303 21.303 0 0 1-.29.995l-.02.064-.008.023c-.05.15-.198.226-.33.17-.133-.057-.2-.225-.15-.375l.007-.02a11.841 11.841 0 0 0 .089-.283c.072-.236.144-.487.212-.741.055-.208.104-.408.146-.599.12-.54.175-.966.15-1.213a3.436 3.436 0 0 0-.038-.269 5.829 5.829 0 0 0-.21-.796 8.1 8.1 0 0 0-.264-.685c-.091-.199.041-.435.238-.425zm-1.653.17c.066.002.13.033.179.091a4.758 4.758 0 0 1 .417.627c.224.404.374.816.415 1.221.023.231.008.49-.038.771-.044.27-.115.555-.206.845a8.216 8.216 0 0 1-.25.688c-.063.144-.216.203-.343.132-.127-.07-.18-.245-.117-.389l.018-.044a7.595 7.595 0 0 0 .21-.582c.082-.263.146-.518.185-.755a2.42 2.42 0 0 0 .032-.6c-.03-.306-.153-.64-.34-.978a4.176 4.176 0 0 0-.356-.538.319.319 0 0 1 .01-.41.239.239 0 0 1 .184-.08zm-3.042.97c.62 0 1.122.57 1.122 1.272 0 .704-.503 1.273-1.122 1.273-.555 0-1.016-.457-1.106-1.058.077.452.428.793.849.793.477 0 .864-.44.864-.981 0-.542-.387-.981-.864-.981-.474 0-.86.432-.865.968V7.57c0-.703.502-1.273 1.122-1.273zM2.88 7.622a.234.265 0 0 1 .233.266.234.265 0 0 1-.233.265.234.265 0 0 1-.234-.265.234.265 0 0 1 .234-.266zm3.329 4.253l.006.013-.115.005.109-.018zm1.88 1.13l.04.003.111.005.397.02a286.463 286.463 0 0 1 1.59.088c.348.02.64.039.865.055.861.06 2.172.26 3.177.463 1.556.315 2.82.778 4.81 1.673l.677.305c.131.06.195.228.143.377-.052.15-.201.222-.333.163a663.41 663.41 0 0 0-.675-.305c-1.962-.881-3.198-1.334-4.711-1.64-.988-.2-2.28-.397-3.12-.456a76.718 76.718 0 0 0-1.243-.077l-1.203-.065-.126-.006a6.79 6.79 0 0 1 .339 1.187c.02.11.035.217.045.32.034.336-.028.817-.162 1.42-.044.2-.096.41-.153.625a21.303 21.303 0 0 1-.31 1.058l-.008.023c-.05.15-.198.226-.33.17-.133-.057-.2-.224-.15-.375l.007-.02a11.841 11.841 0 0 0 .089-.283c.072-.236.144-.487.212-.74.055-.208.104-.409.146-.6.12-.539.175-.966.15-1.213a3.436 3.436 0 0 0-.038-.268 5.829 5.829 0 0 0-.21-.796 8.1 8.1 0 0 0-.264-.686c-.091-.198.041-.434.238-.424zm-1.653.17c.066.002.13.033.179.091a4.758 4.758 0 0 1 .417.627c.224.405.374.816.415 1.222.023.23.008.489-.038.77-.044.27-.115.555-.206.845a8.215 8.215 0 0 1-.25.688c-.063.144-.216.204-.343.133-.127-.071-.18-.246-.117-.39a6.083 6.083 0 0 0 .07-.173 7.59 7.59 0 0 0 .158-.453c.082-.262.146-.518.185-.755a2.42 2.42 0 0 0 .032-.6c-.03-.305-.153-.64-.34-.978a4.176 4.176 0 0 0-.356-.537.319.319 0 0 1 .01-.411.239.239 0 0 1 .184-.079zm-3.042.97c.62 0 1.122.57 1.122 1.273s-.503 1.273-1.122 1.273c-.555 0-1.016-.458-1.106-1.058.077.451.428.792.849.792.477 0 .864-.439.864-.98 0-.543-.387-.982-.864-.982-.474 0-.86.433-.865.969v-.014c0-.703.502-1.273 1.122-1.273zm-.514 1.326a.234.265 0 0 1 .233.265.234.265 0 0 1-.233.265.234.265 0 0 1-.234-.265.234.265 0 0 1 .234-.265z"
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
export class SiGlitchIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3333FF');
}
