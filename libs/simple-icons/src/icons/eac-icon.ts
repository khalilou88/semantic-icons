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
  selector: 'svg[si-eac-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>EAC</title>
    <svg:path
      d="M2.667 24h2.667v-2.667H2.667v-8h2.667v-2.666H2.667v-8h2.667V0H0v24zm21.334-2.667h-2.668V2.667h2.668V0h-5.333v24h5.333zM13.334 0H8v24h2.667V13.335h2.667V24H16V0Zm0 10.667h-2.667v-8h2.667z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEacIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}