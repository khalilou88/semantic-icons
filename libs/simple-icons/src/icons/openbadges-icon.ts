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
  selector: 'svg[si-openbadges-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Open Badges</title>
    <svg:path
      d="M18.43 18.584l-8.265-4.749 1.078-.641.719-.411.719.41 1.796 1.027 1.437.821 1.797 1.027 1.438.822 1.078.616zm-3.234 1.873l-8.24-4.774 1.797-1.027 8.24 4.75-1.797 1.051zm-3.209 1.848l-8.24-4.748 1.797-1.027 8.24 4.749zM3.03 14.246l8.24-4.748v2.079l-.719.41-1.797 1.027-1.438.821-1.796 1.027-1.437.822-1.053.615v-2.054zm0-3.722l8.24-4.749v2.08l-8.24 4.723v-2.054zm0-3.722l8.24-4.749v2.054L3.03 8.856V6.802zm9.677-4.749l1.797 1.027v9.523l-1.078-.616-.719-.41V2.052zm3.209 1.848l1.796 1.027v9.523l-1.797-1.027V3.901zm3.234 1.875l1.796 1.026v9.523l-1.796-1.027V5.775zm3.26.205l-1.49-.822-1.796-1.026-1.412-.847-1.797-1.027-1.437-.822L12.68.411 11.962 0l-.719.411-9.651 5.57v12.012l.718.41L11.987 24l1.438-.822 1.797-1.026 1.437-.821 1.797-1.027 1.437-.821 1.797-1.027.718-.411Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenbadgesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
