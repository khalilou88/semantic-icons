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
  selector: 'svg[si-infoq-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>InfoQ</svg:title>
    <svg:path
      d="M19.931 8.321c-.448 0-.858.064-1.23.191a3.033 3.033 0 0 0-1.835 1.728c-.187.451-.28.962-.28 1.533 0 .819.19 1.508.564 2.07l.007.01c.018.027.036.054.056.08l.023.032a3.006 3.006 0 0 0 .143.18l.018.02a2.947 2.947 0 0 0 1.32.87 3.768 3.768 0 0 0 1.215.18c.33 0 .644-.035.94-.105a3.24 3.24 0 0 0 .81-.306 2.59 2.59 0 0 0 1.037.7c.243.089.505.147.786.175L24 14.504a2.581 2.581 0 0 1-.552-.122 2.343 2.343 0 0 1-.796-.465 2.885 2.885 0 0 0 .278-.454 3.05 3.05 0 0 0 .228-.633l.002-.006c.077-.318.116-.669.116-1.051 0-1.045-.305-1.88-.915-2.51-.61-.628-1.42-.942-2.43-.942ZM0 8.471v6.584h1.62V8.472Zm9.88 0c-.575 0-.989.115-1.241.344-.253.23-.38.604-.38 1.122a3.057 3.057 0 0 0 .02.342h-.753v.897h.752v3.879h1.48V11.176h.92v-.897h-.92v-.187c0-.2.044-.333.132-.4.087-.067.267-.1.54-.1h.248V8.567a3.35 3.35 0 0 0-.797-.095zm10.051 1.23c.522 0 .93.183 1.226.548.295.366.443.874.443 1.524 0 .277-.029.527-.083.753a2.384 2.384 0 0 1-.051.184l-.013.04a2.05 2.05 0 0 1-.056.142l-.027.06a1.829 1.829 0 0 1-.097.178l-.026.04a1.464 1.464 0 0 1-.322.353l-.008.006-.008.005a1.374 1.374 0 0 1-.27.162c-.003 0-.006.002-.008.003a1.527 1.527 0 0 1-.323.101h-.005l-.003.001c-.116.023-.239.034-.369.034-.521 0-.93-.183-1.225-.549a1.66 1.66 0 0 1-.102-.141l-.002-.002c-.031-.049-.06-.1-.087-.152l-.002-.004a1.925 1.925 0 0 1-.074-.163l-.012-.034a2.874 2.874 0 0 1-.164-1.017c0-.644.149-1.15.446-1.519.297-.369.704-.553 1.222-.553zm-6.577.3c-.79 0-1.43.24-1.915.72-.485.48-.728 1.109-.728 1.889 0 .072.004.141.008.21v.002a3.2 3.2 0 0 0 .024.239l.002.016c.01.07.022.139.036.206l.012.052a2.639 2.639 0 0 0 .126.395l.032.072c.021.046.042.091.066.135l.05.089c.023.036.044.073.068.109.027.041.058.08.088.12l.05.066a2.382 2.382 0 0 0 1.253.793c.085.022.172.04.26.055h.001c.18.03.368.045.567.045.793 0 1.433-.239 1.92-.717.058-.056.112-.115.163-.176v-.002c.036-.042.067-.086.098-.13.016-.02.033-.041.047-.063.032-.047.06-.096.088-.146.011-.02.024-.038.034-.058.031-.057.058-.117.084-.178l.015-.035c.028-.068.053-.138.075-.21l.004-.012v-.003a2.667 2.667 0 0 0 .099-.49 3.29 3.29 0 0 0 .02-.262v-.003c0-.04.004-.079.004-.12 0-.782-.242-1.412-.726-1.89s-1.126-.717-1.925-.717zm-7.74.046c-.298 0-.567.047-.807.14-.239.095-.454.238-.645.429v-.455h-1.48v4.894h1.48V12.173c0-.352.063-.6.19-.744.126-.144.338-.216.635-.216.252 0 .436.077.553.232.116.154.175.397.175.728v2.882h1.48V12.1c0-.695-.13-1.21-.39-1.548-.26-.337-.657-.505-1.19-.505zm7.74 1.102a.99.99 0 0 1 .825.396c.205.264.307.619.307 1.065 0 .055-.001.108-.004.16v.002c-.003.046-.008.09-.013.134v.003l-.013.083c-.003.018-.005.037-.009.054-.004.023-.01.046-.015.068a1.8 1.8 0 0 1-.075.242 1.397 1.397 0 0 1-.092.184l-.02.035a1.247 1.247 0 0 1-.068.096.992.992 0 0 1-.823.396.988.988 0 0 1-.822-.394 1.236 1.236 0 0 1-.065-.093l-.027-.045a1.29 1.29 0 0 1-.107-.232l-.012-.034a1.662 1.662 0 0 1-.026-.088l-.002-.007a2.03 2.03 0 0 1-.06-.364 2.637 2.637 0 0 1-.008-.2c0-.44.103-.794.31-1.06.206-.268.479-.401.819-.401z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInfoqIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#2C6CAF');
  }
}
