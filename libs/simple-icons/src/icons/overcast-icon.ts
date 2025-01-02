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
  selector: 'svg[si-overcast-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Overcast</title>
    <svg:path
      d="M12 24C5.389 24.018.017 18.671 0 12.061V12C0 5.35 5.351 0 12 0s12 5.35 12 12c0 6.649-5.351 12-12 12zm0-4.751l.9-.899-.9-3.45-.9 3.45.9.899zm-1.15-.05L10.4 20.9l1.05-1.052-.6-.649zm2.3 0l-.6.601 1.05 1.051-.45-1.652zm.85 3.102L12 20.3l-2 2.001c.65.1 1.3.199 2 .199s1.35-.05 2-.199zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c-.008 4.468 2.825 8.446 7.051 9.899l2.25-8.35c-.511-.372-.809-.968-.801-1.6 0-1.101.9-2.001 2-2.001s2 .9 2 2.001c0 .649-.301 1.2-.801 1.6l2.25 8.35c4.227-1.453 7.06-5.432 7.051-9.899 0-5.799-4.701-10.5-10.5-10.5zm6.85 15.7c-.255.319-.714.385-1.049.15-.313-.207-.4-.628-.194-.941.014-.021.028-.04.044-.06 0 0 1.35-1.799 1.35-4.35s-1.35-4.35-1.35-4.35c-.239-.289-.198-.719.091-.957.02-.016.039-.031.06-.044.335-.235.794-.169 1.049.15.1.101 1.65 2.15 1.65 5.2S18.949 17.1 18.85 17.2zm-3.651-1.95c-.3-.3-.249-.85.051-1.15 0 0 .75-.799.75-2.1s-.75-2.051-.75-2.1c-.3-.301-.3-.801-.051-1.15.232-.303.666-.357.969-.125.029.022.056.047.082.074C16.301 8.75 17.5 10 17.5 12s-1.199 3.25-1.25 3.301c-.301.299-.75.25-1.051-.051zm-6.398 0c-.301.301-.75.35-1.051.051C7.699 15.199 6.5 14 6.5 12s1.199-3.199 1.25-3.301c.301-.299.801-.299 1.051.051.3.3.249.85-.051 1.15 0 .049-.75.799-.75 2.1s.75 2.1.75 2.1c.3.3.351.799.051 1.15zm-2.602 2.101c-.335.234-.794.169-1.05-.15C5.051 17.1 3.5 15.05 3.5 12s1.551-5.1 1.649-5.2c.256-.319.715-.386 1.05-.15.313.206.4.628.194.941-.013.02-.028.04-.043.059C6.35 7.65 5 9.449 5 12s1.35 4.35 1.35 4.35c.25.3.15.75-.151 1.001z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOvercastIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
