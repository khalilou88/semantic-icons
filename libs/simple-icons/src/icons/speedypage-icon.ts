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
  selector: 'svg[si-speedypage-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>SpeedyPage</title>
    <svg:path
      d="M20.356 11.774a8.66 8.66 0 0 1-7.797 8.623C12.559 20.503 0 22.18 0 22.18l1.383-4.978 10.192-1.544v-.025a3.617 3.617 0 0 0 3.405-3.807 3.44 3.44 0 0 0-.212-1.01h5.534c.054.318.054.638.054.958zm-16.686.452c0-4.444 3.381-8.171 7.797-8.623C11.467 3.471 24 1.82 24 1.82l-1.41 4.978-10.19 1.57v.025a3.556 3.556 0 0 0-3.353 3.781c.026.346.08.664.214.984H3.724c-.026-.32-.054-.612-.054-.932z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSpeedypageIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}