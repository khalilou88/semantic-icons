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
  selector: 'svg[si-bugsnag-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Bugsnag</title>
    <svg:path
      d="M12 24c-4.596 0-8.336-3.74-8.336-8.336v-4.135a.62.62 0 01.62-.62h2.957L7.23 1.337 4.903 2.77v5.45a.62.62 0 01-1.24 0V2.7c0-.384.204-.749.53-.95L6.773.166a1.114 1.114 0 011.699.949l.01 9.796h3.52a4.759 4.759 0 014.753 4.754 4.759 4.759 0 01-4.753 4.753 4.759 4.759 0 01-4.754-4.753l-.003-3.515H4.903v3.515c0 3.912 3.183 7.097 7.097 7.097a7.104 7.104 0 007.097-7.097c0-3.915-3.184-7.098-7.097-7.098h-1.076a.62.62 0 010-1.24H12c4.596 0 8.336 3.74 8.336 8.336S16.596 24 12 24zM8.482 12.15l.004 3.514A3.518 3.518 0 0012 19.178a3.518 3.518 0 003.514-3.514A3.518 3.518 0 0012 12.149zm4.513 3.514a.995.995 0 01-.995.994.995.995 0 01-.995-.994.995.995 0 01.995-.995.995.995 0 01.995.995Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBugsnagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
