import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'si-alarm-clock-icon',
  standalone: true,
  imports: [],
  template: `
    <div
      class="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center {{
        customClass
      }}"
      (mouseenter)="onMouseEnter($event)"
      (mouseleave)="onMouseLeave($event)"
    >
      <svg
        #svgElement
        [attr.width]="size"
        [attr.height]="size"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="overflow: visible"
      >
        <path d="M18 20.5L19.5 22" />
        <path d="M6 20.5L4.5 22" />
        <path
          d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"
        />
        <path
          d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"
        />
        <path d="M18 2L21.747 5.31064" />
        <path d="M6 2L2.25304 5.31064" />
      </svg>
    </div>
  `,
  host: {},
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlarmClockIcon implements OnDestroy {
  @Input() size = 28;
  @Input() customClass = '';
  @Output() mouseEnter = new EventEmitter<MouseEvent>();
  @Output() mouseLeave = new EventEmitter<MouseEvent>();

  @ViewChild('svgElement', { static: false }) svgElement!: ElementRef;

  isControlled = false;
  isAnimating = false;
  xAnimationInterval: any;

  ngOnDestroy(): void {
    this.cleanupAnimations();
  }

  startAnimation(): void {
    this.isControlled = true;
    this.isAnimating = true;
    this.animatePaths();
  }

  stopAnimation(): void {
    this.isControlled = true;
    this.isAnimating = false;
    this.resetPathPositions();
  }

  animatePaths(): void {
    if (!this.svgElement || !this.isAnimating) return;

    const paths = this.svgElement.nativeElement.querySelectorAll('path');

    // Clear any existing animation
    this.cleanupAnimations();

    // Apply initial transform for spring animation
    paths.forEach((path: SVGPathElement, index: number) => {
      const isSecondary = index >= 4; // Last two paths are secondary
      const yOffset = isSecondary ? -2.5 : -1.5;
      path.style.transform = `translateY(${yOffset}px)`;
      path.style.transition =
        'transform 200ms cubic-bezier(0.3, 0.7, 0.4, 1.5)';
    });

    // Start x-axis shake animation
    let direction = 1;
    let position = 0;

    this.xAnimationInterval = setInterval(() => {
      if (!this.isAnimating) {
        this.cleanupAnimations();
        return;
      }

      position += direction * 0.3;
      if (position >= 1.5 || position <= -1.5) {
        direction *= -1;
      }

      paths.forEach((path: SVGPathElement, index: number) => {
        const isSecondary = index >= 4;
        const yOffset = isSecondary ? -2.5 : -1.5;
        const xOffset = isSecondary ? position * 1.5 : position;
        path.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    }, 30);
  }

  resetPathPositions(): void {
    if (!this.svgElement) return;

    const paths = this.svgElement.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      path.style.transform = 'translate(0, 0)';
      path.style.transition =
        'transform 200ms cubic-bezier(0.3, 0.7, 0.4, 1.5)';
    });

    this.cleanupAnimations();
  }

  cleanupAnimations(): void {
    if (this.xAnimationInterval) {
      clearInterval(this.xAnimationInterval);
      this.xAnimationInterval = null;
    }
  }

  onMouseEnter(event: MouseEvent): void {
    if (!this.isControlled) {
      this.isAnimating = true;
      this.animatePaths();
    } else {
      this.mouseEnter.emit(event);
    }
  }

  onMouseLeave(event: MouseEvent): void {
    if (!this.isControlled) {
      this.isAnimating = false;
      this.resetPathPositions();
    } else {
      this.mouseLeave.emit(event);
    }
  }
}
