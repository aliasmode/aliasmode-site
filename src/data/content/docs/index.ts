import { docsPages as existing } from './_existing.ts';
import { mcpDocs } from './mcp.ts';
import { macosDocs } from './macos.ts';
import { linuxRemoteMcpDocs } from './linux-remote-mcp.ts';

/** New per-page records are appended here as files land in this directory. */
export const docsPages = [...existing, mcpDocs, macosDocs, linuxRemoteMcpDocs];
