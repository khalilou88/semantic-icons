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
  selector: 'svg[si-rxdb-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>RxDB</title>
    <svg:path
      d="M11.096 3.452h1.15v-1.15h1.151v1.15h6.411v4.932H4.192V1.15h1.15V2.3h1.151V0h1.15v1.15h1.152v2.302h1.15V1.151h1.151v2.301zM4.192 14.466h15.616V9.534H4.192v4.932zm15.616 1.15H4.192v4.932h6.41v1.15h1.151v-1.15h1.151v2.301h1.15v-2.301h1.152v2.301h1.15V24h1.151v-2.301h1.15v1.15h1.151v-7.233z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRxdbIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}