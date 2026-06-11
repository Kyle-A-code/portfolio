import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const technologies = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/technologies",
  }),
  schema: () =>
    z.object({
      order: z.number(),
      title: z.string(),
      icon: z.enum(["code", "cubes", "cloud", "gears"]),
      items: z.array(z.string()),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/projects",
  }),
  schema: () =>
    z.object({
      order: z.number(),
      title: z.string(),
      summary: z.string(),
      goal: z.string(),
      url: z.string(),
      technologies: z.array(z.string()),
    }),
});

const experience = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/experience",
  }),
  schema: () =>
    z.object({
      order: z.number(),
      period: z.string(),
      role: z.string(),
      company: z.string(),
      summary: z.string(),
      isCurrent: z.boolean(),
    }),
});

export const collections = { technologies, projects, experience };
