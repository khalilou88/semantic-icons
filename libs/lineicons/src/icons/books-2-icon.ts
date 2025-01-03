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
  selector: 'svg[si-books-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.33301 5.5C7.33301 4.25736 8.34037 3.25 9.58301 3.25H11.1663C12.3908 3.25 13.3868 4.22809 13.4157 5.44559C13.6431 5.27137 13.9077 5.13795 14.2016 5.0592L16.4554 4.45529C17.6557 4.13367 18.8894 4.84598 19.2111 6.04628L21.9287 16.1885C22.2503 17.3888 21.538 18.6226 20.3377 18.9442L18.0838 19.5481C16.8835 19.8697 15.6498 19.1574 15.3282 17.9571L13.4163 10.8221V17.25C13.4163 18.4926 12.409 19.5 11.1663 19.5H9.58301C9.00682 19.5 8.48122 19.2834 8.08317 18.9272C7.68512 19.2834 7.15952 19.5 6.58333 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V7.75C2 6.50736 3.00736 5.5 4.25 5.5H6.58333C6.84619 5.5 7.09852 5.54507 7.33301 5.62791V5.5ZM7.33301 17.25V7.72768C7.3212 7.32379 6.99008 7 6.58333 7H4.25C3.83579 7 3.5 7.33579 3.5 7.75V17.25C3.5 17.6642 3.83579 18 4.25 18H6.58333C6.99108 18 7.32283 17.6746 7.33309 17.2693L7.33301 17.25ZM9.58301 18H11.1663C11.5806 18 11.9163 17.6642 11.9163 17.25V5.5C11.9163 5.08579 11.5806 4.75 11.1663 4.75H9.58301C9.16879 4.75 8.83301 5.08579 8.83301 5.5V7.71133C8.83322 7.72419 8.83333 7.73708 8.83333 7.75V17.25L8.83325 17.2693C8.84351 17.6746 9.17526 18 9.58301 18ZM14.0595 7.42665L16.7771 17.5689C16.8843 17.969 17.2955 18.2064 17.6956 18.0992L19.9494 17.4953C20.3495 17.3881 20.587 16.9768 20.4798 16.5767L17.7622 6.43451C17.655 6.03441 17.2437 5.79697 16.8436 5.90418L14.5898 6.50809C14.1897 6.6153 13.9522 7.02655 14.0595 7.42665Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBooks2Icon implements OnInit {
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
