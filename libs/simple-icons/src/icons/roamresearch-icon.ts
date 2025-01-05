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
  selector: 'svg[si-roamresearch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Roam Research</svg:title>
    <svg:path
      d="M11.14.028C7.315.36 4.072 2.263 1.98 5.411.487 7.646-.232 10.589.067 13.211c.32 2.772 1.4 5.124 3.242 7.049 4.643 4.852 12.252 5.001 17.038.343 1.085-1.057 1.738-1.959 2.407-3.303a11.943 11.943 0 0 0-2.429-13.925C18.372 1.495 16.015.388 13.27.078c-.68-.083-1.56-.1-2.13-.05zm4.814 2.567c1.112.437 2.086 1.068 3.032 1.986.62.598 1.323 1.46 1.3 1.599-.016.072-1.626.725-1.792.725-.056 0-.078-.072-.078-.25 0-.138-.011-.248-.028-.248-.01 0-.758.459-1.654 1.023-.897.565-1.666 1.024-1.71 1.024-.05 0-.133-.061-.194-.139-.127-.16-.216-.171-.354-.044-.066.056-.1.166-.1.316v.226l-.824.46c-.46.249-.89.453-.968.453h-.144V8.161c0-.863.016-2.025.038-2.573.034-.99.04-1.007.155-1.007.117 0 .128-.028.155-.514.067-1.107.25-1.284 1.362-1.323l.514-.016.16-.233c.156-.226.167-.226.366-.171.116.028.46.15.764.271zm-7.05.011l.122.183.641-.006c.604 0 .659.011.902.15.355.21.482.497.526 1.145l.033.498.172.016.171.017.017 2.716.011 2.722-.232.138a3.024 3.024 0 0 0-.936.875l-.177.27h-5.24v-.325l-.592-.017-.598-.017-.398-.586c-.332-.493-.454-.626-.758-.825-.415-.265-.404-.193-.139-1.023.659-2.025 2.203-3.945 4.1-5.107.67-.409 1.932-.995 2.159-1.001.055-.005.155.078.216.177zm12.163 4.902c.354.686.725 1.588.725 1.765 0 .071-.1.149-.327.26-.326.154-.393.237-.393.503 0 .155-.166.36-.564.692l-.327.27h-.99v.333h-2.767v-.886l-.332-.42c-.183-.227-.332-.432-.332-.454 0-.022 1.073-.68 2.39-1.46 2.17-1.29 2.402-1.417 2.485-1.34.05.045.244.377.432.737zm-5.556 3.087c.243.354.454.664.46.686.01.027-.394.05-.892.05h-.918l-.2-.332c-.11-.183-.193-.36-.182-.388.028-.083 1.167-.708 1.234-.68.033.011.254.31.498.664zm-7.282 2.567c.254.398.442.741.415.769-.111.1-5.163 3.32-5.213 3.32-.155 0-.813-1.317-1.024-2.048-.249-.863-.265-.769.188-1.045.178-.111.371-.321.637-.703l.387-.548.603-.027.609-.028.017-.21.016-.205H7.77l.459.725zm1.815-.476c.066.122.127.249.127.288 0 .077-.996.686-1.057.647-.05-.028-.714-1.1-.714-1.15 0-.023.343-.028.758-.023l.758.017.128.221zm9.158-.044l.016.21.554.028c.597.027.525 0 1.184.481.011.006.06.194.11.41.095.425.128.459.493.547.288.072.293.133.072.78-.57 1.682-1.787 3.425-3.287 4.686-.642.542-.603.542-.559-.055.045-.614-.027-.935-.254-1.162-.26-.255-.526-.221-1.3.177-.51.26-.698.332-.897.332-.327 0-.631-.094-.825-.255l-.16-.127.393-.36c.42-.381.62-.73.525-.907-.16-.298-.453-.37-1.045-.26-.498.1-.864.105-1.013.028-.188-.105-.288-.376-.26-.741.028-.332.022-.343-.216-.62l-.238-.282v-1.765l.393-.271c.216-.144.559-.448.758-.675l.37-.404h5.17l.017.205zm-7.814 2.157v.758l-.276.282-.277.283.083.238c.1.282.105.52.022.674-.1.194-.293.222-.896.133a8.212 8.212 0 0 0-.764-.083c-.68 0-.703.482-.06 1.256.31.37.31.365-.084.564-.553.277-.902.25-1.389-.116-.41-.304-.647-.393-.968-.36-.21.017-.31.061-.443.2l-.177.177.006.686c0 .382-.011.691-.023.691-.06 0-1.023-.846-1.45-1.272-.442-.448-.995-1.123-.995-1.217 0-.044 1.516-.72 1.615-.72.034 0 .045.084.034.194-.011.105-.006.194.01.194.017 0 1.362-.747 2.989-1.66a204.276 204.276 0 0 1 3.005-1.66c.022 0 .038.343.038.758z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRoamresearchIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#343A40');
  }
}
