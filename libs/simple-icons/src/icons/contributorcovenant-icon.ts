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
  selector: 'svg[si-contributorcovenant-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Contributor Covenant</title>
    <svg:path
      d="M12.688 0c-6.627 0-12 5.373-12 12s5.373 12 12 12a12 12 0 0 0 10.624-6.412 10.484 10.484 0 0 1-8.374 4.162c-5.799 0-10.5-4.701-10.5-10.5S9.14.75 14.938.75c1.001 0 1.97.14 2.887.402A11.956 11.956 0 0 0 12.688 0Zm2.438 2.25a9 9 0 1 0 7.967 13.19 7.875 7.875 0 1 1-4.115-12.326 8.962 8.962 0 0 0-3.852-.864Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiContributorcovenantIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
