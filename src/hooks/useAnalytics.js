import { useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import * as analytics from '../utils/analytics';

/**
 * Custom hook for analytics tracking
 * Provides easy-to-use tracking functions throughout the app
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Track CTA clicks
  const trackCTA = useCallback((ctaText, ctaLocation, ctaType, destination) => {
    analytics.trackCTAClick(ctaText, ctaLocation, ctaType, destination);
  }, []);

  // Track navigation
  const trackNav = useCallback((linkText, linkLocation, destination) => {
    analytics.trackNavigation(linkText, linkLocation, destination);
  }, []);

  // Track form events
  const trackFormStart = useCallback((formName, formLocation) => {
    analytics.trackFormStart(formName, formLocation);
  }, []);

  const trackFormField = useCallback((formName, fieldName, fieldOrder) => {
    analytics.trackFormFieldComplete(formName, fieldName, fieldOrder);
  }, []);

  const trackFormSubmit = useCallback((formName, businessType, contactMethod, messageLength, completionTime) => {
    analytics.trackFormSubmit(formName, businessType, contactMethod, messageLength, completionTime);
  }, []);

  const trackFormSuccess = useCallback((formName, businessType, contactMethod) => {
    analytics.trackFormSuccess(formName, businessType, contactMethod);
  }, []);

  const trackFormError = useCallback((formName, errorType, errorField, errorMessage) => {
    analytics.trackFormError(formName, errorType, errorField, errorMessage);
  }, []);

  // Track engagement
  const trackScroll = useCallback((scrollPercentage, section) => {
    analytics.trackScrollDepth(location.pathname, scrollPercentage, section);
  }, [location.pathname]);

  const trackSection = useCallback((sectionName, timeToView) => {
    analytics.trackSectionView(sectionName, location.pathname, timeToView);
  }, [location.pathname]);

  const trackTheme = useCallback((themeMode) => {
    analytics.trackThemeToggle(themeMode, location.pathname);
  }, [location.pathname]);

  // Track service interactions
  const trackService = useCallback((serviceName, servicePosition) => {
    analytics.trackServiceView(serviceName, servicePosition);
  }, []);

  // Track FAQ
  const trackFAQ = useCallback((question, questionNumber) => {
    analytics.trackFAQClick(question, questionNumber);
  }, []);

  // Track outbound links
  const trackOutbound = useCallback((url, linkText) => {
    analytics.trackOutboundLink(url, linkText);
  }, []);

  return {
    trackCTA,
    trackNav,
    trackFormStart,
    trackFormField,
    trackFormSubmit,
    trackFormSuccess,
    trackFormError,
    trackScroll,
    trackSection,
    trackTheme,
    trackService,
    trackFAQ,
    trackOutbound,
  };
};

/**
 * Hook to track page views automatically
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pageTitle = document.title;
    analytics.trackPageView(location.pathname + location.search, pageTitle);
  }, [location]);
};

/**
 * Hook to track scroll depth
 */
export const useScrollTracking = (sectionName = null) => {
  const location = useLocation();

  useEffect(() => {
    const milestones = [25, 50, 75, 90, 100];
    const reached = new Set();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);

      milestones.forEach((milestone) => {
        if (percentage >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          analytics.trackScrollDepth(location.pathname, milestone, sectionName);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, sectionName]);
};

/**
 * Hook to track section visibility using Intersection Observer
 */
export const useSectionTracking = (sectionRef, sectionName) => {
  const location = useLocation();

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const startTime = Date.now();
    let tracked = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tracked) {
            const timeToView = Math.round((Date.now() - startTime) / 1000);
            analytics.trackSectionView(sectionName, location.pathname, timeToView);
            tracked = true;
          }
        });
      },
      { threshold: 0.5 } // Track when 50% of section is visible
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionRef, sectionName, location.pathname]);
};
