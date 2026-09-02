import { integrationPages as existing } from './_existing.ts';
import { claudeCodeIntegration } from './claude-code.ts';
import { codexIntegration } from './codex.ts';
import { openclawIntegration } from './openclaw.ts';
import { hermesIntegration } from './hermes.ts';
import { claudeAiIntegration } from './claude-ai.ts';
import { chatgptIntegration } from './chatgpt.ts';

/** New per-page records are appended here as files land in this directory. */
export const integrationPages = [
  ...existing,
  claudeCodeIntegration,
  codexIntegration,
  openclawIntegration,
  hermesIntegration,
  claudeAiIntegration,
  chatgptIntegration,
];
