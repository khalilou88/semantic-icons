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
  selector: 'svg[si-floppy-disk-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H18.4999C19.7425 20.75 20.7499 19.7426 20.7499 18.5L20.7499 8.61418C20.7499 8.01685 20.5124 7.44403 20.0897 7.02197L16.9707 3.90779C16.5488 3.48658 15.977 3.25 15.3809 3.25H5.5ZM5.5 4.75H6.25V5.5C6.25 6.74264 7.25736 7.75 8.5 7.75H11.5C12.7426 7.75 13.75 6.74264 13.75 5.5L13.75 4.75H15.3809C15.5796 4.75 15.7702 4.82886 15.9108 4.96926L19.0298 8.08345C19.1707 8.22413 19.2499 8.41507 19.2499 8.61418L19.2499 18.5C19.2499 18.9142 18.9141 19.25 18.4999 19.25H16.75V15.5C16.75 14.2574 15.7426 13.25 14.5 13.25L9.5 13.25C8.25736 13.25 7.25 14.2574 7.25 15.5L7.25001 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V5.5C4.75 5.08579 5.08579 4.75 5.5 4.75ZM7.75 4.75H12.25L12.25 5.5C12.25 5.91421 11.9142 6.25 11.5 6.25H8.5C8.08579 6.25 7.75 5.91421 7.75 5.5V4.75ZM15.25 19.25L8.75001 19.25L8.75 15.5C8.75 15.0858 9.08579 14.75 9.5 14.75L14.5 14.75C14.9142 14.75 15.25 15.0858 15.25 15.5V19.25Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFloppyDisk1Icon implements OnInit {
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