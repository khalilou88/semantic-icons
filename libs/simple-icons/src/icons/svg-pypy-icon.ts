import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pypy-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PyPy</title>
      <path
        d="M12.947 0c-.099 0-.2.005-.3.016a2.706 2.706 0 0 0-1.27.447c-.164.009-.324.038-.488.053-1.78.279-3.037 1.197-3.92 2.286-1.702 2.515-1.711 6.092-1.481 8.471a6.55 6.55 0 0 1 1.86-3.765c.069-.069.15-.136.22-.217l.034-.034c.09-.078.18-.154.272-.228a8.87 8.87 0 0 1 .416-.309c.028-.014.056-.027.084-.055l.436-.273.03-.016.068-.035a4.99 4.99 0 0 1 .478-.225c.029-.014.07-.029.098-.043.127-.056.268-.098.395-.14-.002-.003-.006-.004-.008-.006l.022-.008a2.162 2.162 0 0 0-.268-.238 1.827 1.827 0 0 0-.731-.268 3.248 3.248 0 0 0-.829-.041 4.37 4.37 0 0 0-.799.115c.248-.102.497-.19.77-.242.279-.07.573-.111.88-.112.265 0 .55.036.82.135l.002.004c.028.014.042.015.07.03.07.028.155.069.225.11.01.006.017.013.026.018l.002.012c.14.084.268.196.394.323l.014.013c.004 0 .006 0 .01-.002a2.821 2.821 0 0 0 2.407.944l.254-.04h.041l.557-.114c1.867-.435 2.185-.507 3.135-1.036.4-.321.562-.548.63-.762.07-.217.055-.455.073-.797l-.002.01c-.001-.374-.282-.8-.696-1.22-.41-.417-.932-.824-1.366-1.196-.53-.374-.785-.718-1.031-.973a1.669 1.669 0 0 0-.63-.434A2.778 2.778 0 0 0 12.947 0zm2.362.934c.12.113.231.224.405.346l.008.004.005.006c.425.365.963.78 1.402 1.225.438.446.795.93.797 1.465v.004l-.002.006c-.017.319.008.589-.088.885-.096.297-.311.588-.754.94l-.012.01-.012.008a9.773 9.773 0 0 1-.584.303c1.232.485 2.467 1.071 3.808 2.118v-.002c1.21.937 2.345 2.057 3.49 3.74-.105-5.25-3.649-9.647-8.463-11.058zM8.534.98a11.576 11.576 0 0 0-2.155.897c-.07.038-.14.08-.209.12a11.768 11.768 0 0 0-5.942 10.02c.033 1.843.683 3.221 1.708 4.232 1.061 1.048 2.528 1.703 4.109 2.034 1.585.333 3.247.442 4.743.362a6.236 6.236 0 0 1-1.92-.692 11.15 11.15 0 0 1-.55-.322 12.475 12.475 0 0 1-.45-.338l-.295-.252a1.697 1.697 0 0 1-.225-.225 6.776 6.776 0 0 1-1.237-1.702c-.028-.056-.056-.126-.084-.182a6.412 6.412 0 0 1-.318-.858c-.104-.294-.318-.938-.489-2.003v-.006c-.299-2.347-.525-6.536 1.464-9.467l.004-.006.004-.006A6.873 6.873 0 0 1 8.534.98zm4.776 3.853c.059-.001.12 0 .182.004.492.043.87.282.856.55-.028.252-.434.436-.926.408-.492-.042-.872-.282-.858-.55.012-.233.336-.401.746-.412zm2.699 1.491c-.164.061-.451.142-.657.2 1.835 1.094 3.106 3.045 3.215 5.315l.004.068c.003.077.006.153.007.233v.04c0 .037-.005.072-.006.108.101 2.366-.31 3.562-1.291 5.62v.002c-.99 2.092-3.237 4.63-5.012 6.089 6.255-.14 11.293-5.145 11.494-11.384-1.22-1.9-2.408-3.086-3.696-4.084-1.43-1.117-2.725-1.7-4.058-2.207zm2.104 8.256c-.045.118-.087.238-.138.352-.029.056-.056.126-.084.182a6.537 6.537 0 0 1-1.462 1.927l-.295.252c-.14.112-.295.225-.45.338a5.13 5.13 0 0 1-.549.322c-.183.1-.375.185-.568.268v.002l-.016.006a6.555 6.555 0 0 1-.412.154c-2.013.742-5.2.867-8.166.244-1.63-.341-3.157-1.02-4.282-2.13a5.941 5.941 0 0 1-1.164-1.625C1.703 20.009 6.232 23.859 11.694 24c1.76-1.35 4.256-4.096 5.27-6.241v-.002c.598-1.253.97-2.146 1.15-3.178z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPypyIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
