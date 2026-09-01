import type { TaskGuidePage } from '../types.ts';

export const shareSocialMediaAccountsWithoutPasswordsTaskGuide: TaskGuidePage = {
  path: "/guides/share-social-media-accounts-without-passwords/",
  family: "task-guide",
  label: "Share accounts without passwords",
  title: "How to Share Social Media Accounts Without Sharing Passwords",
  description: "Share social media logins by handing over a synchronized profile session instead of a password, with workspace roles and device revocation in AliasMode Cloud.",
  h1: "Share the profile, never the password.",
  eyebrow: "Account sharing guide",
  lead: "A password shared in chat never comes back. A synchronized browser profile does: teammates open the same persistent session through AliasMode Cloud while the password stays with its owner.",
  directAnswer: "Store the login once in an AliasMode profile, invite teammates to the Cloud workspace, and hand over sessions by closing and syncing the profile — not by sending credentials.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:share-social-media-accounts-without-passwords",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/manage-multiple-social-media-accounts-safely/", "/cloud/", "/guides/organize-client-browser-profiles/", "/security/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "Team access to shared accounts through synchronized profile sessions, with passwords held by one owner and device access revocable at any time.",
  prerequisites: [
    "AliasMode with a Cloud workspace and confirmed teammates",
    "One profile per shared account, with the password known only to its owner",
    "An agreement on who may open which profiles and when",
    "Two-factor authentication kept on the owner's device",
  ],
  steps: [
    { title: "Give each account one profile", body: "The shared account lives in one AliasMode profile. Its password is entered once, by the owner, and persists as a session in the profile's user-data directory." },
    { title: "Invite the team to the workspace", body: "Add teammates to your Cloud workspace with member roles. Access is a workspace membership, not a credential copy." },
    { title: "Sync the profile", body: "After the owner's first session, Cloud sync uploads an encrypted version of the portable profile. Teammates download it to their own machines." },
    { title: "Hand off by closing", body: "One operator has the session open at a time. Closing the profile syncs the latest state; the next teammate opens it with all cookies intact — no password ever moved." },
    { title: "Keep 2FA on the owner", body: "Two-factor prompts go to the owner's phone. If a teammate triggers one, they ask the owner — which is exactly the audit trail you want." },
    { title: "Revoke, don't rotate (first)", body: "When someone leaves, revoke their device in the Cloud workspace the same day. Password rotation is a last resort; device revocation is the fast, complete cut." },
    { title: "Log the windows", body: "Keep a simple log of who had a profile open and when. It costs seconds and answers every 'who posted this' question." },
  ],
  verification: ["A teammate opens the shared profile and lands in the logged-in session without asking for the password.", "Only the owner's device receives 2FA prompts.", "Revoking a removed teammate's device cuts their access immediately.", "The handoff log matches Cloud's version history for each profile."],
  cautions: ["Platforms still attribute all actions to the account; sharing access does not spread responsibility.", "Do not bypass the workspace by exporting profile folders manually — encrypted Cloud sync is the controlled path.", "Never paste credentials into shared documents or chat, even 'temporarily'; that copy is forever."],
  aliasModeWorkflow: [
    { title: "Workspace roles", body: "Owner and member roles in Cloud decide who can hold profiles at all — keep members few and named." },
    { title: "Encrypted sync", body: "Portable profiles sync encrypted with version-based checks, so stale sessions never overwrite current ones." },
    { title: "Concurrent-open warnings", body: "AliasMode warns when a profile is open elsewhere, keeping one-writer sessions honest." },
    { title: "Device revocation", body: "Lost laptop, offboarded teammate: revoke the device in the workspace and access ends there." },
  ],
  sections: [
    { id: "sharing-loop", title: "The password-free handoff loop", blocks: [
      { type: 'steps', items: [{ title: "Owner seeds the session", body: "The owner logs in once inside the profile and closes it to sync." }, { title: "Teammate claims the window", body: "A teammate opens the profile from their device — cookies arrive with it." }, { title: "Work and close", body: "Teammate works the account, closes, and the state syncs back." }, { title: "Log the window", body: "Both sides note the time window in the shared session log." }] },
    ]},
    { id: "sharing-methods", title: "Ways teams share accounts, compared", blocks: [
      { type: 'table', caption: "Credential sharing versus profile sharing", columns: ["Method", "What leaks", "Revocation"], rows: [
        ["Password in chat", "The credential itself, permanently", "Password rotation and hope"],
        ["Shared password manager", "The credential to everyone with vault access", "Vault item removal"],
        ["Platform team features", "Nothing, when the platform supports the role", "Role removal"],
        ["AliasMode profile session", "No credential; only a synced session", "Device revocation in the workspace"],
      ] },
    ]},
    { id: "sharing-faq", title: "Account sharing FAQ", blocks: [
      { type: 'faq', items: [{ question: "Is this safer than a shared password manager?", answer: "It solves a different problem: the password never leaves the owner, and what travels is a revocable session. Use a password manager for credentials; use profiles for session handoff." }, { question: "What happens if two people open the profile at once?", answer: "AliasMode warns on concurrent opens and retries pending uploads, so last-writer conflicts surface instead of silently overwriting." }, { question: "Does the teammate need the password at all?", answer: "Only when the platform itself forces a re-login. Then the owner enters it, on their own profile, and syncs — the credential never gets copied around." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "fb-sessions", source: "Facebook Help Center", title: "Manage where you are logged in", url: "https://www.facebook.com/help/", checkedOn: "2026-09-01" },
    { id: "x-security", source: "X Help Center", title: "Keep your account secure", url: "https://help.x.com/", checkedOn: "2026-09-01" },
    { id: "ig-2fa", source: "Instagram Help Center", title: "Two-factor authentication", url: "https://help.instagram.com/", checkedOn: "2026-09-01" },
  ],
};
