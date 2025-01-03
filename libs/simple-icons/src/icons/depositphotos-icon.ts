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
  selector: 'svg[si-depositphotos-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Depositphotos</title>
    <svg:path
      d="M12 24c5.119 0 9.061-3.942 9.061-9.06S17.119 5.88 12 5.88c-5.117 0-9.059 3.942-9.059 9.06S6.883 24 12 24Zm0-5.598c-1.954 0-3.461-1.508-3.461-3.462 0-1.955 1.507-3.462 3.461-3.462 1.955 0 3.462 1.507 3.462 3.462 0 1.954-1.507 3.462-3.462 3.462Zm2.634-12.241h6.161V0h-6.161v6.161Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDepositphotosIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
