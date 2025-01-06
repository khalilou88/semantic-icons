import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-binoculars-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M114.917 82.831C126.817 70.758 142.711 64 164 64c18.436 0 33.934 7.239 44.611 19.607C219.057 95.707 224 111.638 224 128v34.809c8.45-1.583 19.147-2.809 32-2.809 12.853 0 23.55 1.226 32 2.809V128c0-16.362 4.943-32.293 15.389-44.393C314.066 71.239 329.564 64 348 64c21.289 0 37.183 6.758 49.083 18.831 11.072 11.233 17.546 26.036 22.792 39.275l.636 1.672 68.207 181.915s2.59 7.307 2.915 8.392A103.992 103.992 0 01496 344c0 57.438-46.562 104-104 104s-104-46.562-104-104v-60.461l-.04-.01C281.089 281.825 270.382 280 256 280c-14.382 0-25.089 1.825-31.96 3.529l-.04.01V344c0 57.438-46.562 104-104 104S16 401.438 16 344c0-10.399 1.526-20.441 4.367-29.916.152-.692.352-1.383.602-2.068.585-1.739 1.641-4.628 2.314-6.324l68.842-183.586c5.246-13.239 11.721-28.042 22.792-39.275zM320 343.905c.051-39.721 32.267-71.905 72-71.905 30.372 0 56.352 18.806 66.93 45.408l1.358 3.71A71.916 71.916 0 01464 344c0 39.764-32.236 72-72 72-39.751 0-71.978-32.214-72-71.96V344m-200-72c-30.371 0-56.35 18.805-66.93 45.406l-1.358 3.714A71.923 71.923 0 0048 344c0 39.764 32.236 72 72 72s72-32.236 72-72-32.236-72-72-72z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBinocularsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
