# Analytics Events Quick Reference

## 🎯 All Tracked Events

### Page Views (Automatic)
```javascript
// Tracked automatically on every route change
Event: 'page_view'
Parameters: {
  page_path: '/services',
  page_title: 'Services - ExperimentalLambda'
}
```

---

## 🔘 CTA Click Events

### Event Structure
```javascript
Event: 'cta_click'
Category: 'CTA'
Action: 'click'
Parameters: {
  cta_text: string,      // Button text
  cta_location: string,  // Where on site
  cta_type: string,      // primary_button | secondary_button
  destination_url: string // Where it goes
}
```

### All 8 CTAs Tracked

| CTA Text | Location | Type | Destination |
|----------|----------|------|-------------|
| Get Started | navbar | primary_button | /contact |
| Book Free Consultation | hero_section | primary_button | /contact |
| See How It Works | hero_section | secondary_button | #how-it-works |
| Book Free Consultation | final_cta_section | primary_button | /contact |
| Contact Us | final_cta_section | secondary_button | /contact |
| Talk to expert now | services_page | primary_button | /contact |

---

## 🧭 Navigation Events

### Event Structure
```javascript
Event: 'navigation_click'
Category: 'Navigation'
Action: 'click'
Parameters: {
  link_text: string,     // Link text
  link_location: string, // navbar
  destination: string    // /services
}
```

### All Navigation Links Tracked
- Home → `/`
- Services → `/services`
- About → `/about`
- Contact → `/contact`

---

## 📝 Form Events

### 1. Form Start
```javascript
Event: 'form_start'
Category: 'Form'
Action: 'start'
Parameters: {
  form_name: 'contact_form',
  form_location: 'contact_page'
}
```
**Triggered:** When user focuses on first field (Name)

---

### 2. Form Field Complete
```javascript
Event: 'form_field_complete'
Category: 'Form'
Action: 'field_complete'
Parameters: {
  form_name: 'contact_form',
  field_name: 'name' | 'email' | 'phone' | 'businessType' | 'message',
  field_order: 1-6
}
```
**Triggered:** When user fills a field and moves on

---

### 3. Form Submit
```javascript
Event: 'form_submit'
Category: 'Form'
Action: 'submit'
Parameters: {
  form_name: 'contact_form',
  business_type: 'laundry' | 'clinic' | 'salon' | 'repair' | 'gym' | 'realestate' | 'other',
  contact_method: 'whatsapp' | 'call',
  message_length: number,
  form_completion_time: number // seconds
}
```
**Triggered:** When user clicks "Request Consultation" button

---

### 4. Form Success (CONVERSION)
```javascript
Event: 'form_success'
Category: 'Form'
Action: 'success'
Parameters: {
  form_name: 'contact_form',
  business_type: string,
  contact_method: string
}

// PLUS Conversion Event
Event: 'contact_form_submission'
Category: 'Conversion'
Action: 'contact_form_submission'
Label: business_type
Value: 1
```
**Triggered:** When form submission succeeds
**Important:** This is marked as a CONVERSION in GA4

---

### 5. Form Error
```javascript
Event: 'form_error'
Category: 'Form'
Action: 'error'
Parameters: {
  form_name: 'contact_form',
  error_type: 'validation' | 'submission' | 'network',
  error_field: string,
  error_message: string
}
```
**Triggered:** When form submission fails

---

## 🎨 Engagement Events

### Theme Toggle
```javascript
Event: 'theme_toggle'
Category: 'Engagement'
Action: 'theme_toggle'
Parameters: {
  theme_mode: 'dark' | 'light',
  page_path: string
}
```
**Triggered:** When user clicks theme toggle button (☀️/🌙)

---

## 📊 How to View Events in GA4

### Real-Time Events
**Path:** Reports → Realtime → Event count by Event name

See events as they happen:
- `page_view`
- `cta_click`
- `form_start`
- `form_submit`
- `form_success`
- `navigation_click`
- `theme_toggle`

---

### Event Details
**Path:** Reports → Engagement → Events → Click event name

See parameters for each event:
- Event count
- Total users
- Event value
- All custom parameters

---

### Create Custom Report

**Example: CTA Performance Report**

1. Go to **Explore** → **Free form**
2. **Dimensions:**
   - `cta_text`
   - `cta_location`
   - `cta_type`
3. **Metrics:**
   - Event count
   - Total users
   - Events per user
4. **Filter:** Event name = `cta_click`

Result: See which CTAs perform best!

---

## 🔍 Event Debugging

### Console Logs (Development)
Every tracked event logs to console:

```
CTA Click: {
  ctaText: "Book Free Consultation",
  location: "hero_section",
  type: "primary_button",
  destination: "/contact"
}
```

### GA4 DebugView
**Path:** Admin → DebugView

- See events in real-time
- View all parameters
- No 24-hour delay
- Perfect for testing

---

## 🎯 Key Metrics to Monitor

### Conversion Funnel
```
Page View (Contact) 
  ↓
Form Start
  ↓
Form Submit
  ↓
Form Success ✅ CONVERSION
```

**Track drop-off at each step!**

---

### CTA Performance
```
Total CTA Clicks / Total Page Views = CTA Click Rate
```

**Target:** 10-15% click rate

---

### Form Completion
```
Form Success / Form Start = Completion Rate
```

**Target:** 70-80% completion rate

---

## 🚀 Quick Implementation Examples

### Track a New CTA
```javascript
import { useAnalytics } from '../hooks/useAnalytics';

function MyComponent() {
  const { trackCTA } = useAnalytics();
  
  return (
    <button 
      onClick={() => trackCTA(
        'Button Text',      // What it says
        'section_name',     // Where it is
        'primary_button',   // Type
        '/destination'      // Where it goes
      )}
    >
      Click Me
    </button>
  );
}
```

### Track a New Form
```javascript
import { useAnalytics } from '../hooks/useAnalytics';

function MyForm() {
  const { trackFormStart, trackFormSuccess } = useAnalytics();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Track submission
    const result = await submitForm();
    
    if (result.success) {
      trackFormSuccess('my_form', 'form_type', 'method');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        onFocus={() => trackFormStart('my_form', 'page_name')}
      />
    </form>
  );
}
```

---

## 📞 Event Naming Convention

### Format
```
{category}_{action}
```

### Examples
- `cta_click` - CTA button clicked
- `form_start` - Form interaction started
- `form_success` - Form submitted successfully
- `navigation_click` - Menu link clicked
- `theme_toggle` - Theme changed

### Custom Parameters
Use snake_case:
- `cta_text`
- `cta_location`
- `business_type`
- `contact_method`
- `form_completion_time`

---

**Last Updated:** February 15, 2026  
**Total Events Tracked:** 7 event types  
**Total CTAs Tracked:** 8 buttons  
**Total Navigation Links:** 4 links
