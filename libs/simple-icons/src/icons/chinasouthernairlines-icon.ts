import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-chinasouthernairlines-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>China Southern Airlines</svg:title>
    <svg:path
      d="M16.4269 9.8628v.6196c.3071-.003.5555.1004.5555.1004-.7588.2595-1.1804 1.0664-1.1804 1.8426v2.6228c-.0417.0354-.0665.0665-.0941.0985-.1116-.344-.4517-.7569-.8049-.9524v-2.029c0-.7272.5308-1.5219 1.2808-1.6708v-.6351c-.2426-.0558-.426-.275-.426-.5342a.549.549 0 0 1 .5493-.5516.5506.5506 0 0 1 .5526.5516c0 .2591-.1868.4847-.4328.5376m-3.0299-.0035v.6355c.7491.149 1.2828.9432 1.2828 1.6704v2.0295c-.3556.195-.6943.6079-.8049.9519-.03-.0316-.0548-.0631-.0946-.0985v-2.6228c0-.7913-.4216-1.583-1.1794-1.8422 0 0 .247-.1038.5516-.1004v-.6234a.55.55 0 0 1-.425-.5342c0-.3057.243-.5511.5497-.5511a.5506.5506 0 0 1 .5516.5511c0 .2596-.1848.4789-.4318.5342m1.5162-.4217l-.003.5948c.293.0393.555.244.6448.4861-.3478.2261-.6297.5691-.7656.9946-.1334-.4255-.4157-.7685-.7636-.9946.1096-.242.3532-.4468.6433-.486v-.5968a.5497.5497 0 0 1-.4264-.5357.5496.5496 0 0 1 .5497-.5516c.3046 0 .553.246.553.5516 0 .262-.1848.4828-.4322.5376m-.1209 7.5837c1.7156 0 2.1013-1.4385 2.1542-1.8053v-.4846c-.5313.132-1.0053.4133-1.327.8354-.114-.493-.426-.914-.8272-1.1867-.4036.2727-.716.6938-.832 1.1867-.3188-.422-.7952-.7035-1.3245-.8354v.4846c.0514.3668.439 1.8053 2.1565 1.8053m-4.2333-5.006c-.0068-.7307.4949-1.326 1.5195-1.326.6783 0 1.488.5682 1.488 2.0266v2.1628c-.294-.193-.7034-.3702-.9266-.3736v-2.0163c0-.7724-.5546-.998-.815-.998.1474.1349.2362.3018.2362.5245 0 .41-.3416.7496-.753.7496-.411 0-.7306-.3028-.749-.7496m8.4666 0c.0043-.7307-.4978-1.326-1.52-1.326-.6793 0-1.4905.5682-1.4905 2.0266v2.1628c.295-.193.704-.3702.9252-.3736v-2.0163c0-.7724.5575-.998.8151-.998-.146.1349-.2343.3018-.2343.5245 0 .41.3406.7496.7525.7496.4128 0 .7326-.3028.752-.7496M15.9702 10.03c-.263-.1286-.4473-.3973-.4473-.705 0-.4332.3517-.7864.784-.7864.4347 0 .7855.3532.7855.7865a.7812.7812 0 0 1-.4469.7068v.2203c.2431.0252.5357.1266.7147.2183a4.0304 4.0304 0 0 1 .292-.0126c.9898 0 1.685.654 1.685 1.5574 0 .5565-.4987 1.065-1.0581 1.065-.5628 0-1.0722-.5517-.9708-1.1067 0 0-.0568.1916-.0568.4255V15.23c-.0247.323-.458 2.1056-2.4593 2.1056-2.0023 0-2.4374-1.7825-2.4617-2.1056v-2.831c0-.2338-.0572-.4254-.0572-.4254.1077.5336-.4086 1.1066-.9675 1.1066-.5637 0-1.0605-.5084-1.0605-1.065 0-.9033.6933-1.5573 1.6874-1.5573.1043 0 .2086.0068.2867.0126.182-.0917.489-.2003.7166-.2183v-.2232c-.2605-.1276-.4454-.3963-.4454-.704 0-.4332.3537-.7864.7865-.7864.4347 0 .7864.3532.7864.7865a.784.784 0 0 1-.4497.7093v.295c.066.0213.1353.0465.2003.0766.1218-.262.3668-.4667.6438-.5584V9.609c-.2663-.1271-.4487-.3954-.4487-.7093 0-.4352.3503-.785.783-.785a.7836.7836 0 0 1 .7855.785c0 .3139-.1815.5822-.4478.7093v.2387c.275.0902.5167.2964.638.5584.062-.03.1363-.0553.2023-.0767zM24 3.434h-6.8636L0 20.566h17.1364Z"
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
export class SiChinasouthernairlinesIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#008BCB');
}
