# @semantic-icons/flowbite-icons

`@semantic-icons/flowbite-icons` helps developers to use [Tabler icons](https://flowbite.com/icons) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/flowbite-icons | Angular   | Flowbite-icons |
| ------------------------------ | --------- | -------------- |
| 0.x.x                          | >= 17.1.0 | 1.3.0          |

## Usage

First, install `@semantic-icons/flowbite-icons` from npm:

```sh
npm install @semantic-icons/flowbite-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgNotificationBellIcon } from '@semantic-icons/flowbite-icons/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SvgNotificationBellIcon],
  template: `
    <svg-notification-bell-icon class="size-6 text-blue-500" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The outline icons can be imported from `@semantic-icons/flowbite-icons/outline`, the filled icons can be imported from `@semantic-icons/flowbite-icons/solid`.

Icons use the Angular naming convention and are always prefixed with the word `svg` and suffixed with the word `icon`.

## License

MIT © 2024-2024 Khalil LAGRIDA