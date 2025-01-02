import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-xubuntu-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Xubuntu</title>
    <svg:path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m3.914 4.4736c.3846-.044.1454 1.6067.0528 2.598-.0811.8681-.1263 1.154-.2886 2.1122-.051.301-.2008.6867-.6687.6314-.3924-.0498-.4553-.6959-.4424-.9954.0223-.5142.3031-1.7669.3933-2.217.1158-.5778.469-1.9566.9141-2.1196a.17.17 0 0 1 .0396-.0096m3.2264.7083c.5486.0198-.4157 1.75-.8093 2.6645-.2762.6417-.474 1.1556-.832 2.004-.1188.2813-.484.686-.906.4767-.3543-.1755-.233-.6916.0234-1.2897.369-.8616.6724-1.4374 1.0627-2.0867.3027-.5056.9341-1.6977 1.4033-1.7652a.34.34 0 0 1 .0579-.0037zm-9.2842.4702c.3118.0219.5717.1591.75.375.7699.932.6074 2.532.6746 3.7478 1.2.0653 2.19.2109 3.4687.5845.9745.2847 2.3231.7615 3.1128 1.2744.7867.511 1.377 1.1725 1.5 2.0625.0764.5522-.3435 1.106-.9192 1.612-.5748.5052-1.3265.98-2.1372 1.4253-.8103.445-1.6528.8491-2.3247 1.1624-1.4662.6837-3.0161 1.3499-4.9175 1.5417-5.1549.5202-4.5923-4.1579-4.3923-5.704.1558-1.2045.8004-2.942.9075-3.2586-.1404-.4457-.2497-.8216-.3355-1.2979-.073-.4046-.1122-.8711-.019-1.2751.0918-.398.3595-.8417.8027-1.0269.3513-.1467.6092-.0887.9375.2088.2703.2449.497.6077.7163.9873.3171.5488.4463 1.1183.7178 1.6758.0525.1077.3237.1574.482.1113.0367-.0107.0773-.1032.0563-.175-.3484-1.1915-.5975-2.1766-.424-3.0374.161-.799.8422-.9737 1.3432-.9939"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiXubuntuIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
