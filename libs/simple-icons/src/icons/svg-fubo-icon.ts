import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fubo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fubo</title>
      <path
        d="M10.898 16.705H9.114v-.29c-.265.196-.656.416-1.32.416-2.158 0-2.996-1.167-2.996-3.43V9.809h1.783v3.592c-.006.616 0 1.778 1.284 1.778 1.241 0 1.248-1.1 1.248-1.765V9.809h1.783v6.896zM4.101 7.207c-1.961-.216-2.407.233-2.763.7-.316.413-.357.988-.357 1.401v.501H0v1.652h.999v5.244h1.783v-5.244h1.346V9.809h-1.31v-.465c0-.474.38-.533.571-.521l.392.018.32-1.634zM24 13.257c0-1.984-1.594-3.592-3.561-3.592-.835 0-1.603.29-2.21.775.384.44.677.965.85 1.543a1.707 1.707 0 0 1 1.337-.666c.975 0 1.765.86 1.765 1.922 0 1.061-.79 1.922-1.765 1.922-.969 0-1.757-.851-1.765-1.904 0-.913-.332-1.747-.878-2.381a3.447 3.447 0 0 0-2.617-1.211c-.651 0-1.261.183-1.783.502V7.259l-1.783.35v9.097h1.783v-.288c.522.319 1.132.432 1.783.432a3.42 3.42 0 0 0 2.176-.781 4.215 4.215 0 0 1-.876-1.537c-.321.429-.8.702-1.336.702-.965 0-1.747-.884-1.747-1.975s.782-1.975 1.747-1.975c.965 0 1.748.885 1.748 1.976 0 1.984 1.6 3.591 3.566 3.591C22.4 16.849 24 15.241 24 13.257"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFuboIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
