import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-jfrogpipelines-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>JFrog Pipelines</svg:title>
    <svg:path
      d="m10.844 0 .021 1.2C7.226 1.636 4.1 4.387 3.231 8.176c-1.041 4.517 1.518 9.036 5.783 10.55.042.015.639.18.96.272v.01l.203.047c1.848.43 1.777.347 2.132-1.27.304-.117.568-.095.882-.15a7.35 7.35 0 0 0 .764-.178c1.081 1.476.687 1.635 2.696.378 2.453-1.534 1.331-1.205.86-2.593l.98-1.336c1.309.313 1.657.537 1.974-.889.608-2.742.89-2.653-1.054-3.083-.109-.31-.233-1.25-.31-1.635.378-.337 1.272-.589 1.197-1.271-.013-.115-1.523-2.754-1.91-2.887-.538-.188-1.091.449-1.523.6-.244-.206-1.176-.798-1.305-1.058.15-.645.544-1.42-.34-1.735-.685-.25-1.501-.443-2.477-.577l.003.004.527.497-.82.904c.67.045 1.185.165 1.848.356-.404 1.974-.029 1.192 1.322 2.258.252.198.85.794 1.098.854.456.108.894-.363 1.219-.532l.71 1.185c-1.368.866-1.019.648-.663 2.224.371 1.645-.506 1.713 1.457 2.198l-.332 1.35c-1.964-.425-1.197-.007-2.256 1.328-.933 1.172-1.275 1.008-.355 2.333l-1.16.68c-.782-1.409-.777-.959-2.22-.652-1.626.335-1.732-.44-2.194 1.458l-.285-.07-1.137-.344C5.879 16.168 3.7 12.38 4.573 8.588a7.523 7.523 0 0 1 5.955-5.702c.123-.022.245-.04.366-.057l.021 1.176 1.92-2.118zm1.385 6.854a3.642 3.642 0 0 0-1.142.168c-4.232 1.296-2.575 7.69 1.83 6.567 4.049-1.031 2.777-6.665-.688-6.735zm-.108 1.389c2.233.046 2.91 3.542.239 4.095-1.201.248-2.176-.667-2.352-1.657-.228-1.284.665-2.222 1.647-2.4.162-.03.317-.041.466-.038zM1.534 22.392V24h20.932v-1.608z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJfrogpipelinesIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#40BE46');
}
