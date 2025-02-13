import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const bookDemoSection = defineCollection({
  loader: glob({
    pattern: "book-demo.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    head: z.string(),
    icon: z.string(),
    title: z.string(),
    subtitle: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
    }),
    rightSection: z.object({
      name: z.string(),
      designation: z.string(),
      profileImage: z.string(),
      content: z.string(),
    }),
  }),
});

export const ctaSection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    icon: z.string(),
    head: z.string(),
    title: z.string(),
    description: z.string(),
    ctaImages: z.object({
      left: z.string(),
      topMd: z.string(),
      bottomSm: z.string(),
    }),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const countriesServedSection = defineCollection({
  loader: glob({
    pattern: "countries-served.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    firstCard: z.object({
      title: z.string(),
      desc: z.string(),
      marqueeList: z.array(
        z.object({
          marqueeChildList: z.array(
            z.object({
              title: z.string(),
              image: z.string(),
            })
          ),
        })
      ),
    }),
    secondCard: z.object({
      title: z.string(),
      desc: z.string(),
      image: z.string(),
      imageAlt: z.string(),
    }),
  }),
});

export const faqSection = defineCollection({
  loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

export const integrationToolsSection = defineCollection({
  loader: glob({
    pattern: "integration-tools.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    list: z.array(
      z.object({
        logo: z.string(),
      })
    ),
  }),
});

export const pricingSection = defineCollection({
  loader: glob({
    pattern: "pricing.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    plans_labels: z.array(z.string()),
    discount: z.string(),
    plans: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        price_prefix: z.string(),
        features: z.array(z.string()),
        price: z.object({
          yearly: z.object({
            amount: z.number(),
            period: z.string(),
            per: z.string(),
          }),
          monthly: z.object({
            amount: z.number(),
            period: z.string(),
            per: z.string(),
          }),
        }),
        badge: z.object({
          enable: z.boolean(),
          text: z.string(),
        }),
        cta: z.object({
          enable: z.boolean(),
          text: z.string(),
          link: z.string(),
        }),
      })
    ),
  }),
});

export const servicesSection = defineCollection({
  loader: glob({
    pattern: "services.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    list: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
        list: z.array(z.string()),
      })
    ),
  }),
});

export const testimonialSection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    arrowIcon: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        avatar: z.string(),
        companyLogo: z.string(),
        content: z.string(),
      })
    ),
  }),
});

export const trustedBrandsSection = defineCollection({
  loader: glob({
    pattern: "trusted-brands.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(z.string()),
  }),
});
