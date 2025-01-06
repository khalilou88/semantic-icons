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
  selector: 'svg[si-alibaba-cloud-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.51445 5.14H4.67954C3.70366 5.14 2.76776 5.52766 2.07771 6.21771C1.38766 6.90776 1 7.84366 1 8.81954V15.1778C1 16.1537 1.38766 17.0896 2.07771 17.7796C2.76776 18.4697 3.70366 18.8573 4.67954 18.8573H9.52917L8.35908 17.2015L4.82304 16.1197C4.51117 16.0203 4.23916 15.8239 4.04659 15.5592C3.85401 15.2945 3.75092 14.9753 3.7523 14.6479V9.37147C3.74976 9.04385 3.85241 8.72406 4.04515 8.45913C4.23789 8.19419 4.51055 7.99809 4.82304 7.89965L8.35908 6.79579L9.51445 5.14ZM19.3388 5.14H14.4892L15.6593 6.79579L19.1953 7.89965C19.5074 7.99822 19.7796 8.19447 19.9717 8.45947C20.1638 8.72446 20.2657 9.04418 20.2624 9.37147V14.6479C20.2646 14.9749 20.1622 15.2941 19.9703 15.5589C19.7783 15.8236 19.5068 16.0202 19.1953 16.1197L15.6593 17.2015L14.4892 18.8573H19.3388C19.8213 18.8578 20.2991 18.7628 20.7447 18.5779C21.1903 18.3929 21.5949 18.1216 21.9352 17.7796C22.2755 17.4376 22.5448 17.0316 22.7275 16.5851C22.9103 16.1385 23.0028 15.6603 22.9999 15.1778V8.81954C22.9999 7.84684 22.6148 6.91372 21.9287 6.22419C21.2427 5.53467 20.3115 5.14486 19.3388 5.14ZM15.6666 11.1376H8.33698V12.7897H15.6666V11.1376Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlibabaCloudFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
