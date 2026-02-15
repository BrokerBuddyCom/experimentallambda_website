import posthog from 'posthog-js';

// Initialize PostHog
// Get your API key and host from: https://app.posthog.com/project/settings
const POSTHOG_API_KEY = process.env.REACT_APP_POSTHOG_API_KEY || 'phc_XXXXXXXXXX';
const POSTHOG_HOST = process.env.REACT_APP_POSTHOG_HOST || 'https://app.posthog.com';

export const initAnalytics = () => {
  if (POSTHOG_API_KEY && POSTHOG_API_KEY !== 'phc_XXXXXXXXXX') {
    posthog.init(POSTHOG_API_KEY, {
      api_host: POSTHOG_HOST,
      autocapture: true, // Automatically capture clicks, form submissions, etc.
      capture_pageview: false, // We'll manually track page views for better control
      capture_pageleave: true, // Track when users leave pages
      session_recording: {
        enabled: true, // Enable session recordings
        maskAllInputs: true, // Mask sensitive input fields
        maskTextSelector: '.sensitive', // Mask elements with this class
      },
      persistence: 'localStorage', // Use localStorage for persistence
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          posthog.debug(); // Enable debug mode in development
        }
      },
    });
    console.log('PostHog Analytics initialized');
  } else {
    console.warn('PostHog API key not configured. Set REACT_APP_POSTHOG_API_KEY in .env');
  }
};

// Track page views
export const trackPageView = (path, title) => {
  posthog.capture('$pageview', {
    $current_url: window.location.href,
    page_path: path,
    page_title: title,
  });
  
  console.log('Page View:', { path, title });
};

// Track CTA clicks
export const trackCTAClick = (ctaText, location, type, destination) => {
  posthog.capture('cta_click', {
    cta_text: ctaText,
    cta_location: location,
    cta_type: type,
    destination_url: destination,
  });
  
  console.log('CTA Click:', { ctaText, location, type, destination });
};

// Track navigation clicks
export const trackNavigation = (linkText, location, destination) => {
  posthog.capture('navigation_click', {
    link_text: linkText,
    link_location: location,
    destination: destination,
  });
  
  console.log('Navigation Click:', { linkText, location, destination });
};

// Track form interactions
export const trackFormStart = (formName, formLocation) => {
  posthog.capture('form_start', {
    form_name: formName,
    form_location: formLocation,
  });
  
  console.log('Form Start:', { formName, formLocation });
};

export const trackFormFieldComplete = (formName, fieldName, fieldOrder) => {
  posthog.capture('form_field_complete', {
    form_name: formName,
    field_name: fieldName,
    field_order: fieldOrder,
  });
  
  console.log('Form Field Complete:', { formName, fieldName, fieldOrder });
};

export const trackFormSubmit = (formName, businessType, contactMethod, messageLength, completionTime) => {
  posthog.capture('form_submit', {
    form_name: formName,
    business_type: businessType,
    contact_method: contactMethod,
    message_length: messageLength,
    form_completion_time: completionTime,
  });
  
  console.log('Form Submit:', { formName, businessType, contactMethod, messageLength, completionTime });
};

export const trackFormSuccess = (formName, businessType, contactMethod) => {
  // Track form success
  posthog.capture('form_success', {
    form_name: formName,
    business_type: businessType,
    contact_method: contactMethod,
  });
  
  // Track as conversion event
  posthog.capture('conversion', {
    conversion_type: 'contact_form_submission',
    business_type: businessType,
    contact_method: contactMethod,
  });
  
  // Set user properties for better segmentation
  posthog.people.set({
    last_business_type: businessType,
    preferred_contact_method: contactMethod,
    last_form_submission: new Date().toISOString(),
  });
  
  console.log('Form Success (Conversion):', { formName, businessType, contactMethod });
};

export const trackFormError = (formName, errorType, errorField, errorMessage) => {
  posthog.capture('form_error', {
    form_name: formName,
    error_type: errorType,
    error_field: errorField,
    error_message: errorMessage,
  });
  
  console.log('Form Error:', { formName, errorType, errorField, errorMessage });
};

// Track scroll depth
export const trackScrollDepth = (pagePath, scrollPercentage, section) => {
  posthog.capture('scroll_depth', {
    page_path: pagePath,
    scroll_percentage: scrollPercentage,
    scroll_section: section,
  });
  
  console.log('Scroll Depth:', { pagePath, scrollPercentage, section });
};

// Track section visibility
export const trackSectionView = (sectionName, pagePath, timeToView) => {
  posthog.capture('section_view', {
    section_name: sectionName,
    page_path: pagePath,
    time_to_view: timeToView,
  });
  
  console.log('Section View:', { sectionName, pagePath, timeToView });
};

// Track theme toggle
export const trackThemeToggle = (themeMode, pagePath) => {
  posthog.capture('theme_toggle', {
    theme_mode: themeMode,
    page_path: pagePath,
  });
  
  // Set user property for theme preference
  posthog.people.set({
    preferred_theme: themeMode,
  });
  
  console.log('Theme Toggle:', { themeMode, pagePath });
};

// Track service card interactions
export const trackServiceView = (serviceName, servicePosition) => {
  posthog.capture('service_view', {
    service_name: serviceName,
    service_position: servicePosition,
  });
  
  console.log('Service View:', { serviceName, servicePosition });
};

// Track FAQ interactions
export const trackFAQClick = (question, questionNumber) => {
  posthog.capture('faq_click', {
    question: question,
    question_number: questionNumber,
  });
  
  console.log('FAQ Click:', { question, questionNumber });
};

// Track outbound links
export const trackOutboundLink = (url, linkText) => {
  posthog.capture('outbound_link_click', {
    destination_url: url,
    link_text: linkText,
  });
  
  console.log('Outbound Link:', { url, linkText });
};

// Identify user (call this when you have user information)
export const identifyUser = (userId, userProperties = {}) => {
  posthog.identify(userId, userProperties);
  console.log('User Identified:', { userId, userProperties });
};

// Reset user identity (call on logout)
export const resetUser = () => {
  posthog.reset();
  console.log('User Identity Reset');
};

// Feature flags (for A/B testing)
export const isFeatureEnabled = (featureName) => {
  return posthog.isFeatureEnabled(featureName);
};

export const getFeatureFlag = (featureName) => {
  return posthog.getFeatureFlag(featureName);
};

// Export posthog instance for advanced usage
export { posthog };
