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
  selector: 'svg[si-airbyte-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Airbyte</svg:title>
    <svg:path
      d="M8.308 2.914C10.876.027 15.128-.819 18.624.848c4.644 2.21 6.339 7.846 3.809 12.194l-5.687 9.77c-.319.547-.842.944-1.455 1.107-.613.163-1.267.079-1.818-.236l6.887-11.832c1.835-3.155.608-7.243-2.758-8.854-2.528-1.208-5.613-.604-7.482 1.473-1.031 1.139-1.608 2.613-1.628 4.145-.018 1.532.524 3.019 1.524 4.185.179.21.372.406.579.588l-4.021 6.919c-.157.273-.365.51-.617.699-.249.189-.534.329-.838.411-.303.081-.621.1-.93.061-.313-.041-.614-.143-.885-.298l4.364-7.513C7.041 12.77 6.59 11.763 6.34 10.7l-2.675 4.612c-.317.545-.842.944-1.453 1.107-.615.164-1.269.079-1.818-.237L7.31 4.284c.29-.487.622-.948.998-1.37Zm7.983 3.784c1.666.956 2.242 3.081 1.277 4.734L10.936 22.81c-.317.547-.84.945-1.455 1.109-.612.162-1.268.079-1.816-.237l6.159-10.596c-.495-.1-.96-.308-1.365-.61-.405-.3-.743-.682-.981-1.122-.242-.441-.385-.928-.418-1.428-.033-.501.045-1.002.224-1.47.18-.468.462-.893.824-1.242.362-.35.795-.618 1.273-.784.474-.168.982-.23 1.485-.183.502.046.989.2 1.425.451Zm-2.412 2.139c-.114.087-.21.196-.282.32-.106.186-.158.398-.144.613.014.215.092.42.224.592.13.167.31.297.515.367.207.068.427.077.636.02.209-.056.396-.172.54-.334.143-.161.234-.36.263-.574.027-.213-.008-.43-.105-.622-.097-.195-.246-.354-.433-.46-.126-.072-.263-.118-.406-.136-.143-.02-.286-.01-.424.026-.14.038-.271.101-.384.188Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAirbyteIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '615EFF');
  }
}
