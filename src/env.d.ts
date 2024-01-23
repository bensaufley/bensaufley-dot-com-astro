/// <reference path="../.astro/types.d.ts" />
/// <reference path="astro/client" />

import type { PartytownConfig } from '@astrojs/partytown';
import type { Command, Gtag, GtagCommands } from 'gtag.js';

declare global {
  const gtag: Gtag;
  let dataLayer: [command: Command, ...args: GtagCommands[Command]][];
  let partytown: PartytownConfig;

  interface Window {
    gtag: Gtag;
    dataLayer: [command: Command, ...args: GtagCommands[Command]][];
  }
}
