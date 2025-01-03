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
  selector: 'svg[si-rarible-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Rarible</title>
    <svg:path
      d="M4.8 0A4.79 4.79 0 000 4.8v14.4A4.79 4.79 0 004.8 24h14.4a4.79 4.79 0 004.8-4.8V4.8A4.79 4.79 0 0019.2 0zm1.32 7.68h8.202c2.06 0 3.666.44 3.666 2.334 0 1.137-.671 1.702-1.427 1.898.904.268 1.558 1 1.558 2.16v2.131h-3.451V14.18c0-.62-.37-.87-1-.87H9.572v2.893H6.12zm3.452 2.5v.834h4.155c.452 0 .726-.06.726-.416 0-.358-.274-.418-.726-.418z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRaribleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}