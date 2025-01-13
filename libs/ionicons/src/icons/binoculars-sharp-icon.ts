import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-binoculars-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M164 64c-21.289 0-37.183 6.758-49.083 18.831-11.071 11.233-17.546 26.036-22.792 39.275L23.283 305.692a155.028 155.028 0 00-2.314 6.324c-.25.685-.45 1.376-.602 2.068A104.014 104.014 0 0016 344c0 57.438 46.562 104 104 104s104-46.562 104-104v-60.461l.04-.01 63.96.01V344c0 57.438 46.562 104 104 104s104-46.562 104-104c0-10.399-1.526-20.441-4.367-29.915-.325-1.085-2.915-8.392-2.915-8.392l-68.207-181.915-.636-1.672c-5.246-13.239-11.72-28.042-22.792-39.275C385.183 70.758 369.289 64 348 64c-18.436 0-33.934 7.239-44.611 19.607C292.943 95.707 288 111.638 288 128v34.809h-64V128c0-16.362-4.943-32.293-15.389-44.393C197.934 71.239 182.436 64 164 64zM56 344c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64zm272 0c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBinocularsSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
