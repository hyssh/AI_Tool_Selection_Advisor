# AI Tool Selection Advisor Web App

**AI Tool Selection Advisor** is an interactive web application designed to help decision makers identify the right Microsoft AI solution for their needs. It asks a series of questions and then recommends the best fit among **Microsoft 365 Copilot**, **Copilot Studio**, and **Azure AI Foundry**, complete with a score-based justification.

---

## Project Goal

**The goal of this project is to streamline the AI tool selection process for organizations.** It provides a guided decision tree that evaluates your requirements and suggests the most suitable AI platform. Key objectives include:

- **Simplify Decision Making:** Rather than sifting through documentation, users answer a short questionnaire and get a clear recommendation.
- **Educate Users:** Along the way, users learn *why* a certain tool is recommended (through the scoring of each answer), gaining insight into the strengths of each platform.
- **Reduce Analysis Time:** By condensing expert knowledge into a Q&A format, the app accelerates the evaluation phase from days of research to minutes.

---

## What It’s Designed For

**This app is designed for both business and technical decision makers** who are considering Microsoft’s AI tools. It caters to scenarios such as:

- **Business Decision Makers:** Non-technical stakeholders can use plain-language answers to describe goals (e.g., *“enhance internal productivity”* or *“need a custom AI for customers”*) and get a recommendation that aligns with business needs.
- **Technical Decision Makers:** IT professionals or developers can specify technical requirements (data sources, customization level, existing infrastructure) and receive guidance on which platform fits those specs.
- **Enterprise Planning:** Organizations evaluating AI capabilities can ensure they choose a tool that matches both their **strategic goals** and **technical environment** by involving both perspectives.

*Designed with simplicity in mind, the app requires no prior knowledge of the tools* – it explains options in the context of your answers.

---

## What You Can Achieve

**By using the AI Tool Selection Advisor, you can achieve:**

- **Identify the Best-Fit AI Platform:** After answering ~20 targeted questions, you’ll receive a ranked recommendation (with scores) showing which AI tool (M365 Copilot, Copilot Studio, or AI Foundry) best meets your needs.
- **Customized Guidance:** The output isn’t just a tool name – it includes a brief rationale. For example, you might see *“Microsoft 365 Copilot: 8 points”* because your answers emphasized internal data and quick deployment.
- **Confidence in Decision:** The structured approach ensures you haven’t overlooked crucial factors (like data volume or user audience). This gives confidence that the chosen solution is backed by a thorough assessment.
- **Time Savings:** In a few minutes, get clarity that might otherwise require lengthy meetings or consulting sessions. The app encapsulates best practices and common decision criteria in a handy self-service tool.

---

## How It Works

**The app uses a question-and-score decision tree:**

1. **Interactive Q&A:** You’ll be prompted with one question at a time, each with multiple-choice answers. Questions cover business goals, user types, data characteristics, technical requirements, etc.
2. **On-the-Fly Scoring:** Each answer adds points to one or more of the AI tool options (Microsoft 365 Copilot, Copilot Studio, AI Foundry) behind the scenes. (For instance, choosing *“External users only”* adds points favoring Azure AI Foundry, since it’s best for external-facing apps.)
3. **Dynamic Progress:** After you select an answer, the next question appears. Your choices are remembered as you go – you can focus on one decision at a time.
4. **Final Recommendation:** At the end, the app tallies the scores and displays the winner and a breakdown. You’ll see something like: **Recommended: Copilot Studio** (with perhaps Copilot Studio scoring 5, M365 Copilot 3, AI Foundry 2 based on your inputs).

This simple flow is powered entirely by front-end JavaScript and a JSON config file (`questions.json`) containing all questions, options, and scoring rules. It’s deployed as a static web app, so you can run it on any web server (or locally) without additional setup.

---

## Feedback

We welcome feedback and suggestions to improve the AI Tool Selection Advisor. If you encounter issues, have feature requests, or want to share how you’ve used this tool:

- **Email:** Please reach out to **HyunSuk Shin** at hyssh@microsoft.com with your comments.
- **GitHub Issues:** (If this project is on GitHub) Feel free to open an issue for bugs or enhancements.

---

*Thank you for using the AI Tool Selection Advisor!* We hope it makes your journey in choosing the right AI platform easier and more informed. Please don’t hesitate to send your thoughts our way — your feedback helps make this tool better for everyone.