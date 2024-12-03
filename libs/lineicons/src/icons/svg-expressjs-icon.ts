import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-expressjs-icon',
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
        d="M20.4929 6.72509C20.7487 6.39125 21.145 6.19511 21.5657 6.19511H21.9059L17.5144 11.9376L22 17.8035H21.6598C21.2391 17.8035 20.8428 17.6073 20.5874 17.2735L17.0108 12.5965L13.4342 17.2735C13.1788 17.6073 12.7826 17.8035 12.3619 17.8035H12.0216L16.5072 11.9376L12.1157 6.19511H12.4559C12.8762 6.19511 13.2729 6.39125 13.5279 6.72509L17.0104 11.2792L20.4929 6.72509Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.56256 17.1462C7.48675 17.8483 9.4994 17.0521 10.5217 15.4986C10.7219 15.194 11.0529 15.0014 11.4176 15.0014H11.673C10.7331 17.4376 7.95309 18.857 5.30998 17.9059C3.28693 17.1778 2 15.1792 2 13.0292V10.7984C2 7.88032 4.51101 5.53783 7.48595 5.81763C10.0786 6.06141 12.0072 8.34105 12.0072 10.9449V12.5997H2.80058V13.0436C2.80058 14.8457 3.86975 16.5285 5.56256 17.1462ZM7.0036 6.59539C4.68593 6.59539 2.80058 8.48075 2.80058 10.7984V11.7991H11.2066V10.7984C11.2066 8.48075 9.32127 6.59539 7.0036 6.59539Z"
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
export class SvgExpressjsIcon {
  readonly class = input('');
}