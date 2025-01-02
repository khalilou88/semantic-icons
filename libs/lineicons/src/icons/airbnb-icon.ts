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
  selector: 'svg[si-airbnb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.0291 16.2143C20.9291 15.9741 20.8289 15.7139 20.7289 15.4935C20.5685 15.1333 20.4083 14.7927 20.2685 14.4726L20.2485 14.4526C18.8669 11.4494 17.3857 8.40667 15.824 5.40394L15.764 5.28353C15.5997 4.97203 15.4396 4.65835 15.2838 4.34256C15.0834 3.98196 14.8834 3.60197 14.563 3.24138C13.9224 2.44059 13.0014 2 12.0206 2C11.0195 2 10.1187 2.44059 9.4583 3.20118C9.15791 3.56137 8.93751 3.94177 8.73751 4.30236C8.58127 4.61795 8.42119 4.93163 8.25732 5.24334L8.19712 5.36373C6.65555 8.36647 5.15418 11.4094 3.77281 14.4124L3.75261 14.4522C3.61262 14.7729 3.45222 15.1131 3.29202 15.4731C3.19202 15.6935 3.09203 15.9337 2.99203 16.1939C2.73163 16.9345 2.65143 17.6353 2.75183 18.3563C2.97202 19.8578 3.9728 21.1186 5.35438 21.6796C5.87497 21.9 6.41556 22 6.97594 22C7.13614 22 7.33614 21.98 7.49654 21.9598C8.15733 21.8798 8.83791 21.6598 9.4987 21.2794C10.3195 20.8188 11.1003 20.1584 11.981 19.1975C12.8618 20.1584 13.6626 20.8188 14.4634 21.2794C15.1244 21.6598 15.8048 21.8798 16.4654 21.9598C16.6256 21.9802 16.8259 22 16.9861 22C17.5467 22 18.1071 21.9 18.6075 21.6796C20.0091 21.1186 20.9899 19.8378 21.2103 18.3563C21.3693 17.6557 21.2893 16.9553 21.0291 16.2143ZM12.0004 17.2553C10.9193 15.8939 10.2185 14.6127 9.97849 13.532C9.87849 13.0714 9.85829 12.671 9.91849 12.3106C9.95829 11.9902 10.0787 11.7098 10.2389 11.4696C10.6193 10.9294 11.2599 10.5888 12.0006 10.5888C12.7416 10.5888 13.4022 10.9092 13.7626 11.4696C13.9228 11.7098 14.0428 11.9904 14.0832 12.3106C14.143 12.6712 14.123 13.0914 14.023 13.532C13.782 14.5927 13.0812 15.8741 12.0004 17.2553ZM19.9879 18.1963C19.8479 19.2373 19.1471 20.1384 18.1663 20.5388C17.6859 20.7388 17.1651 20.799 16.645 20.7388C16.1446 20.6786 15.6438 20.5184 15.1236 20.2184C14.4028 19.8176 13.6822 19.1975 12.8412 18.2763C14.1624 16.6549 14.9632 15.1731 15.2636 13.8522C15.4038 13.2314 15.424 12.671 15.3636 12.1502C15.2838 11.6498 15.1034 11.1892 14.8232 10.7888C14.2022 9.88764 13.161 9.36745 12.0002 9.36745C10.8395 9.36745 9.79829 9.90804 9.1777 10.7888C8.89751 11.1892 8.71711 11.6498 8.63711 12.1502C8.55711 12.671 8.57691 13.2514 8.73711 13.8522C9.0373 15.1731 9.85809 16.6747 11.1593 18.2963C10.3385 19.2173 9.59769 19.838 8.87691 20.2384C8.35632 20.5388 7.85613 20.699 7.35574 20.7588C6.81535 20.819 6.29456 20.7388 5.83417 20.5588C4.85339 20.1584 4.1526 19.2573 4.01261 18.2163C3.95261 17.7159 3.99241 17.2155 4.1928 16.6549C4.2526 16.4545 4.353 16.2545 4.453 16.0143C4.59319 15.6939 4.75299 15.3533 4.91339 15.0131L4.93359 14.9733C6.31476 11.9902 7.79613 8.94726 9.3377 5.98452L9.3977 5.86412C9.5581 5.56413 9.7183 5.24374 9.87829 4.94334C10.0385 4.62295 10.2185 4.32255 10.4389 4.06216C10.8593 3.58217 11.4197 3.32157 12.0404 3.32157C12.6612 3.32157 13.2216 3.58217 13.642 4.06216C13.8624 4.32315 14.0424 4.62355 14.2026 4.94334C14.363 5.24374 14.5232 5.56413 14.683 5.86412L14.7432 5.98452C16.2613 8.95957 17.7229 11.963 19.1275 14.9933V15.0133C19.2879 15.3341 19.4279 15.6941 19.5881 16.0149C19.6881 16.2547 19.7883 16.4547 19.8483 16.6551C20.0081 17.1751 20.0681 17.6759 19.9879 18.1963Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAirbnbIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
