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
  selector: 'svg[si-chianetwork-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Chia Network</svg:title>
    <svg:path
      d="M13.4619 4.7065c-.0614 0-.3272.0205-.5726.041-.4294.0408-1.0428.1021-1.145.143-.0205 0-.1432.0205-.2454.041-.818.1226-1.8404.4498-2.413.777-.1021.0613-.2248.1227-.2453.1227-.1227.0409-.9815.6543-1.3087.9201-2.3515 1.9221-3.5988 4.928-3.0672 7.4227.0614.3067.0818.3067.2863.1431.3476-.2454.6543-.4499 1.0633-.6952.2454-.1432 1.3087-.6544 1.3496-.6544 0 0 .0818-.0409.184-.0818.9406-.4294 3.6602-1.37 5.0302-1.7176.041-.0205.2863-.0818.5112-.1431 1.2883-.3477 1.5132-.409 1.5132-.3477 0 .0205-.0818.041-.1636.0818-.4499.1636-1.6563.6544-1.7176.6953-.0205.0204-.041.0204-.0614.0204s-.1227.0409-.2454.1022-.2044.1023-.2249.1023-.1227.0409-.2454.1022c-.1227.0614-.2454.1023-.2454.1023l-.2862.1227-.2863.1226c-.1431 0-3.1694 1.595-4.1305 2.1675-.225.1227-.409.2454-.409.2454s-.3067.184-1.2678.7975c-1.0633.6748-2.8422 1.9221-3.926 2.781-.1227.1022-.2863.2249-.3476.2658-.9406.736-1.0633.8792-.5317.593 1.2065-.634 2.556-1.2678 3.5171-1.6563.593-.2454 1.2269-.409 1.6359-.4703l.184-.0205.4499.4499c1.145 1.145 2.372 1.738 4.1918 1.9834.4294.0614 1.8199.041 2.147-.0204.1023-.0205.3068-.0614.4704-.0818.1636-.0205.3476-.0614.3885-.0818.0409-.0205.184-.041.3067-.0818 2.0857-.5521 3.8851-1.8403 5.4801-3.967.0409-.0408.184-.2249.3067-.4089.1432-.184.2863-.368.3272-.4294.0409-.0409.1227-.184.2045-.2863.8179-1.1655 2.0039-3.0876 2.74-4.4985.0818-.1636.225-.409.2863-.5521.0613-.1432.3271-.6544.5725-1.1247.2454-.4703.4499-.8997.4499-.9201.0613-.1227.0409-.1636-.2658-.2863-.041-.0205-.2659-.1023-.5112-.1636-.2454-.0818-.5317-.1636-.634-.2045-.4089-.1431-1.1041-.3271-1.9425-.552-.7361-.1841-.9202-.2455-1.2064-.3068-.1432-.0205-.2863-.0613-.3272-.0818s-.1636-.0409-.2658-.0613c-.2863-.0614-.4294-.0818-.6953-.1432-1.0224-.2249-1.9016-.3067-3.3943-.3067-.6135-.0204-1.186 0-1.2678 0"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChianetworkIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '5ECE71');
  }
}
