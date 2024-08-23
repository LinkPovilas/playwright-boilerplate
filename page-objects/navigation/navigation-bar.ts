import { Page } from '@playwright/test';
import { PageObject } from '../page-object';
import type { UserDropdownMenu } from './user-dropdown-menu';

export class NavigationBar extends PageObject {
  constructor(
    page: Page,
    readonly userDropdownMenu: UserDropdownMenu
  ) {
    super(page);
  }
}
