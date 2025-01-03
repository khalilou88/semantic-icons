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
  selector: 'svg[si-session-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Session</title>
    <svg:path
      d="m19.431 12.193-4.53-2.51h3.071a4.847 4.847 0 0 0 4.842-4.841A4.848 4.848 0 0 0 17.972 0H7.252a6.073 6.073 0 0 0-6.066 6.066 6.566 6.566 0 0 0 3.383 5.741l4.53 2.51H6.028a4.847 4.847 0 0 0-4.842 4.841A4.848 4.848 0 0 0 6.028 24h10.72a6.073 6.073 0 0 0 6.066-6.066 6.568 6.568 0 0 0-3.383-5.741zm-14.136-1.7a5.065 5.065 0 0 1-2.607-4.309C2.627 3.61 4.79 1.5 7.367 1.5h10.508c1.797 0 3.345 1.378 3.434 3.173a3.345 3.345 0 0 1-3.337 3.51H11.92a.67.67 0 0 0-.67.67l-.001 4.94zM16.633 22.5H6.124c-1.797 0-3.345-1.378-3.434-3.173a3.345 3.345 0 0 1 3.337-3.51h6.053c.37 0 .67-.3.67-.67v-4.94l5.954 3.3a5.065 5.065 0 0 1 2.608 4.309c.06 2.575-2.103 4.684-4.679 4.684"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSessionIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
