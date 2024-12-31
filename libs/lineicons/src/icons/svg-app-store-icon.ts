import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-app-store-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6.54839L12.3548 5.90323C12.5806 5.48387 13.0968 5.35484 13.4839 5.58065C13.9032 5.80645 14.0323 6.32258 13.8065 6.70968L10.2581 12.8065H12.8065C13.6129 12.8065 14.0645 13.7742 13.7742 14.4516H6.25806C5.80645 14.4516 5.45161 14.0968 5.45161 13.6452C5.45161 13.1935 5.80645 12.8387 6.25806 12.8387H8.35484L11.0323 8.12903L10.1613 6.67742C9.93548 6.25806 10.0645 5.77419 10.4839 5.54839C10.9032 5.32258 11.3871 5.45161 11.6129 5.87097L12 6.54839ZM8.80645 15.3548L8.03226 16.7097C7.80645 17.129 7.29032 17.2581 6.90323 17.0323C6.48387 16.8065 6.35484 16.2903 6.58064 15.9032L7.16129 14.871C7.87097 14.6452 8.41935 14.8065 8.80645 15.3548ZM15.6452 12.871H17.7742C18.2258 12.871 18.5806 13.2258 18.5806 13.6774C18.5806 14.129 18.2258 14.4839 17.7742 14.4839H16.5806L17.3871 15.9032C17.6129 16.3226 17.4839 16.8065 17.0645 17.0323C16.6452 17.2581 16.1613 17.129 15.9355 16.7097C14.5806 14.3548 13.5806 12.6452 12.9032 11.4516C12.2258 10.2581 12.7097 9.09677 13.1613 8.67742C13.7419 9.58065 14.5484 11 15.6452 12.871ZM12 2C6.45161 2 2 6.45161 2 12C2 17.5484 6.45161 22 12 22C17.5484 22 22 17.5484 22 12C22 6.45161 17.5484 2 12 2ZM20.7419 12C20.7419 16.7742 16.871 20.7419 12 20.7419C7.22581 20.7419 3.25806 16.871 3.25806 12C3.25806 7.22581 7.12903 3.25806 12 3.25806C16.7742 3.25806 20.7419 7.12903 20.7419 12Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAppStoreIcon {
  readonly class = input<string>('');
}
