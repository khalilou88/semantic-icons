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
  selector: 'svg[si-farfetch-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>FARFETCH</title>
    <svg:path
      d="M24 10.248V6.749H13.586c-3.062 0-4.737 1.837-4.737 4.488v2.231H4.321V8.599c0-3.425.332-5.074 4.212-5.074H24V0H6.259C2.336 0 0 2.589 0 6.386V24h4.321v-7.033h4.527V24h4.339v-7.033H24v-3.499H13.188v-1.155c0-1.461.232-2.064 2.257-2.064H24z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFarfetchIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
