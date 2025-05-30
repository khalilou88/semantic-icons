import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pepper-hot-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.1076 3.02722c.7328-.91889 2.119-1.42653 3.3155-.63652 1.0296.67976 1.6636 2.15898.8437 3.43103l-1.1345 1.92424c.49.5379.8177 1.21684 1.0172 2.04053l.0026.01069.0023.01075c.1578.72086.0871 1.45746-.1496 2.19206H14.5v-2c0-.55228-.4477-1-1-1h-2.5594c.5551-.83927 1.1449-1.47688 1.7703-1.91901.9836-.6954 2.0299-.88485 3.0301-.63643.241.05985.4787.12994.7103.21464l1.104-1.87249c.0086-.01459.0176-.02895.0269-.04309.0543-.0822.0714-.17722.0369-.29792-.0378-.13197-.1376-.28012-.298-.38598-.0822-.05428-.1772-.07137-.2979-.03684-.132.03775-.2801.13762-.386.29795-.0855.12955-.2.23741-.3345.31504l-.0812.04692c-.4783.27614-1.0899.11227-1.3661-.36603-.2529-.43808-.1367-.98799.2522-1.28954ZM9.83662 11c-1.33245 2.5771-2.51227 3.9661-3.95291 5.2762l-.00417.0037c-.34799.3058-.73582.6466-1.15874 1.119-.95621.9127-1.14739 2.388-.33504 3.4923.76302 1.0372 2.14652 1.4429 3.29215.9596l.01259-.0054c1.55-.6791 3.9409-1.8247 5.2534-2.8182l.008-.0061.0079-.0062c2.0804-1.6416 3.7352-3.23 4.8173-4.7191.0713-.0982.1408-.1968.2082-.2958H13.5c-.5523 0-1-.4477-1-1v-2H9.83662Z"
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
export class SiPepperHotIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
