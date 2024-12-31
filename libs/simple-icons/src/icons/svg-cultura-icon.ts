import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cultura-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cultura</title>
      <path
        d="M2.591 8.675C1.107 8.675 0 9.796 0 11.258c0 1.484 1.065 2.627 2.605 2.627 1.285 0 1.981-.817 1.981-.817l-.483-.66s-.59.639-1.463.639c-1.05 0-1.696-.845-1.697-1.803 0-.937.625-1.732 1.69-1.732.802 0 1.378.533 1.378.533l.44-.682s-.632-.69-1.86-.688zm6.778.084h-.895v3.911c0 1.037.618 1.165 1.115 1.165.149 0 .284-.021.284-.021v-.788s-.064.007-.135.007c-.235 0-.37-.1-.37-.497zm.877.433v.987h-.49v.717h.47v1.577c0 1.213 1 1.362 1.505 1.362.17 0 .276-.021.276-.021v-.788s-.064.014-.163.014c-.249 0-.716-.085-.716-.681v-1.463h1.118v1.612c0 .987.484 1.377 1.257 1.377.618 0 1.079-.376 1.257-.753h.013s-.013.114-.013.256v.411h.866v-3.62h-.902v1.661c0 .646-.362 1.221-1.015 1.221-.448 0-.56-.298-.56-.738V10.18h-2.022v-.987zm9.592.902c-.86 0-1.42.448-1.42.448l.34.645s.476-.347.994-.348c.398 0 .696.164.696.64v.049h-.12c-.59 0-2.145.078-2.144 1.228 0 .724.582 1.129 1.228 1.129.823 0 1.108-.639 1.1-.64h.015s-.015.114-.015.257v.298h.831v-2.264c0-.916-.554-1.442-1.505-1.442zm-1.715.035c-.553 0-.987.412-1.15.93h-.014a2.32 2.32 0 0 0 .014-.255v-.625h-.866V13.8h.902v-1.434c0-.214.02-.413.077-.59.171-.539.604-.759.987-.759.12 0 .214.014.214.014v-.887s-.079-.015-.164-.015zm-13.428.05v2.329c0 .987.482 1.377 1.257 1.377.618 0 1.08-.376 1.256-.753h.014s-.014.114-.014.256v.412h.866v-3.62h-.901v1.66c0 .646-.363 1.222-1.016 1.222-.448 0-.56-.299-.56-.739V10.18zm18.316 1.902c-.13 0-.277.015-.473.05a.164.164 0 0 0-.104.064.327.327 0 0 0-.046.102.165.165 0 0 0-.007.049.12.12 0 0 0 .04.092.116.116 0 0 0 .08.027.364.364 0 0 0 .048-.003s.065-.007.174-.013l.001.018c.003.042.007.102.007.177 0 .367-.081 1.078-.627 1.607-.443.43-.91.642-1.499.675a2.99 2.99 0 0 1-1.714-.431c-.575-.349-.948-.823-1.131-1.042-.028-.034-.05-.063-.073-.086-.021-.022-.042-.048-.086-.05a.078.078 0 0 0-.055.021.52.52 0 0 0-.099.15.507.507 0 0 0-.058.197v.004c.002.125 0 .588.39.973a1.9 1.9 0 0 0 .452.328c.14.072.248.11.308.115h.01a.087.087 0 0 0 .075-.041.14.14 0 0 0 .017-.07c-.002-.092-.052-.206-.052-.209l-.01-.022-.054-.017a1.621 1.621 0 0 1-.41-.234 1.227 1.227 0 0 1-.43-.681c.268.34.708.776 1.073.98.453.258 1.103.515 1.802.514a2.548 2.548 0 0 0 1.065-.225 2.67 2.67 0 0 0 1.236-1.069c.342-.543.384-1.18.384-1.472v-.088c.08.031.223.11.34.3.001 0 .026.044.07.062a.13.13 0 0 0 .05.008.226.226 0 0 0 .09-.021.513.513 0 0 0 .128-.088c.04-.038.076-.084.077-.148a.124.124 0 0 0-.012-.055c-.096-.19-.335-.358-.65-.416a1.778 1.778 0 0 0-.328-.032zm-2.712.065h.157v.085c0 .44-.342.95-.817.95-.369 0-.547-.226-.547-.467 0-.504.746-.568 1.207-.568z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCulturaIcon {
  readonly class = input<string>('');
}
