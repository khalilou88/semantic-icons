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
  selector: 'svg[si-snapdragon-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Snapdragon</title>
    <svg:path
      d="M12 .016h-.351c-3.223.128-6.862 2.202-7.596 5.49-.032.127-.191.127-.223 0-.16-.799-.128-1.66.096-2.394a12.645 12.645 0 0 0-1.82 2.074 6.473 6.473 0 0 0-.638 1.34c-.447 1.405-.287 3.096.702 4.245.926 1.085 2.394 1.468 3.575 2.202 1.18.703 2.202 1.66 2.68 3 .511 1.405.416 3-.127 4.373-.032.127-.223.095-.223-.064.127-2.01-.894-3.894-2.777-4.787-.99-.447-2.106-.639-3.096-1.117C1.31 13.963.16 13.133 0 12.048c0 6.574 5.362 11.936 12 11.936 6.607 0 12-5.362 12-12S18.607.016 12 .016m8.745 18.638a11.663 11.663 0 0 1-3.255 2.872s0-.032.032-.032c-.83.479-1.724.894-2.681 1.15.734-.607 3.127-2.171 3.127-6.48 0-3.191-2.01-5.33-4.276-6.382C11.107 8.569 8.33 7.93 8.33 4.675c0-1.723 1.372-3.574 3.51-3.606.128-.032.288-.032.416-.032h.127a10.827 10.827 0 0 1 7.5 3.35 10.923 10.923 0 0 1 3.096 7.66v.064c0 1.34-.255 2.65-.702 3.862v.032c-.032.096-.096.223-.128.32-.032.063-.064.127-.064.159s-.032.032-.032.064a13.475 13.475 0 0 1-1.308 2.106"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSnapdragonIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
