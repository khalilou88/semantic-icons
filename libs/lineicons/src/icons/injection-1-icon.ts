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
  selector: 'svg[si-injection-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.5938 2.21772C16.8866 1.92482 17.3615 1.92482 17.6544 2.21772L18.8448 3.40814L18.8458 3.40912L21.8044 6.36771C22.0973 6.6606 22.0973 7.13548 21.8044 7.42837C21.5115 7.72126 21.0366 7.72126 20.7437 7.42837L20.0833 6.76788L18.3773 8.47385L19.0845 9.18106C19.3774 9.47395 19.3774 9.94883 19.0845 10.2417L10.8077 18.5185C10.0433 19.2829 8.8657 19.3824 7.99383 18.8168C7.98293 18.8292 7.97155 18.8414 7.95969 18.8532L6.92219 19.8907C6.6293 20.1836 6.15442 20.1836 5.86153 19.8907L5.52698 19.5562L3.30181 21.7814C3.00892 22.0743 2.53405 22.0743 2.24115 21.7814C1.94826 21.4885 1.94826 21.0136 2.24115 20.7207L4.46632 18.4955L4.13237 18.1616C3.99171 18.0209 3.9127 17.8302 3.9127 17.6312C3.9127 17.4323 3.99171 17.2416 4.13237 17.1009L5.16987 16.0634C5.18171 16.0516 5.19386 16.0402 5.20627 16.0293C4.64053 15.1574 4.7399 13.9797 5.50437 13.2152L13.7812 4.93842C14.0741 4.64553 14.549 4.64553 14.8419 4.93842L15.5489 5.64543L17.2548 3.93945L16.5938 3.27838C16.3009 2.98548 16.3009 2.51061 16.5938 2.21772ZM18.3155 5.00011L16.6095 6.70609L17.3166 7.41319L19.0226 5.70722L18.3155 5.00011ZM15.0129 7.23075L14.3115 6.52941L6.56503 14.2759C6.27214 14.5688 6.27214 15.0437 6.56503 15.3366L8.68635 17.4579C8.97924 17.7508 9.45412 17.7508 9.74701 17.4579L17.4935 9.71139L16.792 9.00987L16.7863 9.00421L15.0185 7.23645L15.0129 7.23075Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInjection1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
