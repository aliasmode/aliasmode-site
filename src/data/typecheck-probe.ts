import { contentPages } from './content-index';
import type { ContentPage } from './content/types';
const check: ContentPage[] = contentPages;
// force use
export const total = check.length;
