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
  selector: 'svg[si-ulule-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Ulule</title>
    <svg:path
      d="M12 0A11.992 11.992 0 001.676 5.884l-.822-.822a.499.499 0 00-.707 0A.5.5 0 000 5.416V12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12V5.416a.5.5 0 00-.854-.354l-.823.822A11.992 11.992 0 0012 0zM6.814 7.626a5.526 5.526 0 014.971 3.095 2.739 2.739 0 00.13 3.754.122.122 0 00.17 0 2.738 2.738 0 00.13-3.754 5.526 5.526 0 015.411-3.077c2.702.214 4.876 2.41 5.064 5.113a5.528 5.528 0 01-10.419 2.944.304.304 0 00-.542 0 5.528 5.528 0 01-10.42-2.944c.189-2.703 2.363-4.9 5.064-5.113.148-.012.295-.018.44-.018zm-.42 1.22a3.501 3.496 0 00-.235.008c-.013.16-.116.262-.248.388l-.052.05c-.117.113-.335.323-.333.7a.875.875 0 00.856.858c.485-.003.88-.383.882-.85.002-.325-.137-.523-.347-.722-.143-.13-.289-.281-.308-.422a3.501 3.496 0 00-.214-.01zm11.211 0a3.501 3.495 0 00-.235.008c-.013.16-.117.262-.249.388l-.051.05c-.118.113-.336.323-.334.7a.875.875 0 00.856.858c.485-.003.88-.383.882-.85.002-.325-.136-.523-.347-.723-.143-.13-.288-.28-.307-.42a3.501 3.495 0 00-.215-.011zM6.093 8.86a3.501 3.496 0 00-3.2 3.48 3.501 3.496 0 003.502 3.496 3.501 3.496 0 003.5-3.496 3.501 3.496 0 00-3.033-3.46 2.393 2.393 0 11-2.86 2.362A2.386 2.386 0 016.093 8.86zm11.816 0a2.386 2.386 0 012.088 2.382 2.391 2.391 0 11-4.784-.033 2.393 2.393 0 011.92-2.328 3.501 3.495 0 00-3.03 3.46 3.501 3.495 0 003.502 3.495 3.501 3.495 0 003.501-3.496 3.501 3.495 0 00-3.197-3.48Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUluleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
