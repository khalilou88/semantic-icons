import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-slint-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Slint</svg:title>
    <svg:path
      d="m6.503 23.914 13.61-9.399s.614-.351.614-.906c0-.739-.776-.979-.776-.979l-7.488-2.953c-.267-.104-.634.189-.29.56l2.479 2.471s.688.675.688 1.117-.423.836-.423.836l-9.02 8.684c-.32.31.113.87.606.569zM17.497.087 3.887 9.484s-.614.351-.614.906c0 .739.776.98.776.98l7.488 2.953c.267.103.636-.19.29-.559l-2.479-2.48s-.688-.673-.688-1.116c0-.444.423-.837.423-.837L18.097.654c.326-.31-.106-.87-.6-.567z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSlintIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2379F4');
}
