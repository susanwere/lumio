# Phased product roadmap

This roadmap describes proposed delivery order, not committed dates. Each phase should ship through focused pull requests. Revisit scope after learner feedback and technical validation.

| Phase                              | Scope                                                                                              | Exit criteria                                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1. Project skeleton                | Expo app, Fastify health endpoint, shared contracts, tooling, CI, documentation                    | Apps start independently; checks pass; welcome screen is smoke-tested on iOS and Android                             |
| 2. German A1.1 learning foundation | Reviewed curriculum structure, language-aware content model, basic lesson navigation and exercises | A small reviewed lesson sequence works end to end; accessibility and content quality criteria are agreed and checked |
| 3. Learner progress                | Define identity/privacy requirements; choose persistence; record completion and resume learning    | Progress survives sessions; access boundaries, deletion behavior, and failure cases are tested                       |
| 4. Conversational AI tutoring      | Select provider through evaluation; introduce guided conversations with beginner-level constraints | Tutoring meets agreed quality, safety, latency, and cost thresholds on a reviewed evaluation set                     |
| 5. Pronunciation practice          | Audio permissions and capture, service evaluation, pronunciation feedback                          | Device tests cover recording, permission denial, and failure recovery; feedback is validated with language reviewers |
| 6. Adaptive revision               | Practice scheduling based on learner history; explainable progress summaries                       | Revision choices are testable and understandable; learner feedback supports the approach                             |
| 7. Expansion and release readiness | Additional CEFR material/languages; reliability, accessibility, security, and distribution review  | A second language validates content boundaries; release and support criteria are met                                 |

## Dependencies and decision gates

Curriculum and exercise quality come before personalization. Persistent learner data requires explicit privacy and identity decisions. AI and speech integrations require evaluation and cost controls before broad rollout. Adaptive revision depends on trustworthy progress data.

Phase 1 deliberately excludes databases, authentication, AI integration, deployment infrastructure, and product features. Later phases must introduce their own acceptance criteria, tests, and architecture decisions.
