import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const homepage = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/homepage",
  }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      newsletterButton: z.object({
        enable: z.boolean(),
        label: z.string(),
        formPlaceholder: z.string(),
      }),
      // bulletpoints: z.array(z.string()),
      bannerImages: z.object({
        left: z.string(),
        center: z.string(),
        right: z.string(),
      }),
      trustedBrands: z.object({
        title: z.string(),
        list: z.array(z.object({
          title: z.string(),
          link: z.string(), // Remove URL validation for internal link
        })),
      }).optional(),
    }),
    workforceEfficiency: z.object({
      title: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          icon: z.string(),
          content: z.string(),
        })
      ),
    }),
    discoverProductFeature: z.object({
      title: z.string(),
      content: z.string(),
      accordionList: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
          image: z.string(),
        })
      ),
    }),
    servicesWithCTA: z.object({
      leftCard: z.object({
        head: z.string(),
        icon: z.string(),
        title: z.string(),
        subtitle: z.string(),
        images: z.string(),
      }),
      rightCard: z.object({
        head: z.string(),
        icon: z.string(),
        title: z.string(),
        subtitle: z.string(),
        images: z.string(),
      }),
      cta: z.object({
        enable: z.boolean(),
        head: z.string(),
        icon: z.string(),
        title: z.string(),
        subtitle: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        images: z.object({
          sm_1: z.string(),
          sm_2: z.string(),
          sm_3: z.string(),
          lg: z.string(),
        }),
      }),
    }),
  }),
});

export const company = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/company",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    gallery: z
      .object({
        enable: z.boolean(),
        topLeftCard: z
          .object({
            title: z.string(),
            icon: z.string(),
            description: z.string(),
          })
          .optional(),
        topCenterImage: z.string().optional(),
        topRightImage: z.string().optional(),
        bottomLeftImage: z.string().optional(),
        bottomCenterImage: z.string().optional(),
        bottomRightCard: z
          .object({
            title: z.string(),
            description: z.string(),
            author: z
              .object({
                name: z.string(),
                position: z.string(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
    accomplishments: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        list: z.array(
          z.object({
            number: z.string(),
            prefix: z.string(),
            subtitle: z.string(),
          })
        ),
      })
      .optional(),
    visionMission: z
      .object({
        enable: z.boolean(),
        mission: z.object({
          title: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              icon: z.string(),
              description: z.string(),
            })
          ),
        }),
        vision: z.object({
          title: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              icon: z.string(),
              description: z.string(),
            })
          ),
        }),
      })
      .optional(),
    companies: z
      .object({
        enable: z.boolean(),
        list: z.array(
          z.object({
            name: z.string(),
            logo: z.string(),
          })
        ),
      })
      .optional(),
    why: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    teamTestimonials: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        arrowIcon: z.string(),
        list: z.array(
          z.object({
            name: z.string(),
            position: z.string(),
            company: z.string(),
            profileImage: z.string(),
            description: z.string(),
            stats: z.array(
              z.object({
                title: z.string(),
                subtitle: z.string(),
              })
            ),
          })
        ),
      })
      .optional(),
  }),
});
export const security = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/security",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    gallery: z
      .object({
        enable: z.boolean(),
        topLeftCard: z
          .object({
            title: z.string(),
            icon: z.string(),
            description: z.string(),
          })
          .optional(),
        topCenterImage: z.string().optional(),
        topRightImage: z.string().optional(),
        bottomLeftImage: z.string().optional(),
        bottomCenterImage: z.string().optional(),
        bottomRightCard: z
          .object({
            title: z.string(),
            description: z.string(),
            author: z
              .object({
                name: z.string(),
                position: z.string(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
    accomplishments: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        list: z.array(
          z.object({
            number: z.string(),
            prefix: z.string(),
            subtitle: z.string(),
          })
        ),
      })
      .optional(),
    visionMission: z
      .object({
        enable: z.boolean(),
        mission: z.object({
          title: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              icon: z.string(),
              description: z.string(),
            })
          ),
        }),
        vision: z.object({
          title: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              icon: z.string(),
              description: z.string(),
            })
          ),
        }),
      })
      .optional(),
    companies: z
      .object({
        enable: z.boolean(),
        list: z.array(
          z.object({
            name: z.string(),
            logo: z.string(),
          })
        ),
      })
      .optional(),
    why: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    teamTestimonials: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        arrowIcon: z.string(),
        list: z.array(
          z.object({
            name: z.string(),
            position: z.string(),
            company: z.string(),
            profileImage: z.string(),
            description: z.string(),
            stats: z.array(
              z.object({
                title: z.string(),
                subtitle: z.string(),
              })
            ),
          })
        ),
      })
      .optional(),
    services: z
      .object({
        enable: z.boolean(),
      })
      .optional(), // Added services field here
  }),
});




export const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
  }),
});

export const bookDemo = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/book-demo",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    hero: z.object({
      head: z.string(),
      title: z.string(),
      subtitle: z.string(),
    }),
  }),
});

export const changelog = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/changelog",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    changelogs: z.array(
      z.object({
        title: z.string(),
        version: z.string(),
        date: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        desc: z.string(),
      })
    ),
  }),
});

export const contact = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/contact",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    formContent: z.object({
      head: z.string(),
      icon: z.string(),
      title: z.string(),
      subtitle: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
      }),
    }),
    imageContent: z.object({
      content: z.string(),
      name: z.string(),
      designation: z.string(),
      image: z.string(),
    }),
  }),
});

export const features = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/features",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    hero: z.object({
      leftImageContainer: z.object({
        leftImage: z.string(),
        rightImage: z.string(),
      }),
      rightImageContainer: z.object({
        leftImageLg: z.string(),
        rightTopImageSm: z.string(),
        rightBottomImageMd: z.string(),
      }),
      featureList: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    whatWeOffer: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          image: z.string(),
          subtitle: z.string(),
        })
      ),
    }),
    services: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    integrationTools: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    faq: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
  }),
});

export const equipmentLeasing = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/equipment-leasing",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    hero: z.object({
      leftImage: z.string(),  // ✅ Fixed incorrect nesting
      rightImage: z.string(), // ✅ Fixed incorrect nesting
      featureList: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    whatWeOffer: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          image: z.string(),
          subtitle: z.string(),
        })
      ),
    }),
    why: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
    }),
    services: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    integrationTools: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    faq: z
      .object({
        enable: z.boolean(),
      })
      .optional(),

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
export const mortgage = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/mortgage",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    hero: z.object({
      leftImage: z.string(),  // ✅ Fixed incorrect nesting
      rightImage: z.string(), // ✅ Fixed incorrect nesting
      featureList: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    whatWeOffer: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          image: z.string(),
          subtitle: z.string(),
        })
      ),
    }),
    why: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
    }),
    services: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    integrationTools: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    faq: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
  }),
});
export const banks = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/banks",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    hero: z.object({
      heading: z.string(), // ✅ Added heading
      leftImage: z.string(),
      rightImage: z.string(),
      featureList: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    whatWeOffer: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          image: z.string(),
          subtitle: z.string(),
        })
      ),
    }),
    why: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
    }),
    services: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    integrationTools: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    faq: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
  }),
});
export const automotive = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/automotive",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    hero: z.object({
      leftImage: z.string(),  // ✅ Fixed incorrect nesting
      rightImage: z.string(), // ✅ Fixed incorrect nesting
      featureList: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    whatWeOffer: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          image: z.string(),
          subtitle: z.string(),
        })
      ),
    }),
    why: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
    }),
    services: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    integrationTools: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    faq: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
  }),
});
export const securityAlarm = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/security-alarm",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    hero: z.object({
      leftImage: z.string(),  // ✅ Fixed incorrect nesting
      rightImage: z.string(), // ✅ Fixed incorrect nesting
      featureList: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    whatWeOffer: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          image: z.string(),
          subtitle: z.string(),
        })
      ),
    }),
    why: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
    }),
    services: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    integrationTools: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
    faq: z
      .object({
        enable: z.boolean(),
      })
      .optional(),
  }),
});

export const integrations = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/integrations",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
    list: z.array(
      z.object({
        logo: z.string(),
        description: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      })
    ),
  }),
});

export const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const pricing = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/pricing",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
  }),
});
