# PostHog Analytics Setup Guide
## ExperimentalLambda Website - Complete Analytics with Session Recordings

This guide will help you set up PostHog analytics for your website.

---

## 🎉 Why PostHog?

PostHog is an **open-source product analytics platform** that gives you:

✅ **Event Tracking** - Track all CTAs, forms, and user interactions
✅ **Session Recordings** - Watch how users interact with your site
✅ **Heatmaps** - See where users click and scroll
✅ **Feature Flags** - A/B test features without deploying code
✅ **User Identification** - Track individual user journeys
✅ **Funnels & Insights** - Analyze conversion funnels
✅ **Privacy-First** - Self-hostable, GDPR compliant
✅ **Free Tier** - 1M events/month free forever

---

## 📋 What Has Been Implemented

✅ **Installed Package:**
- `posthog-js` - Official PostHog JavaScript SDK

✅ **Created/Updated Files:**
- `/src/utils/analytics.js` - PostHog tracking functions
- `/src/hooks/useAnalytics.js` - React hooks (no changes needed)
- `.env.example` - PostHog environment variables
- `App.js` - PostHog initialization

✅ **All Components Already Tracked:**
- ✅ Navbar (CTAs, navigation, theme toggle)
- ✅ Hero (Primary & secondary CTAs)
- ✅ FinalCTA (Both CTA buttons)
- ✅ Services (Services page CTA)
- ✅ Contact (Complete form funnel)

✅ **PostHog Features Enabled:**
- ✅ Automatic click tracking (autocapture)
- ✅ Session recordings (with input masking)
- ✅ Page leave tracking
- ✅ User identification
- ✅ Feature flags support

---

## 🚀 Quick Start (10 Minutes)

### Step 1: Create PostHog Account (Free)

1. Go to [PostHog Cloud](https://app.posthog.com/signup)
2. Sign up with your email (or GitHub/Google)
3. Create your organization: `ExperimentalLambda`
4. Create a project: `ExperimentalLambda Website`

### Step 2: Get Your API Key

1. After signup, you'll see your **Project API Key**
2. Or go to: **Settings** → **Project** → **Project API Key**
3. Copy the key (format: `phc_XXXXXXXXXX`)

### Step 3: Configure Your Website

1. Create a `.env` file in your project root:
   ```bash
   # Copy the example file
   cp .env.example .env
   ```

2. Open `.env` and add your API key:
   ```env
   REACT_APP_POSTHOG_API_KEY=phc_XXXXXXXXXX
   REACT_APP_POSTHOG_HOST=https://app.posthog.com
   ```
   ⚠️ Replace `phc_XXXXXXXXXX` with your actual API key

3. **Restart your development server:**
   ```bash
   npm start
   ```

### Step 4: Verify Tracking is Working

1. Open your website in a browser
2. Open **PostHog** → **Activity** → **Live Events**
3. You should see events appearing in real-time!
4. Check browser console for tracking logs

---

## 📊 What's Being Tracked

### 1. Page Views (Automatic)
Every page navigation is tracked with:
- Page path
- Page title
- Current URL

### 2. CTA Clicks (8 CTAs)
All button clicks tracked with:
- `cta_text` - Button text
- `cta_location` - Where on site
- `cta_type` - primary_button | secondary_button
- `destination_url` - Where it goes

### 3. Navigation Clicks
All navbar menu links with:
- `link_text` - Link text
- `link_location` - navbar
- `destination` - Target page

### 4. Form Tracking (Contact Form)
Complete funnel tracking:
- **form_start** - User focuses on first field
- **form_field_complete** - Each field filled
- **form_submit** - Submission attempt with:
  - Business type
  - Contact method
  - Message length
  - Completion time
- **form_success** - Successful submission (**CONVERSION**)
- **form_error** - Failed submissions

### 5. Engagement Events
- **theme_toggle** - Dark/Light mode switches
- **scroll_depth** - Ready to implement
- **section_view** - Ready to implement

### 6. Automatic Tracking (PostHog Autocapture)
PostHog automatically captures:
- All button clicks
- All link clicks
- Form submissions
- Rage clicks (frustrated users)
- Dead clicks (clicks on non-interactive elements)

---

## 🎬 Session Recordings

### What Are Session Recordings?

PostHog records actual user sessions so you can:
- **Watch** how users navigate your site
- **See** where they get confused
- **Identify** UX issues
- **Understand** user behavior

### Privacy & Security

✅ **Input fields are masked** - Passwords, emails, etc. are hidden
✅ **Sensitive elements masked** - Add class `.sensitive` to any element
✅ **GDPR compliant** - Users can opt-out
✅ **No PII captured** - Unless you explicitly identify users

### How to View Recordings

1. Go to PostHog → **Session Recordings**
2. Filter by:
   - Date range
   - User properties
   - Events (e.g., "show me sessions where form_success happened")
3. Click any session to watch the replay

### Pro Tips

**Find Problem Sessions:**
- Filter by "form_start" but NOT "form_success" → See why users abandon forms
- Filter by "rage clicks" → See where users get frustrated
- Filter by "error" events → See what breaks

---

## 📈 Viewing Your Analytics Data

### Live Events
**Path:** Activity → Live Events

See events in real-time:
- Event name
- User properties
- Event properties
- Timestamp

### Insights (Analytics)
**Path:** Insights → New Insight

Create custom analytics:
1. **Trends** - Track events over time
2. **Funnels** - Conversion funnel analysis
3. **Retention** - User retention rates
4. **Paths** - User journey visualization

### Example Insights to Create

#### 1. CTA Performance Comparison
```
Insight Type: Trends
Event: cta_click
Breakdown by: cta_text
Chart: Bar chart
```
**Result:** See which CTAs get the most clicks

#### 2. Contact Form Funnel
```
Insight Type: Funnel
Steps:
  1. page_view (where page_path = /contact)
  2. form_start
  3. form_submit
  4. form_success
```
**Result:** See drop-off at each step

#### 3. Business Type Analysis
```
Insight Type: Trends
Event: form_success
Breakdown by: business_type
Chart: Pie chart
```
**Result:** Which business types convert most

#### 4. Form Completion Time
```
Insight Type: Trends
Event: form_submit
Aggregation: Average of form_completion_time
```
**Result:** How long users take to fill form

---

## 🎯 Feature Flags & A/B Testing

### What Are Feature Flags?

Test different versions of your site without deploying code!

### Example Use Cases

1. **Test CTA Text:**
   - Version A: "Book Free Consultation"
   - Version B: "Get Started Free"

2. **Test Hero Headline:**
   - Version A: Current headline
   - Version B: Alternative headline

3. **Test Form Fields:**
   - Version A: 6 fields
   - Version B: 4 fields (simplified)

### How to Use Feature Flags

1. **Create a Feature Flag in PostHog:**
   - Go to Feature Flags → New Feature Flag
   - Name: `new_cta_text`
   - Rollout: 50% of users

2. **Use in Your Code:**
   ```javascript
   import { isFeatureEnabled } from '../utils/analytics';
   
   function Hero() {
     const useNewCTA = isFeatureEnabled('new_cta_text');
     
     return (
       <button>
         {useNewCTA ? 'Get Started Free' : 'Book Free Consultation'}
       </button>
     );
   }
   ```

3. **Analyze Results:**
   - PostHog automatically tracks which variant converts better
   - View in: Experiments → Your Feature Flag

---

## 🔍 User Identification

### Why Identify Users?

Track individual user journeys across sessions and devices.

### When to Identify

Call `identifyUser()` when you have user information:

```javascript
import { identifyUser } from '../utils/analytics';

// After form submission
identifyUser('user@email.com', {
  name: 'John Doe',
  business_type: 'laundry',
  contact_method: 'whatsapp',
  signup_date: new Date().toISOString(),
});
```

### User Properties

PostHog automatically tracks:
- `preferred_theme` - Dark or light mode
- `last_business_type` - From contact form
- `preferred_contact_method` - WhatsApp or call
- `last_form_submission` - Timestamp

### View User Profiles

1. Go to **Persons** in PostHog
2. Click any user to see:
   - All events they triggered
   - Session recordings
   - User properties
   - Complete journey timeline

---

## 📊 Dashboards

### Create a Custom Dashboard

1. Go to **Dashboards** → **New Dashboard**
2. Name: `ExperimentalLambda - Main Dashboard`
3. Add insights:
   - Total conversions (form_success count)
   - CTA click rate
   - Form completion funnel
   - Top business types
   - Average session duration

### Pre-built Dashboards

PostHog provides templates:
- **Website Analytics** - Page views, sessions, bounce rate
- **Conversion Funnel** - Complete funnel analysis
- **User Retention** - How often users return

---

## 🔧 Advanced Configuration

### Self-Hosting PostHog (Optional)

For complete data control:

1. Deploy PostHog on your own server
2. Update `.env`:
   ```env
   REACT_APP_POSTHOG_HOST=https://your-posthog-instance.com
   ```

[Self-hosting guide](https://posthog.com/docs/self-host)

### Disable Session Recordings

If you don't want session recordings:

In `src/utils/analytics.js`:
```javascript
session_recording: {
  enabled: false, // Disable recordings
}
```

### Custom Event Properties

Add more context to any event:

```javascript
trackCTAClick('Book Now', 'hero', 'primary', '/contact', {
  user_scroll_depth: 50,
  time_on_page: 30,
  device_type: 'mobile',
});
```

---

## 🐛 Troubleshooting

### Events Not Showing Up?

1. **Check Console Logs:**
   - Open browser DevTools → Console
   - You should see: `CTA Click: {...}`

2. **Check API Key:**
   - Verify `.env` has correct `REACT_APP_POSTHOG_API_KEY`
   - Restart dev server after changing `.env`

3. **Check PostHog Status:**
   - Go to PostHog → Activity → Live Events
   - Events appear immediately (no delay)

4. **Ad Blockers:**
   - Disable ad blockers when testing
   - They often block PostHog

### Session Recordings Not Working?

1. **Check Settings:**
   - PostHog → Settings → Project → Recordings
   - Ensure "Record user sessions" is enabled

2. **Check Browser:**
   - Session recordings work in modern browsers
   - May not work in incognito/private mode

### Environment Variable Not Loading?

```bash
# .env file must be in project root
# NOT in /src or /public

# File should be named exactly:
.env

# Restart dev server after creating/editing:
npm start
```

---

## 📈 Key Metrics to Monitor

### Primary KPIs (Weekly)

1. **Conversion Rate**
   - Formula: (form_success / page_view) × 100
   - Target: 2-5%

2. **CTA Click Rate**
   - Formula: (cta_click / page_view) × 100
   - Target: 10-15%

3. **Form Completion Rate**
   - Formula: (form_success / form_start) × 100
   - Target: 70-80%

### Secondary KPIs (Monthly)

4. **Average Session Duration**
   - Target: 2-3 minutes

5. **Pages Per Session**
   - Target: 2.5-3.5 pages

6. **Return Visitor Rate**
   - Target: 20-30%

---

## 🎓 PostHog vs Google Analytics

| Feature | PostHog | Google Analytics |
|---------|---------|------------------|
| **Event Tracking** | ✅ Unlimited | ✅ Limited |
| **Session Recordings** | ✅ Yes | ❌ No |
| **Heatmaps** | ✅ Yes | ❌ No |
| **Feature Flags** | ✅ Yes | ❌ No |
| **User Identification** | ✅ Yes | ⚠️ Limited |
| **Self-Hosting** | ✅ Yes | ❌ No |
| **Privacy** | ✅ GDPR-first | ⚠️ Concerns |
| **Free Tier** | ✅ 1M events/month | ✅ Unlimited |
| **Data Ownership** | ✅ You own it | ❌ Google owns it |

---

## 🔒 Privacy & Compliance

### GDPR Compliance

PostHog is GDPR compliant by default:
- ✅ Data stored in EU (if using EU cloud)
- ✅ User opt-out supported
- ✅ Data deletion on request
- ✅ No third-party data sharing

### Cookie Consent

PostHog uses localStorage (not cookies), but you should still:

1. **Add Cookie Consent Banner:**
   ```bash
   npm install react-cookie-consent
   ```

2. **Implement Consent:**
   ```javascript
   import CookieConsent from 'react-cookie-consent';
   
   <CookieConsent
     onAccept={() => {
       initAnalytics(); // Only init after consent
     }}
   >
     We use analytics to improve your experience.
   </CookieConsent>
   ```

### Update Privacy Policy

Add this section:

```
Analytics & Session Recordings

We use PostHog to understand how visitors use our website. PostHog may:
- Track pages you visit and buttons you click
- Record your session (with sensitive data masked)
- Store your preferences (theme, etc.)

We do not share this data with third parties. You can opt-out at any time.
```

---

## ✅ Quick Checklist

- [ ] Created PostHog account (free)
- [ ] Got API key (phc_XXXXXXXXXX)
- [ ] Created `.env` file with API key
- [ ] Restarted development server
- [ ] Verified tracking in PostHog Live Events
- [ ] Checked session recordings are working
- [ ] Created main dashboard
- [ ] Set up conversion funnel insight
- [ ] Updated Privacy Policy
- [ ] (Optional) Added cookie consent banner

---

## 📚 Resources

### PostHog Documentation
- [Getting Started](https://posthog.com/docs/getting-started)
- [Event Tracking](https://posthog.com/docs/integrate/client/js)
- [Session Recordings](https://posthog.com/docs/user-guides/recordings)
- [Feature Flags](https://posthog.com/docs/user-guides/feature-flags)

### Tutorials
- [PostHog + React Guide](https://posthog.com/tutorials/react-analytics)
- [Building Funnels](https://posthog.com/docs/user-guides/funnels)
- [A/B Testing](https://posthog.com/docs/user-guides/experimentation)

---

## 🆘 Need Help?

### PostHog Support
- [Community Forum](https://posthog.com/questions)
- [Slack Community](https://posthog.com/slack)
- [Email Support](mailto:hey@posthog.com)

### Common Issues
1. Check browser console for errors
2. Verify API key is correct
3. Ensure dev server restarted after `.env` changes
4. Check PostHog Live Events for real-time verification

---

**Last Updated:** February 15, 2026  
**Version:** 2.0 (PostHog)  
**Free Tier:** 1M events/month, unlimited session recordings
