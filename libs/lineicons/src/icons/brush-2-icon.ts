import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-brush-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.4134 3.74386C20.6248 2.95524 19.3554 2.92634 18.5317 3.67826L8.73802 12.6187C8.65871 12.6136 8.57911 12.611 8.49933 12.611C7.3743 12.6107 6.25129 13.1268 5.48296 14.3131C5.47022 14.3328 5.4584 14.353 5.44756 14.3738C4.74186 15.7261 3.98226 16.4712 3.43229 16.873C3.15572 17.0751 2.92752 17.1937 2.77882 17.2594C2.70437 17.2923 2.64961 17.3121 2.61847 17.3224C2.60289 17.3276 2.59322 17.3304 2.58995 17.3314L2.59359 17.3305L2.59639 17.3298L2.59803 17.3294L2.77346 18.0586L2.58995 17.3314C2.31406 17.401 2.10095 17.6209 2.04051 17.8996C1.97935 18.1815 2.08535 18.4736 2.31313 18.6507L2.77346 18.0586C2.31313 18.6507 2.31313 18.6507 2.31313 18.6507L2.31408 18.6514L2.31549 18.6525L2.31966 18.6557L2.33336 18.6662C2.34484 18.6749 2.36099 18.6871 2.3816 18.7025C2.4228 18.7332 2.48189 18.7764 2.55713 18.8297C2.70746 18.9362 2.92304 19.0832 3.18988 19.2498C3.7209 19.5812 4.4678 19.9982 5.3164 20.3251C6.96082 20.9587 9.29277 21.3585 11.0215 19.6298C11.8722 18.7791 12.3633 17.659 12.4112 16.5589L21.479 6.62558C22.231 5.80189 22.2021 4.53248 21.4134 3.74386ZM12.0403 14.7402C11.8772 14.412 11.6593 14.1045 11.3834 13.8286C11.1043 13.5495 10.7783 13.3067 10.4215 13.1129L19.543 4.78608C19.7745 4.5748 20.1312 4.58292 20.3528 4.80452C20.5744 5.02612 20.5825 5.38282 20.3712 5.61427L12.0403 14.7402ZM4.31717 18.0842C5.05255 17.5469 5.95469 16.6325 6.75989 15.1012C7.24231 14.3737 7.87696 14.1109 8.49898 14.111C9.16228 14.1111 9.84759 14.4141 10.3227 14.8893C11.1657 15.7323 11.1559 17.374 9.96082 18.5692C8.89948 19.6305 7.37259 19.5099 5.85567 18.9254C5.24862 18.6916 4.69155 18.3997 4.24523 18.1359C4.26901 18.1191 4.29299 18.1019 4.31717 18.0842Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrush2Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
