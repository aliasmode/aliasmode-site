import type { ComparisonPage } from '../types';
import { adspowerComparison } from './adspower';
import { dolphinAntyComparison } from './dolphin-anty';
import { gologinComparison } from './gologin';
import { multiloginComparison } from './multilogin';

export const comparisonPages: ComparisonPage[] = [adspowerComparison, gologinComparison, multiloginComparison, dolphinAntyComparison];
