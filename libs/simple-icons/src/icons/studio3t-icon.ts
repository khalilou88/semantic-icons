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
  selector: 'svg[si-studio3t-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Studio 3T</title>
    <svg:path
      d="M12.336 3.194c-3.37.044-8.92 1.972-11.414 7.826-.16.384-.3.777-.418 1.177A12.825 12.825 0 0 0 .1 14.094l-.004-.002c-.405 4.071.519 6.19 1.877 6.62.909.288 1.707-.099 2.646-.888 1.032-.867 1.436-1.523 1.32-2.426-.12-.932-1.126-1.61-2.037-1.853-1.318-.383-.787-1.228-.787-1.228s1.421 1.02 3.711.763c2.089-.234 2.486-.672 2.486-.672-.003-2.155 1.152-3.657 2.664-3.802-1.05.495-1.656 2.205-1.654 3.593l.006 3.674.521.002c1.533.002 2.839-1.54 2.836-3.281v-.72s1.146-.623 2.774-.805c.77-.087 1.372-.006 1.892.15a2.15 2.15 0 0 1-.514-1.318c-.007-.225.362-.324.444 0 .29 1.302 1.035 1.859 2.898 2.418a3.84 3.84 0 0 0 1.057.021c.807-.111 1.615-.558 1.744-1.508.12-.89-.323-1.498-.776-2.12l-.109-.153a5.268 5.268 0 0 1-.48-.77 6.479 6.479 0 0 1-.293-.763c-.107-.318-.213-.634-.375-.922-2.136-3.785-5.939-4.958-9.611-4.91Zm8.058 6.287h.027c.29 0 .525.254.526.566 0 .312-.233.565-.524.565-.29 0-.527-.255-.527-.567 0-.302.22-.55.498-.564zm-6.035 4.728c.21 2.063-.963 2.934-.963 2.934 1.636-.098 3.485-1.592 3.392-3.51 0 0-.725-.105-2.429.576z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiStudio3tIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
