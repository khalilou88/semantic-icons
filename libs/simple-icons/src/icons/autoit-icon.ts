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
  selector: 'svg[si-autoit-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>AutoIt</title>
    <svg:path
      d="m19.351 15.563-5.486-7.941a2.684 2.684 0 0 0-.702-.702c-.276-.188-.62-.283-1.03-.283-.43 0-.784.101-1.064.302-.28.202-.512.43-.696.683l-5.63 7.94h3.215l4.122-5.827 1.575 2.323c.148.21.304.436.466.676.161.24.304.44.426.597a9.106 9.106 0 0 0-.741-.026H10.78l-1.64 2.258zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-21.61a9.61 9.61 0 1 0 0 19.22 9.61 9.61 0 1 0 0-19.22z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAutoitIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
