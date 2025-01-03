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
  selector: 'svg[si-shortcut-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Shortcut</title>
    <svg:path
      d="M24 6a6 6 0 0 0-6-6H6a5.975 5.975 0 0 0-4.242 1.758 5.998 5.998 0 0 0 0 8.484l2.137 2.137A6.007 6.007 0 0 0 0 18a6 6 0 0 0 6 6h12a5.975 5.975 0 0 0 4.242-1.758 5.998 5.998 0 0 0 0-8.484l-2.137-2.137A6.002 6.002 0 0 0 24 6zM3.404 20.598c-.694-.694-1.075-1.615-1.075-2.596s.38-1.903 1.075-2.595a3.65 3.65 0 0 1 2.443-1.074l7.34 7.34H6a3.664 3.664 0 0 1-2.596-1.075zm17.192-5.194C21.29 16.1 21.67 17.02 21.67 18s-.38 1.904-1.075 2.596A3.644 3.644 0 0 1 18 21.67a3.64 3.64 0 0 1-2.596-1.075l-12-11.998C2.71 7.904 2.33 6.983 2.33 6.002s.38-1.903 1.075-2.595C4.1 2.712 5.02 2.33 6 2.33s1.904.381 2.596 1.076l12 11.997zm0-6.806a3.65 3.65 0 0 1-2.443 1.073l-7.34-7.342H18a3.64 3.64 0 0 1 2.596 1.075C21.29 4.1 21.67 5.02 21.67 6s-.38 1.904-1.075 2.598z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiShortcutIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}