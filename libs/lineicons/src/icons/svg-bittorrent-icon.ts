import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bittorrent-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7885 9.98565C21.6552 9.33983 21.4603 8.71451 21.2039 8.10969C20.9578 7.51512 20.6398 6.95131 20.2808 6.408C19.9219 5.87494 19.5116 5.38288 19.0603 4.93183C18.609 4.48078 18.1167 4.07073 17.5834 3.71194C17.0501 3.35315 16.4757 3.04562 15.8808 2.78934C15.2757 2.53306 14.6501 2.33829 14.0039 2.20502C13.3475 2.07176 12.6706 2 11.9937 2C11.3167 2 10.6501 2.08201 9.99365 2.21527C9.3475 2.34854 8.72186 2.54331 8.11673 2.79959C7.52186 3.04562 6.95775 3.3634 6.41416 3.72219C5.88083 4.08098 5.38852 4.49103 4.93724 4.94208C4.48596 5.39313 4.0757 5.88519 3.71673 6.41825C3.35775 6.95131 3.05006 7.52537 2.79365 8.11994C2.53724 8.72476 2.34237 9.35008 2.20903 9.9959C2.0757 10.652 2.00391 11.3285 2.00391 12.0051C2.00391 12.6817 2.0757 13.3583 2.20903 14.0144C2.34237 14.6602 2.53724 15.2855 2.79365 15.8903C3.0398 16.4849 3.35775 17.0487 3.71673 17.592C4.0757 18.1251 4.48596 18.6171 4.93724 19.0682C5.38852 19.5192 5.88083 19.9293 6.41416 20.2881C6.9475 20.6468 7.52186 20.9544 8.11673 21.2107C8.72186 21.4669 9.3475 21.6617 9.99365 21.795C10.6501 21.9282 11.327 22 12.0039 22C12.6808 22 13.3578 21.9282 14.0142 21.795C14.6603 21.6617 15.286 21.4669 15.8911 21.2107C16.486 20.9646 17.0501 20.6468 17.5937 20.2881C18.127 19.9293 18.6193 19.5192 19.0706 19.0682C19.5219 18.6171 19.9321 18.1251 20.2911 17.592C20.6501 17.0589 20.9578 16.4849 21.2142 15.8903C21.4706 15.2855 21.6654 14.6602 21.7988 14.0144C21.9321 13.3583 22.0039 12.6817 22.0039 12.0051C21.9937 11.3183 21.9219 10.6417 21.7885 9.98565ZM12.0039 20.7289C7.17314 20.7289 3.26544 16.8129 3.26544 11.9949C3.26544 7.17683 7.18339 3.26089 12.0039 3.26089C16.8244 3.26089 20.7424 7.17683 20.7424 11.9949C20.7424 16.8232 16.8347 20.7289 12.0039 20.7289Z"
        fill="#323544"
      />
      <path
        d="M12.3936 19.9805C12.4347 19.9805 12.4757 19.9805 12.5167 19.9703H12.527C12.568 19.9703 12.5988 19.9703 12.6398 19.96H12.6706C12.7013 19.96 12.7321 19.96 12.7629 19.9498H12.7936C12.8244 19.9498 12.8552 19.9395 12.8962 19.9395H12.9167C12.9578 19.9395 12.9988 19.9293 13.0398 19.9293C13.0808 19.9293 13.1116 19.919 13.1526 19.9088H13.1731C13.2039 19.9088 13.2347 19.8985 13.2654 19.8985H13.286C13.327 19.8883 13.3577 19.8883 13.3988 19.878C13.4808 19.8678 13.5629 19.8473 13.6347 19.8268H13.6552C13.686 19.8165 13.727 19.8165 13.7578 19.8063H13.768C13.8501 19.7858 13.9219 19.7652 14.0039 19.7447C13.0193 19.7755 12.2193 19.6422 11.7167 19.5295C10.5885 19.2834 9.5116 18.8426 8.59877 18.0841C7.08083 16.8129 6.30134 14.9882 6.32185 13.1738C6.33211 11.8206 6.79365 10.4675 7.72698 9.36033C8.89621 7.97642 10.5577 7.24859 12.2603 7.20758H12.4962V5.84418H12.2295C11.7065 5.85443 11.1936 5.91594 10.6911 6.0287C10.1783 6.14146 9.68595 6.31573 9.21416 6.53101C8.73211 6.75653 8.28083 7.03331 7.86031 7.3511C7.42954 7.67914 7.02954 8.05843 6.68083 8.47873C6.35262 8.86827 6.06544 9.28857 5.82954 9.73962C5.59365 10.1702 5.40903 10.6315 5.26544 11.103C5.13211 11.5643 5.02954 12.0461 4.98852 12.5279C4.97826 12.6817 4.96801 12.8252 4.95775 12.979V13.2455C4.96801 13.7683 5.02954 14.2809 5.14236 14.7832C5.25518 15.2957 5.42954 15.7878 5.64493 16.2594C5.90134 16.8232 6.36288 17.6535 7.05006 18.2788C8.4039 19.3449 10.1167 19.9805 11.9731 19.9805H12.3936Z"
        fill="#323544"
      />
      <path
        d="M14.3936 18.6581C13.9218 18.6479 13.3372 18.5761 12.886 18.4941C10.7731 18.1148 8.95775 16.8232 8.29108 14.8754C7.48083 12.5074 8.72185 9.94464 11.0808 9.16556C11.5424 9.01179 12.0039 8.94003 12.4757 8.94003C13.0808 8.94003 13.686 9.06304 14.2398 9.28857L14.8142 8.06868C14.6398 7.99693 14.4654 7.93542 14.2911 7.87391C13.7065 7.68939 13.0911 7.59713 12.4757 7.59713C11.8603 7.59713 11.2449 7.69964 10.6603 7.89441C9.91159 8.14044 9.22441 8.54024 8.6398 9.06305C8.36288 9.30907 8.09621 9.59611 7.87057 9.89339C7.64493 10.1907 7.45006 10.5085 7.28595 10.8467C7.12185 11.185 6.98852 11.5336 6.89621 11.8924C6.8039 12.2512 6.73211 12.6304 6.71159 13.0097C6.66031 13.7888 6.76288 14.5679 7.01929 15.306C7.2757 16.0543 7.68595 16.7412 8.25006 17.346C8.75262 17.8893 9.33724 18.2993 10.0449 18.6786C10.7834 19.0682 11.6962 19.2732 12.6501 19.4065C13.2654 19.4885 14.086 19.509 14.568 19.509C14.9885 19.3552 15.1629 19.2834 15.3885 19.1912C15.5834 19.0989 15.7783 19.0067 15.9731 18.8939C16.168 18.7811 16.1988 18.7606 16.527 18.5454C16.5577 18.5249 16.5885 18.5044 16.609 18.4839C15.4808 18.6889 15.1936 18.6786 14.3936 18.6581Z"
        fill="#323544"
      />
      <path
        d="M16.9167 17.141C16.5988 17.1615 16.1475 17.1922 15.6347 17.1922C14.7219 17.1922 13.6039 17.1102 12.6501 16.7924C11.1731 16.3004 9.77826 15.0395 9.77826 13.4813C9.77826 11.9231 11.0398 10.6725 12.5885 10.6725C13.6449 10.6725 14.5578 11.2568 15.0398 12.1076L16.2603 11.5028C16.0654 11.144 15.8295 10.816 15.5321 10.529C15.1526 10.1497 14.7013 9.84213 14.209 9.63711C13.6962 9.42183 13.1526 9.30907 12.5885 9.30907C12.0244 9.30907 11.4808 9.42183 10.968 9.63711C10.4757 9.84213 10.0244 10.1497 9.64493 10.529C9.26544 10.9083 8.95775 11.3593 8.75262 11.8514C8.53724 12.3639 8.42442 12.9072 8.42442 13.471C8.42442 14.0349 8.54749 14.5987 8.78339 15.1317C8.99878 15.6033 9.29621 16.0441 9.6757 16.4541C10.3424 17.1717 11.2552 17.7458 12.2295 18.0738C13.1629 18.3813 14.5372 18.4941 15.8706 18.4018C16.2398 18.3813 16.5167 18.3403 16.9885 18.2378C17.4398 17.879 17.8603 17.469 18.2193 17.0179C17.9116 17.0487 17.327 17.1102 16.9167 17.141Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBittorrentIcon {
  readonly class = input('');
}
