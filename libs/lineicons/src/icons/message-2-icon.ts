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
  selector: 'svg[si-message-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 6C2.5 4.75736 3.50736 3.75 4.75 3.75H19.25C20.4926 3.75 21.5 4.75736 21.5 6V16.5484C21.5 17.791 20.4926 18.7984 19.25 18.7984H7.635L3.75032 22.277C3.52993 22.4743 3.21411 22.5237 2.94401 22.403C2.67391 22.2823 2.5 22.0141 2.5 21.7182V6ZM4.75 5.25C4.33579 5.25 4 5.58579 4 6V20.0399L6.84795 17.4897C6.9855 17.3665 7.16364 17.2984 7.34827 17.2984H19.25C19.6642 17.2984 20 16.9626 20 16.5484V6C20 5.58579 19.6642 5.25 19.25 5.25H4.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMessage2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}