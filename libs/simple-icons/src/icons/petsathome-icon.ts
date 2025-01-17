import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-petsathome-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Pets at Home</svg:title>
    <svg:path
      d="M18.627 17.554c0-.7.399-1.209 1.19-1.209.791 0 1.138.574 1.138 1.203v.065c0 .068-.038.107-.107.107h-1.507c0 .282.227.57.72.57.204 0 .356-.052.551-.12.11-.039.198-.016.198.104 0 .23-.341.535-.928.535-.797 0-1.255-.493-1.255-1.255ZM7.778 16.066v.321h.383c.068 0 .107.039.107.107v.337c0 .068-.039.107-.107.107h-.383v1.025c0 .249.094.36.237.36a.49.49 0 0 0 .175-.043c.101-.042.159.01.159.104 0 .237-.269.425-.597.425-.505 0-.687-.318-.687-.756v-1.776c0-.042.023-.072.062-.091l.502-.211c.088-.039.149-.003.149.091Zm4.43 1.511c0-.756.46-1.232 1.189-1.232.73 0 1.19.476 1.19 1.232 0 .755-.46 1.232-1.19 1.232-.729 0-1.189-.477-1.189-1.232Zm-7.925 0c0-.756.409-1.232 1.031-1.232a.65.65 0 0 1 .613.389v-.24c0-.068.039-.107.107-.107h.499c.068 0 .107.039.107.107v2.163c0 .068-.039.107-.107.107h-.499c-.068 0-.107-.039-.107-.107v-.237a.649.649 0 0 1-.613.389c-.622 0-1.031-.477-1.031-1.232Zm12.574 1.19h-.499c-.068 0-.107-.039-.107-.107v-1.453c0-.243-.072-.288-.201-.288a.515.515 0 0 0-.383.172v1.566c0 .068-.039.107-.107.107h-.499c-.068 0-.107-.039-.107-.107v-1.998c0-.042.022-.071.061-.091l.503-.21c.091-.039.149-.004.149.091v.343c.13-.318.36-.45.678-.45.282 0 .489.132.587.428a.645.645 0 0 1 .638-.428c.38 0 .688.207.688.732v1.579c0 .068-.039.107-.107.107h-.5c-.068 0-.107-.039-.107-.107v-1.452c0-.243-.071-.289-.201-.289a.518.518 0 0 0-.382.172v1.566c.003.078-.036.117-.104.117Zm-6.922 0h-.532c-.068 0-.107-.039-.107-.107v-2.792c0-.068.039-.107.107-.107h.532c.068 0 .107.039.107.107v1.038h1.047v-1.038c0-.068.039-.107.107-.107h.532c.068 0 .107.039.107.107v2.792c0 .068-.039.107-.107.107h-.532c-.068 0-.107-.039-.107-.107v-1.184h-1.047v1.184c0 .068-.039.107-.107.107Zm3.459-.49c.302 0 .461-.236.461-.7 0-.464-.159-.7-.461-.7-.301 0-.46.236-.46.7 0 .464.162.7.46.7Zm-7.921 0c.302 0 .461-.236.461-.7 0-.464-.159-.7-.461-.7-.301 0-.46.236-.46.7 0 .464.159.7.46.7Zm14.805-.995c-.029-.289-.195-.448-.461-.448s-.428.159-.46.448h.921Zm1.734-6.598-.661-.159c-.726-.172-.992-.363-.992-.714 0-.353.353-.586.895-.586.619 0 1.076.214 1.835.726.084.052.159.097.214.097.107 0 .181-.042.201-.201a3.9 3.9 0 0 0 .032-.545c0-.321-.009-.535-.032-.651-.033-.182-.097-.276-.214-.354-.629-.395-1.333-.564-2.111-.564-1.751 0-2.892.853-2.892 2.166 0 .982.713 1.718 1.952 2.026l.694.172c.885.214.992.415.992.727 0 .363-.308.609-.82.609-.811 0-1.408-.298-2.069-.96-.097-.097-.159-.158-.276-.158a.278.278 0 0 0-.256.149c-.405.671-.713.917-1.141.917-.457 0-.778-.321-.778-.908V9.39h1.005c.133 0 .243-.11.243-.243V8.08a.245.245 0 0 0-.243-.243h-1.005V6.579c0-.276-.182-.383-.457-.266l-1.537.642a.288.288 0 0 0-.182.275v2.983c0 1.868-1.248 3.136-2.837 3.136-.833 0-1.589-.321-1.868-1.132.192.075.513.107.97.107 1.835 0 3.113-1.002 3.113-2.454 0-1.291-1.067-2.143-2.656-2.143-.59 0-1.157.113-1.647.321C9.092 6.323 7.415 5.191 5.1 5.191c-1.057 0-2.017.13-2.902.396-.246.074-.395.233-.395.479v4.212a2.958 2.958 0 0 1-1.281-.969C.447 9.212.392 9.15.276 9.15c-.172 0-.276.13-.276.298 0 .727.853 1.686 1.803 2.156v2.902c0 .133.11.244.243.244h1.903a.245.245 0 0 0 .243-.244v-2.198c.14.01.276.023.428.023 1.258 0 2.205-.198 2.896-.646.139 1.904 1.563 3.233 3.735 3.233 1.119 0 2.442-.395 3.178-1.397.353.852 1.183 1.397 2.198 1.397s1.621-.256 2.133-.843c.662.555 1.398.843 2.38.843 1.751 0 2.86-.875 2.86-2.25-.003-.983-.538-1.631-1.988-1.984ZM10.93 9.105c.512 0 .788.308.788.736 0 .713-.639 1.193-1.589 1.193-.331 0-.522-.023-.652-.075.004-1.105.568-1.854 1.453-1.854Zm-6.734 1.514V7.325c0-.202.084-.321.275-.351.289-.052.48-.052.639-.052 1.29 0 2.059.681 2.059 1.813.003 1.193-.914 1.855-2.973 1.884Z"
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
export class SiPetsathomeIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00AA28');
}
