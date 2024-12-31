import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-redhatopenshift-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Red Hat Open Shift</title>
      <path
        d="M21.665,11.812c-0.11-1.377-0.476-2.724-1.08-3.966L24,6.599c-0.268-0.556-0.585-1.092-0.943-1.595 l-1.601,0.583c-3.534-4.95-10.412-6.098-15.363-2.565c-3.144,2.244-4.883,5.972-4.582,9.823l1.604-0.584 c0.051,0.615,0.153,1.224,0.305,1.822L0,15.335c0.338,1.339,0.922,2.604,1.721,3.731l1.812-0.659 c3.526,4.95,10.398,6.106,15.349,2.58c1.555-1.107,2.796-2.6,3.599-4.332c0.802-1.715,1.144-3.61,0.991-5.497L21.665,11.812z M16.925,9.177c0.687,1.227,0.998,2.629,0.895,4.032l1.809-0.657c-0.063,0.856-0.282,1.694-0.646,2.471 c-1.67,3.584-5.928,5.138-9.514,3.472c-0.782-0.365-1.491-0.87-2.092-1.49l-1.813,0.66c-0.979-1.01-1.64-2.285-1.903-3.667 l3.426-1.242c-0.121-0.624-0.159-1.262-0.111-1.896H6.97l-1.604,0.583c0.294-3.932,3.72-6.881,7.652-6.587 c0.868,0.065,1.716,0.288,2.504,0.658V5.508c0.778,0.364,1.483,0.867,2.082,1.483l1.599-0.582c0.002,0.002,0.004,0.003,0.006,0.005 c0.441,0.454,0.82,0.965,1.128,1.518L16.925,9.177z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRedhatopenshiftIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
