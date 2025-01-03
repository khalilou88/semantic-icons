import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-akasaair-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Akasa Air</title>
    <svg:path
      d="M14.7315 1.8005c-2.297 0-3.2705.731-4.165 2.3824l-.6291 1.1158a3.2264 3.2264 0 0 0-.5293 1.4828c.026.4297.1655.8441.4064 1.201l5.0022 8.9444c1.789 3.1968 4.0007 4.9858 8.7642 4.9858.4075 0 .508-.2434.344-.5292L17.4367 9.793C16.14 7.4536 15.69 5.7656 15.69 4.5483a3.5322 3.5322 0 0 1 .8143-2.425c.1218-.1376.101-.3228-.1425-.3228ZM7.8123 8.8558c-.1218 0-.201.084-.3228.285L.0787 21.7113a.3929.3929 0 0 0-.0786.2441c0 .2435.386.2442.4866.2442 5.335 0 9.041-3.2553 9.041-7.9712a10.0555 10.0555 0 0 0-1.409-5.107c-.1006-.1589-.1847-.2655-.3064-.2655Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAkasaairIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}