# Product direction

## Purpose

Lumio helps language learners develop real conversational fluency through a mobile-first learning experience. The initial language is German, beginning at CEFR A1.1. Additional languages should be possible without rebuilding the application around German-specific assumptions.

## Initial learners and outcomes

The first learning path is intended for beginners who need practical German for everyday interactions. Future lessons should help learners introduce themselves, understand simple questions, and participate in short, familiar conversations. These are proposed curriculum outcomes; formal curriculum mapping and content review belong to a later phase.

## Long-term capabilities

- Structured lessons organized around explicit language and proficiency goals.
- Personalized AI tutoring for guided conversational practice.
- Pronunciation assessment with useful, understandable feedback.
- Adaptive revision informed by prior practice.
- Progress tracking that helps learners understand what to practice next.

## Current scope

The skeleton establishes development tooling and application boundaries. Its only visible mobile behavior is a welcome screen. The API provides a liveness endpoint. No lessons, learner accounts, database, tutoring, audio recording, or progress tracking are included.

## Product principles

Keep mobile interactions clear and accessible. Favor meaningful practice over activity counts. Introduce AI only with explicit quality, privacy, and cost controls. Separate language-specific content from application behavior when content is introduced. Validate assumptions with learners before expanding scope.

## Decisions for later phases

Define the reviewed A1.1 curriculum, accessibility acceptance criteria, account requirements, content ownership, privacy requirements, and evaluation approach before implementing the corresponding features. No provider or persistence technology is selected in this PR.
