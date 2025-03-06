import {
  company,
  // blog,
  bookDemo,
  // changelog,
  contact,
  // features,
  homepage,
  // integrations,
  // pages,
  // pricing,
  equipmentLeasing, // ✅ Import the missing collection
  mortgage, 
  banks,
  security,
  automotive, 
  securityAlarm, 

} from "./types/pages.collections";

import {
  bookDemoSection,
  countriesServedSection,
  ctaSection,
  faqSection,
  integrationToolsSection,
  pricingSection,
  servicesSection,
  securitySection,
  testimonialSection,
  trustedBrandsSection,
} from "./types/sections.collections";

// Export collections
export const collections = {
  // Pages
  homepage,
  company,
  // blog,
  bookDemo,
  // changelog,
  contact,
  // features,
  // integrations,
  // pages,
  // pricing,
  equipmentLeasing, // ✅ Add the missing collection
  mortgage, 
  banks,
  security,
  automotive, 
  securityAlarm, 

  // Sections
  bookDemoSection,
  ctaSection,
  countriesServedSection,
  faqSection,
  integrationToolsSection,
  pricingSection,
  servicesSection,
  securitySection,
  testimonialSection,
  trustedBrandsSection,
};

