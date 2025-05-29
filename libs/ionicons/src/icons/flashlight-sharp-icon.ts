import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-flashlight-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m330 16-42.68 42.7L453.3 224.68 496 182z" />
    <svg:ellipse cx="224.68" cy="287.3" rx="20.03" ry="19.96" fill="none" />
    <svg:path
      d="M429.21 243.85 268 82.59 249.65 168 16 402l94 94 234.23-233.8Zm-189 56.07a20 20 0 1 1 0-25.25 20 20 0 0 1-.02 25.25Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFlashlightSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
