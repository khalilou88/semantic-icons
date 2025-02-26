import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild } from '@angular/core';

import { SiAlarmClockIcon } from '@semantic-icons/animated-icons';

@Component({
  selector: 'app-example',
  imports: [SiAlarmClockIcon, CommonModule],
  template: `
    <div class="p-4 border border-gray-200 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Notifications</h2>
      <div class="flex gap-2 mb-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          (click)="triggerNotification()"
        >
          Trigger Notification
        </button>
        <button
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          (click)="clearNotification()"
        >
          Clear
        </button>
      </div>
      <div class="flex items-center gap-2">
        <si-alarm-clock-icon
          #alarmIcon
          [size]="32"
          [customClass]="hasNotification ? 'text-red-500' : ''"
        ></si-alarm-clock-icon>
        <span class="text-red-500 font-medium" *ngIf="hasNotification">
          You have a new notification!
        </span>
      </div>
    </div>
  `,
})
export class ExampleComponent implements OnDestroy {
  @ViewChild('alarmIcon') alarmIconComponent!: SiAlarmClockIcon;
  hasNotification = false;
  notificationTimeout: any;

  triggerNotification(): void {
    this.hasNotification = true;
    this.alarmIconComponent.startAnimation();

    // Auto-clear after 5 seconds
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
    this.notificationTimeout = setTimeout(() => {
      this.clearNotification();
    }, 5000);
  }

  clearNotification(): void {
    this.hasNotification = false;
    this.alarmIconComponent.stopAnimation();

    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
      this.notificationTimeout = null;
    }
  }

  ngOnDestroy(): void {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
  }
}
