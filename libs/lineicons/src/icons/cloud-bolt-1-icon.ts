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
  selector: 'svg[si-cloud-bolt-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.41032 9.23329C6.48046 6.19302 8.96698 3.75 12.0241 3.75C15.0813 3.75 17.5678 6.19308 17.6379 9.23338C20.0922 9.42706 22.0235 11.4801 22.0235 13.9842C22.0235 16.0917 20.6556 17.8797 18.7591 18.5087C18.8505 18.0617 18.8984 17.599 18.8984 17.125C18.8984 17.0203 18.8961 16.9162 18.8915 16.8126C19.8672 16.2478 20.5235 15.1927 20.5235 13.9842C20.5235 12.1806 19.0614 10.7184 17.2578 10.7184H16.8894C16.4752 10.7184 16.1394 10.3827 16.1394 9.96844V9.3653C16.1394 7.09248 14.2969 5.25 12.0241 5.25C9.75128 5.25 7.9088 7.09248 7.9088 9.3653V9.96844C7.9088 10.3827 7.57301 10.7184 7.1588 10.7184H6.78922C4.98558 10.7184 3.52344 12.1806 3.52344 13.9842C3.52344 15.1926 4.17977 16.2478 5.15541 16.8126C5.15078 16.9161 5.14844 17.0203 5.14844 17.125C5.14844 17.599 5.1964 18.0617 5.28773 18.5087C3.39135 17.8796 2.02344 16.0917 2.02344 13.9842C2.02344 11.4797 3.95539 9.42638 6.41032 9.23329Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.786 12.4249C13.757 12.1367 13.5646 11.8909 13.2917 11.7936C13.0189 11.6963 12.7143 11.7648 12.5095 11.9697L7.53809 16.941C7.32359 17.1555 7.25943 17.4781 7.37551 17.7584C7.4916 18.0386 7.76507 18.2214 8.06842 18.2214H9.8984L10.2608 21.8251C10.2898 22.1133 10.4823 22.3591 10.7551 22.4564C11.028 22.5537 11.3325 22.4852 11.5374 22.2803L16.5088 17.309C16.7233 17.0945 16.7875 16.7719 16.6714 16.4916C16.5553 16.2114 16.2818 16.0286 15.9785 16.0286H14.1485L13.786 12.4249ZM10.5768 16.7214H9.87908L12.4518 14.1486L12.7239 16.8537C12.7624 17.2369 13.085 17.5286 13.4701 17.5286H14.1678L11.595 20.1014L11.323 17.3963C11.2844 17.0131 10.9619 16.7214 10.5768 16.7214Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCloudBolt1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}