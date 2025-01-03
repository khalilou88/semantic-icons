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
  selector: 'svg[si-snapchat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.9285 16.5573C21.7895 16.1792 21.5248 15.9768 21.2233 15.8092C21.1666 15.776 21.1145 15.7495 21.07 15.729C20.9801 15.6825 20.8881 15.6376 20.7966 15.59C19.8569 15.0918 19.1232 14.4633 18.6142 13.7183C18.4697 13.5085 18.3443 13.2862 18.2396 13.054C18.1962 12.9298 18.1983 12.8593 18.2294 12.7949C18.2603 12.7453 18.3012 12.7026 18.3495 12.6697C18.511 12.5629 18.6775 12.4546 18.7905 12.3815C18.9918 12.2512 19.1513 12.148 19.254 12.0749C19.6398 11.8051 19.9096 11.5184 20.0782 11.198C20.1958 10.9767 20.2645 10.7326 20.2794 10.4824C20.2943 10.2321 20.2551 9.98158 20.1645 9.74784C19.9091 9.07536 19.2739 8.65788 18.5043 8.65788C18.342 8.65775 18.1801 8.67487 18.0215 8.709C17.979 8.7182 17.9366 8.72791 17.8952 8.73862C17.9024 8.27875 17.8922 7.79329 17.8513 7.31552C17.7062 5.63587 17.118 4.75543 16.5048 4.05333C16.1121 3.61336 15.6496 3.24114 15.1359 2.95163C14.2054 2.42019 13.1502 2.15039 11.9999 2.15039C10.8496 2.15039 9.79955 2.42019 8.86803 2.95163C8.353 3.24122 7.88955 3.61419 7.49652 4.05537C6.88332 4.75748 6.29516 5.63946 6.15006 7.31755C6.10916 7.79533 6.09894 8.28333 6.10558 8.74068C6.06419 8.72994 6.02229 8.72023 5.9799 8.71104C5.82119 8.67691 5.65932 8.65978 5.497 8.65994C4.72693 8.65994 4.09075 9.07742 3.83627 9.74987C3.74531 9.98375 3.70576 10.2344 3.72031 10.4849C3.73486 10.7354 3.80316 10.9799 3.92058 11.2016C4.08972 11.522 4.35953 11.8087 4.74533 12.0785C4.84753 12.15 5.00745 12.2532 5.20881 12.3851C5.31765 12.4556 5.47655 12.5588 5.63242 12.662C5.68694 12.6973 5.73329 12.7438 5.76832 12.7985C5.80103 12.8654 5.80206 12.9375 5.75352 13.0703C5.65026 13.2976 5.52697 13.5154 5.3851 13.7208C4.88738 14.449 4.17506 15.0663 3.26549 15.5604C2.78363 15.8159 2.28285 15.9866 2.0713 16.5614C1.91187 16.9953 2.01611 17.4889 2.42133 17.9048C2.57005 18.0601 2.74254 18.1906 2.93233 18.2916C3.32722 18.5086 3.74712 18.6766 4.18273 18.7919C4.27262 18.8151 4.35796 18.8533 4.43515 18.9048C4.58283 19.0341 4.56188 19.2288 4.75861 19.5139C4.85737 19.6613 4.98284 19.7889 5.12858 19.89C5.54145 20.1752 6.00545 20.193 6.497 20.212C6.94106 20.2288 7.44439 20.2482 8.01926 20.4378C8.25739 20.5165 8.50471 20.6688 8.79139 20.8466C9.47968 21.2697 10.422 21.8487 11.9989 21.8487C13.5758 21.8487 14.5247 21.2666 15.2181 20.842C15.5028 20.6673 15.7485 20.5165 15.98 20.4399C16.5549 20.2498 17.0582 20.2309 17.5023 20.214C17.9938 20.1951 18.4578 20.1772 18.8707 19.8921C19.0433 19.7717 19.1871 19.6147 19.2918 19.4322C19.4333 19.1915 19.4297 19.0234 19.5626 18.9059C19.635 18.8567 19.7152 18.8201 19.7997 18.7975C20.2413 18.6819 20.6669 18.5124 21.067 18.2927C21.2686 18.1845 21.4501 18.0424 21.6035 17.8726L21.6086 17.8665C21.9888 17.4597 22.0844 16.9804 21.9285 16.5573ZM20.5268 17.3106C19.672 17.7827 19.1037 17.7321 18.6617 18.0167C18.2861 18.2584 18.5084 18.7796 18.2355 18.9677C17.9004 19.1992 16.9095 18.9513 15.6295 19.3739C14.5738 19.7229 13.9003 20.7265 12.0014 20.7265C10.1026 20.7265 9.44494 19.725 8.37184 19.3714C7.09435 18.9488 6.10152 19.1966 5.76577 18.9651C5.49342 18.7771 5.71468 18.2559 5.33961 18.0142C4.89709 17.7296 4.32887 17.7801 3.47449 17.3106C2.93028 17.0101 3.23892 16.8241 3.42032 16.7362C6.51694 15.2369 7.01106 12.9221 7.03303 12.7504C7.05961 12.5425 7.08926 12.3789 6.86032 12.1674C6.63906 11.963 5.65745 11.3554 5.3851 11.1653C4.93439 10.8506 4.73613 10.5363 4.88227 10.15C4.98448 9.88275 5.23384 9.78207 5.49545 9.78207C5.57816 9.78233 5.66058 9.79158 5.74126 9.80968C6.2359 9.91697 6.71623 10.1648 6.99371 10.2317C7.0271 10.2403 7.06142 10.245 7.0959 10.2456C7.2441 10.2456 7.29619 10.1709 7.286 10.0013C7.25429 9.46016 7.17765 8.40546 7.263 7.41975C7.38 6.06358 7.8169 5.39162 8.33606 4.79734C8.58545 4.51169 9.75716 3.27356 11.9979 3.27356C14.2385 3.27356 15.4133 4.50658 15.6627 4.7912C16.1824 5.38549 16.6198 6.05746 16.7358 7.41362C16.8211 8.39933 16.7475 9.45452 16.7128 9.99517C16.701 10.1735 16.7547 10.2394 16.9029 10.2394C16.9374 10.2389 16.9717 10.2342 17.0051 10.2256C17.2831 10.1587 17.7634 9.91084 18.258 9.80355C18.3387 9.78546 18.4211 9.7762 18.5038 9.77594C18.767 9.77594 19.0148 9.87813 19.117 10.1438C19.2632 10.5302 19.0659 10.8444 18.6147 11.1592C18.3424 11.3493 17.3607 11.9564 17.1395 12.1613C16.91 12.3728 16.9402 12.5363 16.9667 12.7443C16.9887 12.9186 17.4824 15.2334 20.5795 16.73C20.7624 16.8215 21.0711 17.0075 20.5268 17.3106Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSnapchatIcon implements OnInit {
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