import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-threadless-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Threadless</svg:title>
    <svg:path
      d="M17.866 12.281c-.08-.188-.177-.734-.019-1.047.19.243.403.552.019 1.047zm-1.49-3.192c-.231.826-.262 2.255-.027 2.852.643-1.25.111-2.625.027-2.852zm-1.63 2.403c.05-1.249.05-2.138-.22-2.64-.228.678-.114 1.388.22 2.64zm.491 1.2c.422.553.654.257.716-.002-.538-2.057-.18-3.149.187-4.397 0 0-.002 0-.003-.002-.02-.014-1.055.404-1.164.448.833 1.335-.164 2.85.264 3.953zm5.03-.183c.741-.561.678-1.729.776-2.34a.024.024 0 01-.003 0s-1.154.444-1.291.498c.594.314.79.956.518 1.842zm-6.58-.155c.232.529.65.312.824.09-.231-.469-.292-.668-.41-1.041-.383.058-.674.363-.415.95zm4.882.362c.534-.533.817-1.614.836-2.18a.031.031 0 00-.003-.001s-1.085.416-1.19.458c.446.468.35 1.017-.048 1.697.117.14.3.092.405.027zm2.817-1.715c.05.496-.082.952-.225 1.179.459.053.754-.709.225-1.179zm-1.713.365c.004.366-.22.875-.22.875.462.31.673-.27.22-.875zm-2.103 1.275c-.392-.722-.262-1.492.089-2.044l-.002-.001-.492.184a4.115 4.115 0 01-.52 1.768c.094.282.796.418.925.094zm3.316.047c-.544.517-1.093.546-1.66.074-.298.423-.688.603-1.37.359-.395.311-1.159.318-1.574-.063-.419.636-1.078.551-1.497-.096-.271.516-.776.535-1.184.171-.37.452-.875.496-1.171.044-.129.437-.691.699-1.334.348-.2.36-.831.684-1.54.388-.928.883-1.681.729-1.666-1.276l-.38-.097s.046 1.276.032 1.422c-.016.455-.38.538-.498.573-.344.101-.656-.178-.7-.419-.16-.899-.332-1.924-.38-1.94-.234-.076-.45 2.15-1.068 2.647-.672.54-1.12.125-1.595-.178l-.409.433c-.169-.917-.29-1.79-.059-2.628-.3.077-.737-.055-.8-.267.214-.295.566-.288.759-.258.11-.359.138-.795.042-1.255.617.017.66.48.662.608a1.614 1.614 0 01-.093.559.683.683 0 01.644.011.41.41 0 01.216.33 1.665 1.665 0 01-.83.159c-.457 1.142.27 1.924.908 2.104.321-2.082.139-4.514.652-5.645-.001 0-.002 0-.003-.002l-2.04.804a4.19 4.19 0 00-.294 1.127c-.055.024-1.874.707-1.866.75.07.363.075.723 0 1.08l-.008.004c-.25.1-.541.177-.742.367-.164.155.22.293.328.324a.984.984 0 00.286.026.716.716 0 00.135-.02q-.025.093-.045.187a3.814 3.814 0 00-.082.759c-.014.565.085 1.13.186 1.682l.567-.223.104-.038c.145.093.295.178.461.233.358.116.739-.097 1.062-.222.451-.175.903-.351 1.35-.536a.622.622 0 00.238.214c.346.184.963-.186 1.248-.297l.222-.087a.709.709 0 00.24.244.53.53 0 00.337.052 1.002 1.002 0 00.189-.051c.327-.109.647-.244.967-.372.51.073.957-.144 1.465-.342l.05-.02c.23.055.446.033.663-.027.191-.053.384-.135.59-.218.284.244 1.006-.111 1.104-.15.366.273 1.084-.043 1.176-.097.247.274.568.426.953.292.209-.073.416-.15.623-.229.304.158.663.179 1 .091a4.515 4.515 0 00.45-.144c.178.052.354.085.542.076.318-.015.654-.198.946-.318.382.303 1.186.068 1.634-.133a2.434 2.434 0 001.401.146c.137-.026 1.687-.606 2.413-.91-.599.22-1.31.221-1.958-.13zM5.169 9.794l-.211 3.028c.318-.498.468-2.332.211-3.028zm7.725 3.156c.036.131.377.098.418-.105-.386-.557-.667-1.827.664-1.997-.207-1.118-.047-1.95.438-2.735a.015.015 0 01-.002-.002c-.016-.014-2.016.763-2.04.803a3.54 3.54 0 00-.51 1.639c.507-.028.73 1.298 1.032 2.397zm-6.095.993s.182.278.33.095c.155-.193-.116-1.998-.12-2.025h-.004c-.088.009-.226.083-.301.111l-.06.023a1.889 1.889 0 01.128.509c.058.466.027 1.287.027 1.287zm1.272-2.047c.403.5.542 1.04.346 1.724.253.356.447.314.741.023-.595-.405-.555-1.904.442-2.462a.425.425 0 00-.038.011c-.241.085-1.587.555-1.976.782-.008.003-.053.031-.077.046a1.965 1.965 0 01.352.081zm3.463 1.188c.137.08.551.031.652-.414-.21-.686-.257-.943-.354-1.385-.455.085-.697 1.565-.298 1.8zm-1.564.361c.176.105.774.153.847-.23-.205-1.618.497-2.497.941-2.642l-.033.01-.107.038-1.84.642c.765.448.8 1.629.192 2.182zm-.402-.287c.597-.633.351-1.314.076-1.35-.484.432-.396 1.128-.076 1.35zm13.072-2.192a.077.077 0 00.035-.01.03.03 0 00.01-.03c0-.014-.005-.023-.014-.026a.066.066 0 00-.038-.004l-.056.006.007.07zm1.352-.601c0-.003-.003-.005-.004-.008l-1.105.42a.33.33 0 11-.355-.093l-.556.211a1.473 1.473 0 01.088.194c.139.381.13.845-.086 1.347 1.464-.068 2.103-1.138 2.018-2.072zm-1.384.358a.275.275 0 11-.246.302.276.276 0 01.246-.303zm-.092.13l.032.307.055-.005-.013-.129.027-.004a.02.02 0 01.015.005.07.07 0 01.014.017l.076.098.064-.007-.096-.123a.02.02 0 000-.003.078.078 0 00.02-.011.081.081 0 00.03-.079.083.083 0 00-.045-.07.13.13 0 00-.067-.008z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiThreadlessIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '0099FF');
  }
}
