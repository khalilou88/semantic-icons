# @semantic-icons/lineicons

`@semantic-icons/lineicons` helps developers to use [Line icons](https://lineicons.com/icons) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/lineicons | Angular   | Lineicons |
| ------------------------- | --------- | --------- |
| 0.x.x                     | >= 17.1.0 | 1.3.2     |

## Usage

First, install `@semantic-icons/lineicons` from npm:

```sh
npm install @semantic-icons/lineicons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiTrophy1Icon } from '@semantic-icons/lineicons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiTrophy1Icon],
  template: `
    <svg class="text-blue-500 size-6" si-trophy-1-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
```

The icons can be imported from `@semantic-icons/lineicons`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the word `icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
