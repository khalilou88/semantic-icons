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
  selector: 'svg[si-mastercomfig-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>mastercomfig</svg:title>
    <svg:path
      d="M12 0C5.479 0 .174 5.304.174 11.826V24h1.337v-6.716C3.486 21.064 7.446 23.65 12 23.65c4.554 0 8.514-2.586 10.49-6.367V24h1.336V11.826h-1.337c0 5.798-4.69 10.489-10.489 10.489-5.798 0-10.49-4.691-10.49-10.49C1.51 6.028 6.203 1.338 12 1.338zm0 3.72a8.107 8.107 0 100 16.214 8.107 8.107 0 000-16.215zm0 1.336a6.77 6.77 0 110 13.538 6.77 6.77 0 010-13.538z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMastercomfigIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
