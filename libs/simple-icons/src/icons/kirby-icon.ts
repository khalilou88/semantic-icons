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
  selector: 'svg[si-kirby-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Kirby</title>
    <svg:path
      d="M16.571 12l-2.857 1.48v.234h2.857V16H7.43v-2.286h2.857v-.25L7.429 12V9.143L12 11.598l4.571-2.455M12 0l10.286 5.999V18L12 24 1.714 18.001V6zM2.857 6.682v10.636L12 22.651l9.143-5.333V6.682L12 1.349Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKirbyIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
