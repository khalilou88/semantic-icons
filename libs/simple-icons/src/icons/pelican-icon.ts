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
  selector: 'svg[si-pelican-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Pelican</title>
    <svg:path
      d="M.9418 0c.342 1.0548 1.8764 2.1857 2.9063 2.6238 1.3134.5583 2.5984.6849 3.7501.8122.895.0963 1.7019.2014 2.3439.4998.1622.0726.3288.148.4688.2499.4586.3364.9464.9876 1.2813 1.4368.7186.9583.5858 1.7451 1.4375 2.2178.089.0492.1683.083.2813.125.271.1018.667.2273.8437-.1563a.788.788 0 00.0625-.1874c-.0712-.229-.321-.4327-.4687-.531-.2618-.171-.3735-.274-.5625-.4685-.3494-.3583-.348-.9508-.5938-1.3744.3092-.131 1.9392-.3597 2.2813-.3124.7313.0326 1.31.0782 1.75.531.1727.1365.2497.2567.4064.3749.011.009.0202.024.0312.0312.6933.5037 1.3388.6705 1.9063.8434.1496.0454.2988.1054.4375.1562.213.0763.4065.1594.5938.281.2222.1474.6089.542.625.8747-.5587-.1783-.207.0323-1.0313-.0312-.4019-.0456-.8058-.0647-1.2187-.0937-.6422-.0454-1.273-.1043-1.8751-.2187-.1002-.0184-.2146-.0388-.3125-.0625-.0766-.0163-.146-.011-.2188-.0312-.0018.0308 0 .0353 0 .0625-.0166.6292.4214.9586-.5938 2.1553-.009.0127-.0204.0167-.0312.0312-.2695.3147-1.657.9163-2.0938 1.0308-1.8593.3728-3.292-.828-5.5315-.2187-.7877.2928-1.3567 1.5756-1.7188 2.5302-.482 1.2677-.8758 2.7956-1.3126 4.3106-.2.6982-.4178 1.4015-.6562 2.0616-.575 1.584-1.3113 2.9428-2.4064 3.717-.1638.1256-.787.41-.8125.6248.404.2037 4.185.056 4.8127 0 2.5033-.2184 3.6468-1.7733 4.4689-3.9045.5659-1.462 1.065-3.9864 2.0313-5.3102.0128-.0182.0183-.015.0313-.0312.1456-.1967.327-.3691.5-.4998.0454-.0347.0775-.0648.125-.0937.0344-.0219.1566-.0592.3438-.0937 1.7357-.3074 9.3491-1.3474 9.844-6.872.051-.5581.0158-1.1588-.0937-1.8117-.0543-.3364-.115-.6653-.2187-1.0308-.2457-.8691-.7981-1.614-1.5313-2.2177-.1926-.16-.405-.3285-.625-.4686-.846-.54-1.8774-.921-2.969-1.1557-.7332-.1582-1.4874-.239-2.25-.25C9.8402.0326 6.3978.2075.9418 0zm1.625 4.2169c.0235.0382.0389.0574.0625.0937C4.2284 6.8382 6.239 6.8135 8.067 7.0281c.666.0782 1.317.1849 1.9063.4686.262.1235.5116.2649.75.4685-.0292-.131-.076-.2564-.125-.3748-.444-1.0763-1.6487-1.6661-2.6875-1.9679-1.3938-.4984-2.4038-.0181-5.344-1.4056zm1.4063 3.186c.0107.0528.0094.0946.0313.1563.2199.6346 1.0403 1.6503 2.0938 1.8741.4567.1636.315.1174 1.0938.0937 1.1406-.0581 1.692-.0793 2.5.25-.02-.0493-.0423-.1091-.0624-.1563C9.0074 8.175 8.2593 8.421 5.8794 8.2464c-1.0188-.3074-1.2587-.3415-1.9063-.8434z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPelicanIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
