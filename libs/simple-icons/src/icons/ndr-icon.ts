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
  selector: 'svg[si-ndr-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>NDR</title>
    <svg:path
      d="M5.184 19.325l-3.137-5.648v5.649H0V9.64h2.149l3.267 6.025V9.641h2.047v9.684zm2.279-9.684V.537H8.61v9.104zm0 13.822v-4.138H8.61v4.138zM12.037 9.64c2.395 0 3.63 1.147 3.63 3.368v2.918c0 2.28-1.19 3.398-3.63 3.398H8.61V9.641zm-.19 7.855c1.163 0 1.728-.581 1.728-1.771v-2.498c0-1.176-.58-1.757-1.727-1.757h-1.03v6.026zm9.845 1.83l-1.728-3.718h-1.161v3.717h-2.15V9.641h3.384c2.381 0 3.513.944 3.513 2.962 0 1.335-.493 2.134-1.597 2.613L24 19.326zm-1.568-5.475c.857 0 1.365-.494 1.365-1.32 0-.858-.377-1.177-1.365-1.177H18.76v2.498h1.365z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNdrIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}