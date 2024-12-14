import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-claude-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.92888 16.2181L9.86008 14.0122L9.92585 13.8199L9.86008 13.7137H9.66782L9.01009 13.6732L6.76369 13.6125L4.81581 13.5315L2.92863 13.4303L2.45304 13.3292L2.00781 12.7423L2.05335 12.4488L2.45304 12.1807L3.02476 12.2313L4.28962 12.3173L6.18692 12.4488L7.56309 12.5298L9.60204 12.7423H9.92585L9.97138 12.6107L9.86008 12.5298L9.77407 12.4488L7.811 11.1182L5.68603 9.71165L4.57295 8.90214L3.97088 8.49233L3.66731 8.10781L3.53577 7.26794L4.08219 6.66587L4.81581 6.71646L5.00301 6.76706L5.74674 7.33877L7.33541 8.56822L9.40979 10.0962L9.71335 10.3491L9.83478 10.2631L9.84996 10.2024L9.71335 9.97475L8.5851 7.93579L7.38095 5.86141L6.84465 5.00131L6.70298 4.48524C6.65239 4.27275 6.61697 4.09567 6.61697 3.87811L7.23928 3.03318L7.58332 2.92188L8.41307 3.03318L8.76218 3.33675L9.27824 4.5156L10.113 6.37242L11.4083 8.89708L11.7877 9.64588L11.9901 10.339L12.066 10.5515H12.1975V10.4301L12.3038 9.00839L12.5011 7.26288L12.6934 5.01649L12.7591 4.38406L13.0728 3.62514L13.6951 3.21532L14.1808 3.44806L14.5805 4.01978L14.5249 4.38912L14.2871 5.93225L13.8216 8.35066L13.5181 9.96969H13.6951L13.8975 9.76731L14.7171 8.67953L16.0933 6.95931L16.7005 6.27629L17.4088 5.52243L17.8641 5.16321H18.7242L19.3567 6.10427L19.0733 7.07568L18.1879 8.19888L17.4543 9.15006L16.4019 10.5667L15.7442 11.7L15.8049 11.7911L15.9618 11.7759L18.3397 11.27L19.6248 11.0372L21.1578 10.7741L21.851 11.0979L21.9269 11.4268L21.6537 12.0997L20.0144 12.5045L18.0918 12.889L15.2282 13.567L15.1927 13.5923L15.2332 13.6428L16.5234 13.7643L17.0749 13.7946H18.4257L20.9403 13.9818L21.598 14.4169L21.9926 14.9482L21.9269 15.3529L20.915 15.869L19.5489 15.5452L16.3615 14.7863L15.2686 14.5131H15.1168V14.6041L16.0275 15.4946L17.6972 17.0023L19.7867 18.9451L19.893 19.4258L19.6248 19.8053L19.3415 19.7648L17.5049 18.3835L16.7966 17.7612L15.1927 16.4104H15.0865V16.552L15.4558 17.0934L17.4088 20.0279L17.51 20.9285L17.3683 21.2219L16.8624 21.399L16.3058 21.2978L15.1624 19.6939L13.9835 17.8877L13.0324 16.2687L12.916 16.3345L12.3544 22.3805L12.0913 22.6891L11.4842 22.9219L10.9782 22.5374L10.7101 21.915L10.9782 20.6856L11.302 19.0818L11.5651 17.8068L11.8029 16.2232L11.9446 15.697L11.9345 15.6616L11.8181 15.6767L10.6241 17.316L8.80771 19.7698L7.37083 21.3079L7.02679 21.4445L6.42977 21.1359L6.48542 20.5844L6.81935 20.0936L8.80771 17.5639L10.0068 15.9955L10.7809 15.0898L10.7758 14.9583H10.7303L5.44824 18.3886L4.50718 18.51L4.10242 18.1306L4.15302 17.5083L4.34528 17.3059L5.93394 16.213L5.92888 16.2181Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgClaudeIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
