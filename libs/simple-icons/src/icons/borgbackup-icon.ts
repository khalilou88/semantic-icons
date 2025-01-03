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
  selector: 'svg[si-borgbackup-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>BorgBackup</title>
    <svg:path
      d="M0 8.144v6.023h2.006V8.144Zm2.324 0v1.203h1.488v1.285H2.324v1.048h1.488v1.284H2.324v1.203h2.328l1.207-1.203V11.78l-.603-.604.603-.603V9.347L4.652 8.144Zm5.569 1.203L6.69 10.55v2.414l1.203 1.203H9.24v-1.125h-.522V10.55h.522V9.347Zm1.665 0v1.203h.5v2.492h-.5v1.125h1.344l1.202-1.203V10.55l-1.202-1.203Zm3.454 0v4.82h2.006v-4.82Zm3 0-.672.676v.527h.854v1.171h2.01v-1.248l-.975-1.126Zm3.971 0-1.202 1.203v2.414l1.202 1.203h1.094l.6-.594v-.531h-.89V9.347Zm1.121 0v1.203h.89v4.253h-2.446v.444l.603.609h2.646L24 14.644V10.55l-1.203-1.203Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBorgbackupIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
