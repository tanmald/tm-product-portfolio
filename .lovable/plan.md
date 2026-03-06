

## Update Portfolio with Real Data from Notion

I successfully accessed your Notion page and extracted all the relevant information. Here's what I found and what I plan to update:

### Data Extracted from Notion

**About You:**
- **Name**: Tania Maldonado
- **Current Role**: Product Manager @ BMW Group
- **Previous**: Tech Senior Consultant @ Deloitte
- **7+ years** of experience in product development and digital strategy
- Fluent in Portuguese, English, and Spanish
- Expertise in B2B and B2C solutions, market research, cross-functional teamwork

**Experience (2 roles):**
1. **BMW Group** — Product Manager (April 2022 - Present) — OEM Automotive
2. **Deloitte** — Tech Senior Consultant (August 2018 - April 2022) — Consulting

**Projects (4 featured):**
1. **ONE Sales Workplace** — Automotive, Germany, Web, B2B — "Web-based platform for retail partners worldwide to support end-to-end sales and business processes for new and used vehicles, as well as Financial Services, across all BMW Group brands."
2. **Unitel** — Telecommunications, Angola, Web & Mobile, B2C — "Self-service app for clients to manage their mobile services."
3. **NOS Self-Service App** — Telecommunications, Portugal, Mobile, B2C — "Self-service app for clients to manage their mobile services." (Features: check mobile consumption, pay invoices, purchase data packages, access promotions)
4. **HR Tool** — Human Resources, Portugal, Web, B2B — "Internal HR Tool where team members could share projects, fill timesheets, upload certifications."

**Skills database** has categories: Software, Language, Expertise (couldn't retrieve individual items, but I have the structure)

### Plan

#### 1. Update Home/Hero page with Tania's real info
- Change headline and subtitle to reflect Tania's actual role and pitch
- Update the eyebrow tag to "Product Manager @ BMW Group"
- Adjust the bio text with her real background

#### 2. Update Products page with real project data
- Replace the 4 placeholder products in `src/data/products.ts` with the 4 featured projects from Notion
- Update the `Product` interface to include new fields: `sector`, `country`, `platform`, `type` (B2B/B2C)
- Display sector, country, and platform as badges/tags on each product card
- Use relevant stock images for each sector (automotive, telecommunications, HR) since Notion image URLs are temporary signed URLs

#### 3. Update Navbar with Tania's name
- Add her name or initials to the navbar for personalization

### Technical Details
- Product data remains hardcoded in `src/data/products.ts` (easy to update later)
- New fields added to the Product interface: `sector`, `country`, `platform`, `type`
- Product cards will show tags for sector, country, platform, and B2B/B2C type
- Stock images from Unsplash will be used since Notion S3 URLs expire

