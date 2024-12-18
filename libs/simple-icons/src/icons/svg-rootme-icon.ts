import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rootme-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Root Me</title>
      <path
        d="M21.364 9.897c0-.448-.029-.896-.096-1.325 0-.028-.009-.057-.009-.086-.582-3.785-3.452-6.894-7.228-7.723-.095-.429-.477-.753-.934-.753-.534 0-.964.429-.964.963 0 .457.325.839.754.934v3.519c0 .057.028.114.076.152.029.019.067.029.105.029.019 0 .048 0 .067-.01l1.411-.534c.095.143.238.239.41.286v1.659c-.715.878-1.602 1.669-2.546 2.375l-1.077-2.499c.2-.133.333-.352.333-.61 0-.4-.324-.734-.734-.734-.4 0-.734.324-.734.734 0 .401.324.734.734.734h.038l1.125 2.603c-.658.477-1.335.906-2.002 1.297l-3.204-.963c-.038-.009-.076-.009-.114.01l-.954.372c-.133-.182-.343-.296-.591-.296-.4 0-.734.324-.734.734 0 .401.324.734.734.734.401 0 .734-.324.734-.734 0-.028-.009-.057-.009-.086l.896-.352 2.794.839c-2.384 1.335-4.52 2.107-4.873 2.231l-.171.057a.9205.9205 0 0 0-.553-.181h-.029c-.448-1.058-.677-2.212-.677-3.366 0-.572.057-1.135.162-1.678H7.69c.086.315.362.543.706.543.4 0 .734-.324.734-.734 0-.4-.324-.734-.734-.734-.344 0-.62.229-.706.543h-4.1c.772-3.137 3.251-5.644 6.455-6.388.172.276.477.467.82.467.534 0 .963-.429.963-.963S11.399 0 10.865 0c-.467 0-.848.334-.944.763-4.205.953-7.285 4.739-7.285 9.125 0 1.249.248 2.498.735 3.642-.181.172-.286.42-.286.687 0 .429.276.782.658.915v3.757c0 .067.019.134.057.191l.21.143 2.851 2.012v2.403c0 .2.162.362.362.362h9.535c.2 0 .362-.162.362-.362v-2.403l2.861-2.012.21-.153a.3437.3437 0 0 0 .057-.19v-3.786c.353-.143.601-.486.601-.887 0-.248-.096-.476-.248-.648.505-1.135.763-2.393.763-3.662Zm-1.383 3.366h-.086c-.534 0-.963.429-.963.963 0 .41.258.763.629.897v3.509l-3.003 2.117c-.096.066-.153.181-.153.295v2.022c0 .114-.095.209-.21.209H15.08c-.115 0-.21-.095-.21-.209v-.725c0-.191-.133-.362-.324-.382-.219-.019-.401.153-.401.363v.753c0 .115-.095.21-.209.21h-1.364a.212.212 0 0 1-.21-.21v-1.116c0-.19-.133-.362-.324-.381-.219-.019-.4.153-.4.362v1.145c0 .114-.096.209-.21.209h-1.364a.2109.2109 0 0 1-.209-.209v-.744c0-.191-.134-.362-.325-.382-.219-.019-.4.153-.4.363v.753c0 .115-.095.21-.21.21H7.805c-.115 0-.21-.095-.21-.21v-2.021c0-.115-.057-.229-.153-.296l-2.994-2.117v-3.547a.9594.9594 0 0 0 .563-.877c0-.057-.01-.114-.019-.172.381-.133 3.289-1.173 6.15-2.956 3.871-2.412 6.017-5.149 6.264-7.961 1.669 1.344 2.823 3.289 3.157 5.473-.048 4.777-8.372 7.723-8.458 7.752-.019.009-.067.019-.105.038-.105-.019-.21-.038-.324-.057-.076-.019-.162-.029-.239-.048-.124-.019-.247-.048-.371-.076-.02-.01-.048-.01-.067-.01-.048-.009-.096-.019-.143-.028-.057-.01-.115-.029-.172-.039-.133-.028-.267-.057-.391-.095-.238-.057-.467-.124-.696-.181-.219-.067-.448-.124-.658-.191H8.92c-.162-.047-.315-.095-.467-.152a.9996.9996 0 0 0-.153-.048c-.076-.029-.143-.048-.209-.067-.124-.038-.239-.076-.344-.124h-.009a5.9785 5.9785 0 0 1-.458-.171c-.143-.058-.267-.105-.362-.143-.096-.048-.181-.077-.229-.105-.057-.029-.086-.038-.086-.038s.019.028.057.066c.038.048.096.115.181.191.077.076.182.172.306.267.124.095.267.2.419.305h.01c-.058.191-.096.401-.096.61 0 1.097.897 1.993 1.993 1.993.849 0 1.573-.534 1.86-1.287.095.01.2.019.295.029.172.009.334.009.486.009.01 0 .019.01.029.01l1.611 1.64c.41.41 1.049.477 1.526.162l2.517-1.411c.22-.143.363-.391.363-.658v-2.899c.972-.772 1.85-1.688 2.422-2.727-.105.753-.305 1.468-.601 2.145Zm-7.799 5.87-.002-.002c-.002-.002-.004-.003-.008-.003a.0437.0437 0 0 0-.013-.009l-.003-.002a.028.028 0 0 1-.013-.009c-.01 0-.019-.009-.029-.009-.009 0-.019-.01-.019-.01-.009 0-.019 0-.028-.009h-.115c-.009 0-.019 0-.028.009-.01 0-.019.01-.019.01-.01 0-.019.009-.029.009-.009 0-.019.01-.029.02-.009 0-.009.009-.019.009l-.038.038-.772.963c-.095.124-.076.296.048.391.047.038.114.057.171.057.086 0 .162-.038.219-.104l.01-.01c.286-.353.82-.353 1.097 0l.009.01c.057.066.134.104.219.104.058 0 .124-.019.172-.057.124-.095.143-.276.048-.391l-.782-.953c-.01-.01-.019-.019-.019-.029-.01-.009-.01-.009-.019-.019a.0127.0127 0 0 1-.009-.004Zm-1.622-2.265c-.038.076-.095.152-.143.219-.229.267-.572.439-.953.439-.382 0-.725-.172-.954-.439-.191-.219-.295-.505-.295-.81 0-.077.009-.144.019-.22.152.076.314.153.476.229.22.095.449.191.687.267.238.086.486.153.734.219.143.038.286.067.429.096Zm-6.503-2.184c-.114 0-.219-.048-.305-.114-.095-.086-.162-.21-.162-.344 0-.057.01-.114.029-.162.066-.171.238-.295.429-.295.085 0 .162.028.229.067.133.076.228.228.228.4 0 .086-.028.162-.066.229-.067.133-.21.219-.382.219Zm16.21-.181c-.086.105-.219.181-.362.181-.134 0-.248-.057-.334-.143-.076-.086-.124-.191-.124-.315 0-.2.124-.371.305-.429.048-.019.105-.028.162-.028.219 0 .41.162.458.372.009.028.009.057.009.095-.019.095-.057.191-.114.267Zm-5.845-9.869c0 .029.009.048.009.067l-1.163.438V1.897c.286-.047.525-.219.658-.457 1.02.229 1.974.639 2.823 1.201-.01 1.411-.554 2.708-1.412 3.881V5.34c.315-.086.544-.363.544-.706 0-.4-.324-.734-.734-.734-.401.009-.725.334-.725.734Zm-3.48-1.735c-.391 0-.716.305-.735.696l-1.458.534c-.077.028-.134.095-.134.181v.925H7.442c-.086-.315-.362-.544-.705-.544-.401 0-.735.324-.735.735 0 .4.325.734.735.734.343 0 .619-.229.705-.544h1.364c.105 0 .19-.086.19-.19v-.983l1.288-.476c.124.238.372.4.648.4.401 0 .734-.324.734-.734.01-.401-.324-.734-.724-.734Zm-.41-2.241a.4605.4605 0 0 1 .343-.153c.257 0 .467.21.467.468 0 .257-.21.467-.467.467-.096 0-.181-.029-.258-.076-.124-.086-.209-.229-.209-.382 0-.133.047-.248.124-.324Zm2.097.305c0-.257.21-.467.468-.467.133 0 .247.057.333.143.077.086.124.191.124.315 0 .152-.076.295-.2.381-.076.057-.162.086-.267.086-.248.009-.458-.2-.458-.458Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRootmeIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
