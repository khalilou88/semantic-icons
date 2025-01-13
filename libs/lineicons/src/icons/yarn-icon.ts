import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-yarn-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.457 15.1768C14.457 15.3168 14.4347 15.4544 14.4125 15.5913C14.4027 15.6513 14.393 15.7112 14.3852 15.7712C14.3637 15.9437 14.3811 15.9635 14.5561 15.933C14.9499 15.8653 15.3057 15.6993 15.6491 15.5045C15.7472 15.4485 15.844 15.3905 15.9407 15.3325L15.9416 15.332C16.2069 15.1729 16.4717 15.0143 16.7594 14.8994C17.0632 14.7772 17.3736 14.6963 17.7038 14.6963C17.9903 14.6963 18.1892 14.8515 18.2239 15.0967C18.2569 15.3237 18.1323 15.5408 17.9044 15.5887C17.2531 15.7266 16.6909 16.0477 16.1427 16.4043C15.408 16.879 14.6081 17.2216 13.7751 17.4841C13.7685 17.4861 13.7615 17.488 13.7543 17.4898C13.7284 17.4967 13.7007 17.5039 13.6851 17.5188C13.4887 17.7268 13.2286 17.7615 12.9661 17.7962C12.2396 17.8915 11.5083 17.9345 10.7753 17.9777L10.775 17.9777L10.7454 17.9795C10.5316 17.9927 10.317 17.9993 10.1032 17.958C9.76224 17.8903 9.61777 17.7632 9.56576 17.4833C9.51953 17.2315 9.63758 16.9938 9.88937 16.8295C9.90975 16.8161 9.93113 16.8027 9.95916 16.7852L9.98595 16.7684C9.85056 16.685 9.73912 16.5868 9.65409 16.4646C9.61281 16.4077 9.59052 16.4431 9.57732 16.491C9.55662 16.5701 9.53572 16.6495 9.51481 16.729L9.48823 16.8301C9.47633 16.8754 9.46447 16.9206 9.45267 16.9657C9.42459 17.0705 9.3891 17.1737 9.34535 17.2736C9.21821 17.5642 8.98706 17.7046 8.6808 17.7326C8.36792 17.7607 8.0732 17.6913 7.79335 17.5535C7.601 17.4594 7.54404 17.3174 7.60761 17.1093C7.63949 17.0017 7.69986 16.908 7.77236 16.7953L7.78014 16.7833C7.51597 16.8361 7.39957 16.6825 7.30794 16.4968C7.10238 16.0898 7.03221 15.6597 7.11559 15.2139C7.18328 14.8598 7.39132 14.5717 7.64063 14.3224C7.78674 14.1762 7.8305 14.0359 7.82637 13.8303C7.79335 12.6432 8.24161 11.6683 9.16455 10.9146C9.24545 10.8469 9.32635 10.7767 9.41139 10.7156C9.46422 10.6785 9.47 10.6545 9.42707 10.6001C9.1885 10.3004 9.00275 9.97513 8.91772 9.59704C8.82114 9.17107 8.9656 8.80123 9.18024 8.44708C9.21078 8.3992 9.25867 8.37526 9.3115 8.35544C9.58062 8.25886 9.80764 8.11274 10.0132 7.90718C10.4763 7.44406 11.0492 7.2319 11.7047 7.25997C11.7881 7.2641 11.8252 7.24016 11.8508 7.16173C11.9491 6.87527 12.0712 6.59955 12.2355 6.34446C12.2966 6.24787 12.3643 6.15871 12.4518 6.08689C12.6136 5.95316 12.7515 5.97297 12.8604 6.15046C13.055 6.4607 13.2065 6.79404 13.358 7.12744L13.3739 7.16255C13.4135 7.25006 13.4441 7.28061 13.5357 7.22117C13.643 7.15348 13.7627 7.1056 13.8833 7.06349C13.9799 7.03047 14.036 7.05276 14.0781 7.15348C14.2003 7.44819 14.2663 7.75694 14.3035 8.07394C14.306 8.09443 14.309 8.11479 14.312 8.13507C14.3218 8.20141 14.3315 8.26697 14.3233 8.33398C14.3188 8.46259 14.3215 8.59159 14.3243 8.72121C14.3247 8.74374 14.3252 8.76629 14.3257 8.78886C14.3264 8.82815 14.3271 8.86749 14.3274 8.9069C14.3274 8.93645 14.3237 8.9661 14.32 8.99585V8.99594C14.3131 9.05176 14.3061 9.10793 14.3233 9.16446C14.3035 9.68454 14.1656 10.1766 13.965 10.6529C13.7777 11.0965 13.5062 11.4902 13.2344 11.8844L13.2342 11.8846L13.2303 11.8904C13.123 12.0431 13.1254 12.0456 13.265 12.1702C13.9468 12.7844 14.3233 13.5563 14.4496 14.4569C14.4537 14.4916 14.4521 14.5288 14.4521 14.5659C14.4332 14.6219 14.4408 14.6767 14.4483 14.7312C14.452 14.7579 14.4557 14.7845 14.4562 14.8111C14.4593 14.8626 14.4562 14.914 14.4531 14.9653C14.4488 15.0365 14.4445 15.1072 14.457 15.1768Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.9966 11.7277C21.8562 6.35684 17.4694 2.00878 12.0044 1.99805C6.3429 1.99392 1.75048 6.72173 2.01053 12.4624C2.24414 17.6426 6.46507 21.8768 11.7707 21.9973C17.4454 22.1286 22.1452 17.4965 21.9966 11.7277ZM8.32086 9.00183C8.38608 8.7484 8.48019 8.50321 8.60072 8.26959C8.71877 8.04422 8.88717 7.87581 9.13153 7.79491C9.30655 7.73795 9.45266 7.63723 9.58392 7.50432C10.047 7.03872 10.6092 6.76795 11.263 6.69531C11.3704 6.68458 11.4248 6.64494 11.4661 6.54424C11.5644 6.30566 11.6865 6.07616 11.8483 5.87308C12.0622 5.60396 12.3181 5.40335 12.6879 5.42482C12.9215 5.43802 13.1164 5.53626 13.2583 5.72448C13.4177 5.93417 13.5357 6.16862 13.6496 6.40472C13.6868 6.48149 13.7173 6.50956 13.8114 6.48975C14.1565 6.41297 14.4364 6.56404 14.585 6.88518C14.7575 7.26079 14.8409 7.6587 14.8822 8.06568C14.9697 8.91185 14.9127 9.7448 14.6262 10.5555C14.4578 11.0318 14.2217 11.4735 13.9336 11.8887C13.899 11.9391 13.8899 11.9721 13.9378 12.0241C14.7096 12.8901 15.0877 13.8997 15.044 15.0629V15.1462C15.0879 15.1482 15.1238 15.1271 15.1577 15.1072C15.1659 15.1024 15.1739 15.0977 15.1818 15.0934C15.3473 15.0084 15.5057 14.9122 15.664 14.8159L15.6642 14.8158C15.832 14.7138 15.9999 14.6117 16.1766 14.523C16.6595 14.2803 17.1647 14.1102 17.7129 14.1143C18.5236 14.1209 19.0445 14.9101 18.7052 15.6135C18.5715 15.8909 18.3535 16.0882 18.0538 16.1534C17.5073 16.2756 17.0219 16.5232 16.5588 16.827C15.796 17.3339 14.9606 17.7103 14.0864 17.9984C14.0277 18.0183 13.9724 18.0422 13.9221 18.0818C13.6884 18.2568 13.4152 18.3287 13.1304 18.3683C12.2669 18.4888 11.3993 18.5408 10.5291 18.578C10.1709 18.5936 9.81425 18.5449 9.49724 18.3551C9.46617 18.3358 9.43652 18.3104 9.40713 18.2852L9.40708 18.2852C9.3561 18.2415 9.30591 18.1986 9.2504 18.1891C9.19848 18.1811 9.14224 18.2072 9.08489 18.2338C9.04833 18.2508 9.01131 18.268 8.97468 18.2766C8.41745 18.4013 7.89489 18.2965 7.41196 18.0034C7.1255 17.8309 6.99011 17.5576 7.00497 17.2208C7.00909 17.1308 6.9835 17.0656 6.93067 16.9938C6.6987 16.6702 6.5856 16.3012 6.52203 15.9115C6.39738 15.1446 6.67063 14.5106 7.1775 13.955C7.22538 13.9022 7.24272 13.8502 7.24272 13.78C7.24272 13.0131 7.38884 12.2825 7.78261 11.6138C8.00303 11.2398 8.28784 10.9187 8.60485 10.6281C8.66593 10.5736 8.67253 10.5365 8.63126 10.4663C8.49753 10.2434 8.41497 9.99824 8.34232 9.74893C8.30506 9.72225 8.30527 9.68665 8.30548 9.65058C8.30562 9.62751 8.30575 9.60425 8.2961 9.583C8.29476 9.56965 8.29429 9.5562 8.29381 9.54272C8.29364 9.5377 8.29346 9.53267 8.29324 9.52764C8.29222 9.50447 8.29023 9.48129 8.28289 9.45835V9.1851C8.29362 9.14547 8.29362 9.1042 8.29362 9.06292C8.30353 9.0431 8.2994 9.01669 8.32086 9.00183Z"
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
export class SiYarnIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
