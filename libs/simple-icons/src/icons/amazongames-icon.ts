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
  selector: 'svg[si-amazongames-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Amazon Games</title>
    <svg:path
      d="M3.8457 11.1425c.09-.303.082-.685.082-1.078V7.2513c0-.135.033-.52-.02-.6-.054-.08-.26-.062-.404-.062-.412 0-.595-.057-.632.336l-.016.01c-.323-.247-.63-.482-1.223-.47l-.197.015a1.875 1.875 0 0 0-.3361.082 1.622 1.622 0 0 0-.886.89 3.0171 3.0171 0 0 0-.171.607 1.967 1.967 0 0 0-.031.62c.03.195.012.365.05.535.145.609.43 1.083.955 1.31a1.665 1.665 0 0 0 .917.114 1.73 1.73 0 0 0 .59-.22l.223-.164h.005a1.857 1.857 0 0 1-.01.556c-.091.526-.246.704-.771.797a1.483 1.483 0 0 1-.446.011l-.435-.057-.638-.154a.14.14 0 0 0-.103.088 3.3121 3.3121 0 0 0 .02.6431c.073.122.31.17.457.218.494.157 1.292.233 1.828.047.613-.211 1-.624 1.192-1.261zm-1.09-3.0421v1.445a1.255 1.255 0 0 1-.356.176c-.872.274-1.2021-.34-1.2021-1.144a2.087 2.087 0 0 1 .093-.731c.077-.198.195-.371.39-.45.068-.03.152-.022.227-.053a1.745 1.745 0 0 1 .642.1l.193.09c.047.083.014.438.014.567zm3.509 2.756a2.114 2.114 0 0 0 .689-.265l.2741-.202c.07.092.043.231.134.301.092.07.798.096.865 0 .068-.095.037-.302.037-.446v-1.848c0-.36.027-.763-.057-1.046-.197-.667-.76-.896-1.632-.887l-.466.03a5.1102 5.1102 0 0 0-.788.172c-.112.039-.283.068-.33.17-.045.104-.036.647.026.69.093.063.536-.083.66-.11.357-.077 1.173-.156 1.372.1.144.184.12.544.116.876-.082.02-.224-.035-.31-.052l-.394-.041a1.483 1.483 0 0 0-.435.015c-.676.116-1.154.373-1.31 1-.243.963.592 1.746 1.549 1.544Zm-.197-1.786c.098-.058.22-.042.342-.09.276 0 .509.043.7401.053.043.093.013.563.01.705-.196.261-.988.521-1.257.15-.194-.275-.064-.684.165-.818Zm3.1752 1.318c0 .144-.018.287.072.342.05.03.172.016.247.016.173 0 .765.036.83-.047.082-.103.035-.645.035-.834v-2.261a1.594 1.594 0 0 1 .503-.187c.279-.065.648-.066.787.12.123.164.104.457.104.745v1.565c0 .213-.048.807.072.881.074.045.412.016.528.016.117 0 .457.028.53-.026.097-.074.056-.6.056-.788q0-1.164.005-2.331c.04-.065.202-.092.28-.12.3421-.12.8751-.2 1.0411.135.082.173.057.488.057.742v1.552c0 .185-.041.687.036.788.046.059.151.047.254.047.155 0 .77.027.84-.026.102-.078.061-.39.061-.565v-1.61c0-.68.053-1.298-.247-1.685-.537-.7-1.953-.325-2.472.12h-.02c-.199-.334-.54-.522-1.081-.514l-.218.016a2.49 2.49 0 0 0-.435.098 3.3441 3.3441 0 0 0-.5231.247l-.254.156c-.092-.111-.036-.292-.165-.368-.05-.03-.714-.038-.807-.015a.165.165 0 0 0-.088.057c-.055.082-.027.625-.027.782zm7.9362.175c.51.32 1.426.389 2.15.208.182-.045.5371-.11.6001-.259a3.9771 3.9771 0 0 0 .01-.622.15.15 0 0 0-.066-.077c-.065-.028-.165.02-.228.036l-.534.098a1.95 1.95 0 0 1-.59.022 3.2441 3.2441 0 0 1-.412-.058c-.406-.123-.675-.425-.68-.943.097-.043.413-.01.544-.01h1.32c.19 0 .493.04.61-.047.155-.116.144-.894.093-1.144-.17-.85-.682-1.318-1.71-1.3l-.124.005-.373.05c-.4.102-.746.287-.968.566a2.117 2.117 0 0 0-.3061.494c-.203.482-.259 1.353-.087 1.93.138.46.381.818.751 1.049zm.305-2.682c.093-.268.247-.463.518-.55l.232-.044c.615-.005.784.313.777.928-.083.038-.35.01-.467.01h-1.117c-.034-.086.03-.27.057-.347zm6.3982 1.087c-.247-.428-.784-.595-1.264-.792-.227-.094-.6-.172-.653-.435-.113-.564 1.045-.4 1.388-.316.096.023.317.11.378.03s.032-.27.032-.393c0-.101.013-.23-.027-.295-.059-.1-.215-.128-.336-.165a3.0161 3.0161 0 0 0-.964-.14l-.296.022a2.396 2.396 0 0 0-.538.144 1.223 1.223 0 0 0-.659.642c-.184.455-.01 1.058.265 1.28.33.266.777.417 1.2.59.215.088.458.138.504.394.122.697-1.196.444-1.59.342-.083-.022-.343-.11-.413-.072-.094.053-.057.317-.057.46 0 .083-.012.2.021.254.1.165.645.269.886.317.956.19 1.806-.134 2.113-.736.154-.291.182-.834.01-1.133zm-3.357 4.0871-.18.01a3.0931 3.0931 0 0 0-.5241.058 3.6181 3.6181 0 0 0-1.114.39c-.083.05-.412.211-.352.361.047.12.524.02.678.01.305-.02.454-.047.742-.046h.528a2.958 2.958 0 0 1 .472.03.702.702 0 0 1 .284.136c.12.103.098.452.057.616a11.4804 11.4804 0 0 1-.476 1.5541c-.034.082-.3.602-.005.54.133-.03.404-.33.487-.43.412-.528.672-1.134.865-1.896.045-.178.147-.874.046-1.036-.165-.269-1.037-.306-1.508-.297zm-.6431 1.483-.472.207-.78.2951c-.697.27-1.47.446-2.2451.638l-.907.17-1.067.14-.342.026c-.136.03-.297.012-.4501.036a6.8722 6.8722 0 0 1-1.02.042l-.772.005-.555-.02-.357-.02c-.082-.017-.18-.006-.27-.022l-1.0821-.119c-.32-.06-.665-.082-.97-.165l-.253-.042-.9411-.21c-.673-.21-1.341-.375-1.97-.617-.696-.27-1.4241-.564-2.0401-.928l-.61-.352c-.112-.066-.202-.164-.38-.164-.131.065-.171.15-.081.305a1.049 1.049 0 0 0 .238.233l.28.26c.404.32.81.65 1.248.937.38.247.783.457 1.18.69l.597.284c.34.15.694.305 1.05.445l.9181.305c.495.165 1.033.248 1.566.38l1.1241.163.362.027.612.046h.222a2.504 2.504 0 0 0 .653.006l.233-.006.285-.005.9741-.077c.437-.098.897-.083 1.31-.208l.954-.232a16.0985 16.0985 0 0 0 1.6731-.586 11.8764 11.8764 0 0 0 1.9471-1.036c.211-.142.51-.247.565-.544.047-.25-.21-.347-.427-.287z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAmazongamesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
