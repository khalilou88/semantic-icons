import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-camera-lens-ai-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM14.3094 14L9.82726 21.7633C10.5268 21.9183 11.2538 22 12 22C14.1805 22 16.198 21.3021 17.8413 20.1175L14.3094 14ZM2.4578 15C3.31516 17.7297 5.3115 19.955 7.88985 21.119L11.4226 15H2.4578ZM2 12C2 12.3375 2.01672 12.6711 2.04938 13H9.11325L4.6322 5.23859C2.99773 7.0187 2 9.39284 2 12ZM12 2C9.81949 2 7.80198 2.6979 6.15866 3.88251L9.6906 10L14.1727 2.2367C13.4732 2.08172 12.7462 2 12 2ZM22 12C22 11.6625 21.9833 11.3289 21.9506 11H14.8868L19.3678 18.7614C21.0023 16.9813 22 14.6072 22 12Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCameraLensAiFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
