# Product Requirements Document
## GCF Malaysia 56th Thanksgiving Dinner Website

**Version:** 1.0 · **Date:** 23 June 2026 · **Owner:** Chan Ying Qian (GCF)

---

## 1. Overview

**Project:** GCF 56th Thanksgiving Dinner Event Website
**Type:** Standalone single-page application (SPA)

**Objective:** A dedicated, easily accessible landing page that promotes the Graduates Christian Fellowship (GCF) Malaysia's 56th anniversary dinner. The site serves as the central digital hub for event information, ticketing details, and payment instructions — while also showcasing GCF's 56-year legacy and inviting the next generation into the story.

**Core Narrative:** *"Honoring the Past, Building the Future"* — bridge the older and younger generations of the Malaysian Christian community.

---

## 2. Target Audience

| Persona | Description | Needs |
|---|---|---|
| **GCF members & alumni** | Long-time supporters, past beneficiaries | Simple, readable; phone/in-person registration option |
| **Young adults (<30)** | Gen Z, Millennials seeking fellowship | Modern, mobile-friendly; subsidised pricing |
| **Donors & supporters** | Churches, Christian orgs, individual donors | Clear payment instructions; bank transfer details |
| **Table Hosts** | Individuals buying a full table of 10 | Easy table purchase + guest assignment flow |

**Technical skill level:** Low — site must be ultra-simple. Registration is handled offline (Jimmy Lee, phone/WhatsApp).

---

## 3. Core Features & Content

### 3.1 Hero Section

- **Visuals:** Elegant gold and dark aesthetic (matching promotional poster), incorporating the GCF logo
- **Primary copy:** "56 Years of God's Faithfulness" / "56th Thanksgiving Dinner"
- **Theme:** "Honoring the Past, Building the Future"
- **Theme verse:** Lamentations 3:22-23 — *"Great Is Thy Faithfulness"*
- **CTA:** Prominent "Register Now" button → anchors to ticketing section

### 3.2 Event Details Section

| Detail | Value |
|---|---|
| **Date** | Saturday, 15 August 2026 |
| **Time** | 6:00 PM – 9:00 PM |
| **Venue** | Happiness Banquet Restaurant, Subang |
| **Venue link** | Clickable Google Maps hyperlink |
| **Dress code** | Smart casual |
| **Parking** | Plenty available |

**Messaging:** *"Come and be refreshed, inspired, and reminded that we are part of something far greater than ourselves – God's continuing story through GCF."*

### 3.3 About GCF Section

- **History:** Founded 1969, grew from the Fellowship of Evangelical Students (FES) ministry in Malaysia & Singapore
- **Achievements:** 56 years of ministering to thousands of Malaysian Christian professionals and graduates
- **Current ministry:**
  - **iBridge** — youth & young adults
  - **Impact** — 30s–40s marketplace professionals
  - **Nation-Building** — societal transformation
- **Future vision:** Open doors for collaboration with Christian organisations
- **Mission:** *"To serve the underserved through marketplace and multicultural fellowship, ministry in and beyond GCF"*
- **Vision statement:** *"Mobilizing Graduates to Impact the Marketplace for the Glory of Christ!"*

### 3.4 Ticketing Structure

| Tier | Price | Notes |
|---|---|---|
| **Standard** | RM 100/person · RM 1,000/table of 10 | General admission |
| **Young Adults** | RM 60/person | Below age 30 |

**Fundraising disclaimer** (highly visible footer):
> *"All proceeds from this fundraising dinner will be used to finance GCF Malaysia Ministries."*

### 3.5 Payment Instructions

| Field | Detail |
|---|---|
| **Bank** | Maybank |
| **Account Name** | Graduate Christian Fellowship Malaysia |
| **Account No** | 512231333111 |
| **Reference** | GCF56 |

**Steps:**
1. Make a bank transfer to the account above
2. Use reference: GCF56
3. Email your payment slip to finance@gcfmalaysia.org
4. RSVP by 31 July 2026

### 3.6 Contact & Support

| Contact | Detail |
|---|---|
| **Primary** | Jimmy Lee — 019-2214199 (clickable tel: link) |
| **Secondary** | Celina — 012-2919510 (clickable tel: link) |
| **Email** | finance@gcfmalaysia.org |
| **Shortlink** | https://tinyurl.com/GCF56thDinner |
| **QR Code** | Display for desktop→mobile sharing |
| **Social** | Instagram · Facebook · LinkedIn |

### 3.7 Post-Event (Post August 15)

- Transition landing page to a "Thank You" page
- Photo gallery from the dinner
- Link to gcfmalaysia.org for upcoming programmes
- Open invitation for future collaboration with Christian organisations

---

## 4. Design & UX Requirements

### 4.1 Design Principles

| Principle | Implementation |
|---|---|
| **Modern** | Contemporary design trends — glass morphism, gradient accents, clean whitespace |
| **Wow factor** | Scroll-triggered animations, parallax effects, micro-interactions, animated hero |
| **Elegant** | Gold (#D4AF37) and dark (#1a1a2e) palette — matching the promotional poster |
| **Responsive** | Fluid layout — looks stunning on iPhone SE to 4K desktop |

### 4.2 Visual & Animation Requirements

- **Hero:** Animated text reveal with subtle particle/floating light effects (gold particles on dark background)
- **Scroll:** Section fade-in / slide-up on scroll (Framer Motion)
- **Typography:** Large, bold serif for headings (Playfair Display) + clean sans-serif body (Inter)
- **Cards/Tiers:** Glass-morphism ticket cards with hover lift effect
- **Buttons:** Smooth hover transitions, subtle glow on CTA
- **Countdown timer:** Animated countdown to August 15, 2026
- **QR Code section:** Animated reveal with copy-to-clipboard for shortlink
- **Timeline:** Horizontal scrollable timeline from 1969 to 2026
- **Legacy Counters:** Animated number counters (56 years, thousands of graduates)
- **Testimonials:** Flip cards with placeholder quotes
- **Sepia Transition:** Parallax section showing B&W → color photo transition
- **Vision Reveal:** Word-by-word animation of GCF vision statement

---

## 5. Technical Specifications

| Layer | Spec |
|---|---|
| **Framework** | React + Vite (TypeScript) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Particles** | @tsparticles/react |
| **Counters** | react-countup |
| **QR Code** | qrcode.react |
| **Icons** | Lucide React |
| **Fonts** | Google Fonts — Playfair Display + Inter |
| **Hosting** | Vercel |
| **Analytics** | Vercel Analytics (to be added) |

---

## 6. Out of Scope

- Online payment gateway (Stripe, PayPal, etc.)
- Real-time donation thermometer / progress bar
- CRM integration (Salesforce, HubSpot)
- Eventbrite or third-party event tools
- Digital auction / raffle / live bidding
- Corporate sponsor portal
- Interactive seating chart (Jimmy arranges manually)
- Automated tax receipts (Lina handles manually)

---

## 7. Registration

**Existing Google Form:** https://docs.google.com/forms/d/e/1FAIpQLSdJhYVx84ldjITVIV5wvtz_PAkm27lPM-tTW21DmNhjnLMOgg/viewform

**Shortlink:** https://tinyurl.com/GCF56thDinner

The website links out to this form via "Register Now" buttons. No custom form is built into the site.

---

## 8. Content Placeholders (To Be Provided)

- [ ] 4-6 timeline milestones (year + title + brief description)
- [ ] 3-5 testimonial quotes (name, role, quote)
- [ ] Historical photos (B&W / sepia)
- [ ] Modern/current photos (colour)
- [ ] GCF logo (high-res)
- [ ] QR code image (or generate from shortlink)

---

## 9. Build Status

- [x] Project scaffolded (Vite + React + TypeScript)
- [x] Dependencies installed
- [x] Tailwind CSS configured with gold theme
- [x] All 14 components built
- [x] Data files created with constants
- [x] Build passes
- [ ] Content placeholders replaced with real content
- [ ] Deployed to Vercel
