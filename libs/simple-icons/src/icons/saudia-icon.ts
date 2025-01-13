import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-saudia-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Saudia</svg:title>
    <svg:path
      d="M14.759 5.065c.9467.2206 1.5774.709 1.5774.709s-.5652-.8898-1.4944-1.2994c-.6905-.3046-1.3669-.3084-1.8968-.2284.0425-.085.0968-.1617.1663-.2254.163-.15.3462-.2365.3462-.2365s-.3924-.0987-.7332.0296c-.1759.0663-.3144.1633-.419.2553a2.8126 2.8126 0 0 0-.0561-.2997c-.0403-.1636-.233-.5137-.2496-.5435-.0165.0299-.2093.38-.2495.5435a2.8656 2.8656 0 0 0-.0562.2997c-.1045-.092-.243-.189-.419-.2553-.3408-.1283-.7332-.0296-.7332-.0296s.1833.0864.3463.2365c.0695.0638.1238.1404.1663.2254-.53-.08-1.2063-.0762-1.8968.2284-.9293.4096-1.4944 1.2994-1.4944 1.2994s.6306-.4884 1.5773-.709c.4664-.1084.899-.1047 1.2687-.0558-.5924.129-1.4224.4374-2.0342 1.2166-.5328.6783-.6693 1.627-.6693 1.627s.4324-.554 1.1608-1.172a5.3466 5.3466 0 0 1 1.2083-.773c-.4536.4305-.6782 1.091-.769 1.3414-.2762.7628-.0991 1.6102-.0991 1.6102s.1166-.5536.5411-1.2737c.3025-.5135.6921-.9026 1.0187-1.1704-.3908 1.4485.0125 2.8744.0125 2.8744s.2446-1.0975.6126-2.0282c.1566-.396.3362-.6952.5082-.9193.1721.2241.3517.5232.5083.9193.368.9307.6125 2.0282.6125 2.0282s.4033-1.4259.0125-2.8744c.3266.2678.7163.6569 1.0188 1.1704.4245.72.5411 1.2737.5411 1.2737s.177-.8474-.0992-1.6102c-.0908-.2504-.3154-.9109-.7688-1.3415a5.3497 5.3497 0 0 1 1.2082.7732c.7284.618 1.1607 1.172 1.1607 1.172s-.1364-.9488-.6693-1.627c-.6117-.7793-1.4418-1.0878-2.0343-1.2167.3696-.049.8023-.0526 1.2687.0559zM11.257 9.9964.1124 7.7623c-.0887-.0176-.1485.088-.0877.1547l3.5377 3.9094c1.0824-.1919 2.1748-.2009 3.2488.0342 1.6084.352 3.1082 1.0626 4.5816 1.7776zm-3.0057 7.0091-.6383-.7071c.4314-.2386.861-.4798 1.2878-.7262.7147-.4125 1.4164-.8508 2.1327-1.2622-1.6736-.961-2.9471-1.5586-4.0263-1.9281-1.089-.4295-2.2841-.5153-3.4447-.5554l4.0445 4.4695c-.0184.014-.153.1136-.377.246-1.339.7925-2.1517.9026-3.2395.983 1.0017.2088 1.4249.4835 2.892.1527.5157-.1161 1.3428-.649 1.3711-.6673l3.4057 3.7637-.2149-5.7579c-.8341.501-1.6592 1.0165-2.4817 1.5383m3.7805-6.558-.136 3.6418c1.4735-.715 2.9733-1.4256 4.5819-1.7776 1.0738-.235 2.1662-.226 3.2486-.0342l3.5377-3.9093c.0607-.0668.001-.1724-.0876-.1547m-3.4501 4.064-4.0445 4.4695c.0184.014.153.1136.377.2459 1.339.7926 2.1517.9027 3.2395.983-1.0016.209-1.4249.4836-2.892.1528-.5157-.1161-1.3428-.649-1.371-.6674l-3.4058 3.7638.2149-5.7579c1.0759.6445 2.134 1.3178 3.193 1.9894l.6383-.7072a80.1445 80.1445 0 0 1-1.2877-.7262c-.7147-.4125-1.4164-.8508-2.1327-1.2622 1.9488-1.1083 3.051-1.5941 4.0263-1.928 1.089-.4296 2.284-.5154 3.4447-.5555"
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
export class SiSaudiaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#026938');
}
