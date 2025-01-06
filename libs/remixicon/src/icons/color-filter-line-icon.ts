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
  selector: 'svg[si-color-filter-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2.99988C14.2091 2.99988 16 4.79074 16 6.99988C16 7.54431 15.8917 8.06177 15.6958 8.53327C14.0548 8.70904 12.5038 9.5584 11.4804 10.9666C10.2212 10.8033 9.14476 10.0545 8.53417 8.99859C8.19462 8.41137 7.99998 7.72986 7.99998 6.99988C7.99998 4.79074 9.79084 2.99988 12 2.99988ZM17.7635 8.67236C17.9175 8.14099 18 7.57964 18 6.99988C18 3.68617 15.3137 0.999879 12 0.999878C8.68627 0.999877 5.99998 3.68617 5.99998 6.99988C5.99998 7.57966 6.08247 8.14104 6.23647 8.67242C5.69935 8.80476 5.172 9.01399 4.66995 9.30385C1.80019 10.9607 0.81694 14.6302 2.47379 17.5C4.13065 20.3698 7.80019 21.353 10.6699 19.6962C11.172 19.4063 11.6169 19.0542 12 18.6552C12.3832 19.0542 12.828 19.4062 13.33 19.6961C16.1998 21.3529 19.8693 20.3697 21.5262 17.4999C23.183 14.6302 22.1998 10.9606 19.33 9.30377C18.828 9.01392 18.3006 8.80469 17.7635 8.67236ZM13.1543 16.9342C13.8227 15.4251 13.8627 13.6571 13.1549 12.0667C13.9259 11.0577 15.1125 10.4999 16.3322 10.4991C17.0104 10.4987 17.6979 10.6709 18.33 11.0358C20.2432 12.1404 20.8987 14.5868 19.7941 16.4999C18.6895 18.4131 16.2432 19.0686 14.33 17.964C13.8586 17.6919 13.4647 17.3395 13.1543 16.9342ZM11.3649 12.9668C11.8532 14.139 11.7429 15.4456 11.1337 16.5023C10.7949 17.0899 10.3021 17.5991 9.66995 17.9641C7.75678 19.0687 5.31042 18.4132 4.20585 16.5C3.10128 14.5868 3.75678 12.1405 5.66995 11.0359C6.14142 10.7637 6.64366 10.5987 7.1499 10.5326C8.12267 11.8659 9.63373 12.7845 11.3649 12.9668Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiColorFilterLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
