import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-helicopter-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.125 6.73438H13.875V8.23425H14.0008C17.7287 8.23425 20.7508 11.2563 20.7508 14.9843V15.4174C20.7508 16.66 19.7434 17.6674 18.5008 17.6674H12.1297C11.4181 17.6674 10.7484 17.3307 10.3239 16.7596L7.63552 13.1428C7.52047 12.988 7.3502 12.8835 7.1601 12.851L4.42964 12.3837C3.47915 12.2211 2.73798 11.4708 2.58693 10.5184L2.00539 6.85186C1.95547 6.53713 2.10988 6.22523 2.39042 6.07409C2.67096 5.92296 3.01637 5.9656 3.25173 6.18042L5.28722 8.03826C5.42541 8.16439 5.60574 8.23431 5.79283 8.23431L12.375 8.23425V6.73438H7.12503C6.71082 6.73438 6.37503 6.39859 6.37503 5.98438C6.37503 5.57016 6.71082 5.23438 7.12503 5.23438H19.125C19.5392 5.23438 19.875 5.57016 19.875 5.98438C19.875 6.39859 19.5392 6.73438 19.125 6.73438ZM13.1114 9.73425L5.79285 9.73431C5.23158 9.73431 4.69057 9.52454 4.27601 9.14616L3.82235 8.7321L4.06841 10.2835C4.11876 10.6009 4.36581 10.851 4.68265 10.9052L7.4131 11.3725C7.98342 11.4701 8.49421 11.7836 8.83938 12.248L11.5277 15.8648C11.6692 16.0551 11.8925 16.1674 12.1297 16.1674H18.5008C18.915 16.1674 19.2508 15.8316 19.2508 15.4174V14.9843C19.2508 12.0848 16.9003 9.73425 14.0008 9.73425H13.1387L13.125 9.73438L13.1114 9.73425Z"
      fill="#323544"
    />
    <svg:path
      d="M22.3938 19.3483C22.7464 19.1308 22.8558 18.6687 22.6383 18.3162C22.4208 17.9636 21.9587 17.8542 21.6062 18.0717L20.7345 18.6095C20.1427 18.9746 19.461 19.168 18.7655 19.168H9.7898C9.37558 19.168 9.0398 19.5038 9.0398 19.918C9.0398 20.3322 9.37558 20.668 9.7898 20.668H18.7655C19.7391 20.668 20.6936 20.3973 21.5222 19.8861L22.3938 19.3483Z"
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
export class SiHelicopter2Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
