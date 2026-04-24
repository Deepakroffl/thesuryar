import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Quote, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

type Project = {
  title: string;
  category: "WordPress" | "Shopify" | "PERN Stack" | "UI/UX Design";
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  caseStudyUrl: string;
};

type FeedItem = {
  title: string;
  link: string;
  image?: string;
  embedUrl?: string;
  date?: string;
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const specializations = [
  "WordPress Development",
  "Shopify Development",
  "PERN Stack Development",
  "UI/UX Design",
];

const experience = [
  {
    role: "Full Stack Development Learning",
    date: "May 2022 - Apr 2024",
    place: "Udemy",
    mode: "Self Learning",
    summary:
      "Completed full stack development learning through Udemy and built strong fundamentals in modern web development.",
  },
  {
    role: "Full Stack Developer Intern",
    date: "Sep 2024 - Nov 2024",
    place: "Alphahues, Chennai",
    mode: "On Site",
    summary:
      "Worked as a Full Stack Developer Intern at a leading advertising and marketing company and gained real-time project experience.",
  },
  {
    role: "Full Stack Developer",
    date: "Nov 2024 - Present",
    place: "Grow Digitally Consulting, Chennai",
    mode: "On Site",
    summary:
      "Currently working as a Full Stack Developer, building modern business websites with performance-focused functionality.",
  },
];

const projects: Project[] = [
  {
    title: "MM Foam",
    category: "Shopify",
    description:
      "Performance-focused mattress eCommerce website built on Shopify with optimized UX and SEO structure.",
    tech: ["Shopify", "Liquid", "SEO"],
    image:
      "/images/mmfoam.png",
    liveUrl: "https://mmfoam.com/",
    caseStudyUrl: "#",
  },
  {
    title: "LAYMAH",
    category: "Shopify",
    description:
      "Luxury fragrance eCommerce store on Shopify with immersive design and conversion-focused experience.",
    tech: ["Shopify", "Liquid", "SEO"],
    image:
      "./images/laymah.png",
    liveUrl: "https://laymah.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Origin Nutrition",
    category: "Shopify",
    description:
      "Custom Shopify eCommerce store for a plant-based nutrition brand with clean design and seamless shopping experience.",
    tech: ["Shopify", "Liquid", "SEO"],
    image:
      "./images/originnutrition.png",
    liveUrl: "https://originnutrition.in/",
    caseStudyUrl: "#",
  },
  {
    title: "Sash Vitality",
    category: "Shopify",
    description:
      "Custom Shopify eCommerce store for a plant-based nutrition brand with clean design and seamless shopping experience.",
    tech: ["Shopify", "Liquid", "SEO"],
    image:
      "./images/sashvitality.png",
    liveUrl: "https://sashvitality.com/",
    caseStudyUrl: "#",
  },
  {
    title: "RK Dominion",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/rkdominion.png",
    liveUrl: "https://rkdominions.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Dreamline Carwash",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/dreamlinecarwash.png",
    liveUrl: "https://dreamlinecarwash.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Dreamline Laundry",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/dreamlinelaundry.png",
    liveUrl: "https://dreamlinelaundrette.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Real Source Infra",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/realsourceinfra.png",
    liveUrl: "https://realsourceinfra.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Nandi Housing",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/nandihousing.png",
    liveUrl: "https://nandihousing.com/",
    caseStudyUrl: "#",
  },
  
  {
    title: "Nandi Meraki",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/nandimeraki.png",
    liveUrl: "https://nandimeraki.com/",
    caseStudyUrl: "#",
  },
  {
    title: "UT Lamination Welding",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/utlaminationwelding.png",
    liveUrl: "https://utlaminationwelding.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Yon Lighting",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/yonlighting.png",
    liveUrl: "https://yonlighting.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Phifer Mosquito Screens",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/phifermosquitoscreens.png",
    liveUrl: "https://phifermosquitoscreens.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Phifer Balcony Screens",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/phiferbalconyscreens.png",
    liveUrl: "https://phiferbalconyscreens.com/",
    caseStudyUrl: "#",
  },
  {
    title: "Tarangini Home Care",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/taranginihomecare.png",
    liveUrl: "https://taranginihomecare.in/",
    caseStudyUrl: "#",
  },
  {
    title: "Phifer India",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/phiferindia.png",
    liveUrl: "https://phiferindia.com/",
    caseStudyUrl: "#",
  },
    {
    title: "HVLS Fans Asia",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/hvlsfansasia.png",
    liveUrl: "https://hvlsfansasia.com/",
    caseStudyUrl: "#",
  },
  {
    title: "10x International School",
    category: "WordPress",
    description:
      "Performance-focused school website with custom admissions flow and SEO structure.",
    tech: ["WordPress", "Elementor", "Custom JS", "SEO"],
    image:
      "./images/10xinternationalschool.png",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "Client Workflow Dashboard",
    category: "PERN Stack",
    description:
      "Custom dashboard for lead tracking, activity logs, and reporting for business teams.",
    tech: ["PostgreSQL", "Express", "React", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1551281044-8b4c6f4a7f46?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "Thuari App Interface",
    category: "UI/UX Design",
    description:
      "User-first interface concepts for wholesale product discovery and Amazon reselling flow.",
    tech: ["Figma", "Wireframing", "Design System"],
    image:
      "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
];

const clients = [
  "CEEBROS",
  "PHIFER",
  "SASH VITALITY",
  "NANDI HOUSING",
  "NANDI MERAKI",
  "SHRISHA INFRA",
  "TALK PRO",
];

const awards = [
  {
    title: "Third Prize - Bytes 2K23 Web Design Competition",
    description:
      "In 2023 during my second year of college, I participated in Bytes 2K23, a web design competition. I built a website to invite college alumni for an alumni meet and secured third prize.",
    image:
      "./images/bytes2k23price.png",
  },
  {
    title: "Rising Star Award - Grow Digitally Consulting",
    description:
      "After college, I joined Grow Digitally Consulting and received the Rising Star Award for learning quickly, working efficiently, and delivering the 10x International School project in 45 days with multiple logical functionalities.",
    image:
      " ./images/risingstaraward.png",
  },
];

const certificates = {
  course: [
    { title: "Full Stack Development", image: "./images/fullstack.png" },
    { title: "UI/UX Design", image: "/images/uiuxdesign.png" },
    { title: "Html", image: "/images/htmlinmeta.png" },
  ],
  workshop: [
    { title: "Latest Trends In Technology", image: "/images/workshop1.jpg" },
  ],
  internship: [
    {
      title: "Full Stack Internship Certificate",
      image: "/images/internship1.jpg",
    },
  ],
};

const testimonials = [
  "Surya is dedicated, fast-learning, and highly reliable. He always focuses on delivering quality work on time.",
  "Working with Surya was smooth and professional. He understands both design and development very well.",
  "Surya brings creativity, technical knowledge, and commitment to every project he handles.",
];

const heroSocialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@thesuryar", icon: FaYoutube },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/thesuryar", icon: FaInstagram },
  { label: "GitHub", href: "#", icon: FaGithub },
];

const sectionMotion = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 max-w-3xl space-y-2">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function formatDate(input?: string) {
  if (!input) return "";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return input;
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function extractInstagramCode(link: string) {
  const match = link.match(/\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
  return match?.[1] ?? "";
}

function normalizeInstagramLink(url: string) {
  const match = url.match(/https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel|tv)\/[A-Za-z0-9_-]+\/?/i);
  if (!match) return "";
  return match[0].endsWith("/") ? match[0] : `${match[0]}/`;
}

function normalizeInstagramPath(path: string) {
  const match = path.match(/\/(?:p|reel|tv)\/[A-Za-z0-9_-]+\/?/i);
  if (!match) return "";
  const normalizedPath = match[0].endsWith("/") ? match[0] : `${match[0]}/`;
  return `https://www.instagram.com${normalizedPath}`;
}

function buildInstagramEmbedUrl(link: string) {
  const normalized = normalizeInstagramLink(link);
  if (!normalized) return "";
  return `${normalized}embed`;
}

function extractInstagramLinksFromText(text: string) {
  const matches = text.match(
    /https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel|tv)\/[A-Za-z0-9_-]+\/?/gi
  );
  return Array.from(new Set((matches ?? []).map((url) => normalizeInstagramLink(url)).filter(Boolean)));
}

function decodeEscapedString(value: string) {
  return value
    .replace(/\\u0026/g, "&")
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&");
}

function parseInstagramProfileHtml(rawHtml: string): FeedItem[] {
  const html = decodeEscapedString(rawHtml);

  const directLinks = extractInstagramLinksFromText(html);
  const relativeLinks = Array.from(
    html.matchAll(/(?:"|')(\/(?:p|reel|tv)\/[A-Za-z0-9_-]+\/?)(?:"|')/gi)
  )
    .map((match) => normalizeInstagramPath(match[1]))
    .filter(Boolean);

  const shortcodeMatches = Array.from(html.matchAll(/"shortcode":"([A-Za-z0-9_-]+)"/g)).map(
    (match) => `https://www.instagram.com/p/${match[1]}/`
  );

  const links = Array.from(new Set([...directLinks, ...relativeLinks, ...shortcodeMatches]))
    .map((link) => normalizeInstagramLink(link))
    .filter(Boolean);

  const imageMatches = [
    ...Array.from(html.matchAll(/"display_url":"(https:[^"]+)"/g)).map((match) =>
      decodeEscapedString(match[1])
    ),
    ...Array.from(html.matchAll(/"thumbnail_src":"(https:[^"]+)"/g)).map((match) =>
      decodeEscapedString(match[1])
    ),
    ...Array.from(html.matchAll(/"thumbnail_url":"(https:[^"]+)"/g)).map((match) =>
      decodeEscapedString(match[1])
    ),
  ];

  const uniqueImages = Array.from(new Set(imageMatches))
    .filter((image) => image.startsWith("http"))
    .map((image) => image.replace(/\\u0026/g, "&"));

  if (!links.length) return [];

  return links.slice(0, 12).map((link, index) => ({
    title: `Instagram post ${index + 1}`,
    link,
    image: uniqueImages[index] || buildInstagramImage(link),
    embedUrl: buildInstagramEmbedUrl(link),
  }));
}

function parseInstagramGraphApiJson(raw: unknown): FeedItem[] {
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  const items =
    ((parsed as {
      data?: Array<{
        caption?: string;
        permalink?: string;
        media_url?: string;
        thumbnail_url?: string;
        timestamp?: string;
      }>;
    })?.data ?? []);

  return items
    .map((item, index) => {
      const link = normalizeInstagramLink(item.permalink || "");
      const title = (item.caption || `Instagram post ${index + 1}`).slice(0, 90);
      return {
        title,
        link,
        image: item.thumbnail_url || item.media_url || buildInstagramImage(link),
        date: item.timestamp,
      };
    })
    .filter((item) => item.link);
}

function parsePossiblyWrappedJson(rawText: string) {
  try {
    return JSON.parse(rawText);
  } catch {
    const firstBrace = rawText.indexOf("{");
    const lastBrace = rawText.lastIndexOf("}");
    if (firstBrace === -1 || lastBrace === -1 || firstBrace >= lastBrace) return null;
    try {
      return JSON.parse(rawText.slice(firstBrace, lastBrace + 1));
    } catch {
      return null;
    }
  }
}

function parseInstagramPublicJson(raw: unknown): FeedItem[] {
  const parsed = typeof raw === "string" ? parsePossiblyWrappedJson(raw) : raw;
  if (!parsed || typeof parsed !== "object") return [];

  const asAny = parsed as {
    data?: {
      user?: {
        edge_owner_to_timeline_media?: {
          edges?: Array<{
            node?: {
              shortcode?: string;
              display_url?: string;
              thumbnail_src?: string;
              taken_at_timestamp?: number;
              edge_media_to_caption?: {
                edges?: Array<{ node?: { text?: string } }>;
              };
            };
          }>;
        };
      };
    };
    graphql?: {
      user?: {
        edge_owner_to_timeline_media?: {
          edges?: Array<{
            node?: {
              shortcode?: string;
              display_url?: string;
              thumbnail_src?: string;
              taken_at_timestamp?: number;
              edge_media_to_caption?: {
                edges?: Array<{ node?: { text?: string } }>;
              };
            };
          }>;
        };
      };
    };
  };

  const edges =
    asAny.data?.user?.edge_owner_to_timeline_media?.edges ||
    asAny.graphql?.user?.edge_owner_to_timeline_media?.edges ||
    [];

  return edges
    .map((edge, index) => {
      const node = edge.node;
      const shortcode = node?.shortcode;
      const link = shortcode ? `https://www.instagram.com/p/${shortcode}/` : "";
      const title =
        node?.edge_media_to_caption?.edges?.[0]?.node?.text?.slice(0, 90) ||
        `Instagram post ${index + 1}`;
      const timestamp = node?.taken_at_timestamp
        ? new Date(node.taken_at_timestamp * 1000).toISOString()
        : undefined;
      return {
        title,
        link,
        image: node?.display_url || node?.thumbnail_src || buildInstagramImage(link),
        date: timestamp,
      };
    })
    .filter((item) => item.link);
}

function buildInstagramImage(link: string, candidate?: string) {
  const code = extractInstagramCode(link);
  if (candidate) return candidate;
  if (code) {
    return `https://www.instagram.com/p/${code}/media/?size=l`;
  }
  return "";
}

function withImageProxy(url?: string) {
  if (!url) return "";
  return `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ""))}&w=900&h=900&fit=cover`;
}

async function fetchTextWithTimeout(url: string, signal: AbortSignal, timeoutMs = 5000) {
  let timeoutId: number | undefined;
  try {
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = window.setTimeout(() => reject(new Error("Feed request timed out")), timeoutMs);
    });
    const response = (await Promise.race([
      fetch(url, { signal }),
      timeoutPromise,
    ])) as Response;
    if (!response.ok) throw new Error("Feed request failed");
    return response.text();
  } finally {
    if (timeoutId) window.clearTimeout(timeoutId);
  }
}

export default function App() {
  const [portfolioFilter, setPortfolioFilter] = useState<"All" | Project["category"]>(
    "All"
  );
  const [activeCertImage, setActiveCertImage] = useState<string | null>(null);
  const [contactStatus, setContactStatus] = useState("");
  const [heroImageSrc, setHeroImageSrc] = useState(
    "./images/heroimage.png"
  );
  const [graduationImageSrc, setGraduationImageSrc] = useState(
    "./images/collegegraduation.png"
  );

  const [instagramItems, setInstagramItems] = useState<FeedItem[]>([]);
  const [instagramLoading, setInstagramLoading] = useState(true);
  const [instagramError, setInstagramError] = useState("");

  const [youtubeItems, setYoutubeItems] = useState<FeedItem[]>([]);
  const [youtubeLoading, setYoutubeLoading] = useState(true);
  const [youtubeError, setYoutubeError] = useState("");

  const instagramLoopItems = useMemo(() => {
    if (!instagramItems.length) return [];
    return [...instagramItems, ...instagramItems, ...instagramItems];
  }, [instagramItems]);

  useEffect(() => {
    document.title = "Deepak R | Full Stack Developer Portfolio";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Deepak R is a Full Stack Developer, UI/UX Designer, and WordPress & Shopify Developer building clean, modern and high-performance digital products."
    );
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const cacheKey = "surya-instagram-feed-cache";

    async function loadInstagram() {
      try {
        setInstagramLoading(true);
        setInstagramError("");
        let hasCachedItems = false;
        const cachedRaw = localStorage.getItem(cacheKey);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw) as FeedItem[];
          if (Array.isArray(cached) && cached.length) {
            hasCachedItems = true;
            setInstagramItems(cached);
            // Show cached posts instantly, then refresh in background.
            setInstagramLoading(false);
          }
        }
        let fetchedItems: FeedItem[] = [];

        const runtimeConfig = (window as Window & {
          __PORTFOLIO_CONFIG__?: { instagramUserId?: string; instagramAccessToken?: string };
        }).__PORTFOLIO_CONFIG__;
        const graphUserId = runtimeConfig?.instagramUserId?.trim();
        const graphAccessToken = runtimeConfig?.instagramAccessToken?.trim();

        if (graphUserId && graphAccessToken) {
          const graphApiUrl =
            `https://graph.facebook.com/v20.0/${graphUserId}/media` +
            `?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url&limit=12` +
            `&access_token=${encodeURIComponent(graphAccessToken)}`;
          try {
            const graphRaw = await fetchTextWithTimeout(graphApiUrl, controller.signal, 7000);
            fetchedItems = parseInstagramGraphApiJson(graphRaw);
          } catch {
            fetchedItems = [];
          }
        }

        const instagramFeedSources: Array<{
          type: "profile-html" | "profile-json";
          url: string;
        }> = [
          {
            type: "profile-json",
            url: "https://api.codetabs.com/v1/proxy?quest=https://www.instagram.com/api/v1/users/web_profile_info/?username=thesuryar",
          },
          {
            type: "profile-json",
            url: "https://api.codetabs.com/v1/proxy?quest=https://www.instagram.com/thesuryar/?__a=1&__d=dis",
          },
          {
            type: "profile-html",
            url: "https://api.codetabs.com/v1/proxy?quest=https://www.instagram.com/thesuryar/",
          },
        ];

        for (const source of instagramFeedSources) {
          if (fetchedItems.length) break;
          try {
            const payload = await fetchTextWithTimeout(source.url, controller.signal, 5500);
            fetchedItems =
              source.type === "profile-json"
                ? parseInstagramPublicJson(payload)
                : parseInstagramProfileHtml(payload);
          } catch {
            continue;
          }
        }

        const cleanedItems = fetchedItems
          .filter((item) => item.link)
          .map((item) => ({
            ...item,
            image: withImageProxy(item.image),
          }))
          .filter((item, index, arr) => index === arr.findIndex((ref) => ref.link === item.link))
          .slice(0, 12);

        if (!cleanedItems.length) {
          if (!hasCachedItems) {
            setInstagramItems([]);
            setInstagramError(
              "Unable to load Instagram posts at the moment due to feed restrictions. Please check back shortly."
            );
          }
          return;
        }

        setInstagramItems(cleanedItems);
        setInstagramError("");
        localStorage.setItem(cacheKey, JSON.stringify(cleanedItems));
      } catch {
        const cachedRaw = localStorage.getItem(cacheKey);
        const hasCachedItems = !!cachedRaw;
        if (!hasCachedItems) {
          setInstagramItems([]);
          setInstagramError(
            "Unable to load Instagram posts at the moment due to feed restrictions. Please check back shortly."
          );
        }
      } finally {
        setInstagramLoading(false);
      }
    }

    loadInstagram();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function loadYoutube() {
      try {
        setYoutubeLoading(true);
        setYoutubeError("");

        const rssUrl = encodeURIComponent(
          "https://www.youtube.com/feeds/videos.xml?channel_id=UCLXZHsgQEo_PDc-qXa6bReQ"
        );
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("YouTube feed is currently unavailable.");
        const data = await response.json();
        const items: FeedItem[] = (data.items ?? []).map(
          (item: { title: string; link: string; thumbnail: string; pubDate: string }) => ({
            title: item.title || "YouTube video",
            link: item.link,
            image: item.thumbnail || "https://picsum.photos/seed/youtubefallback/900/600",
            date: item.pubDate,
          })
        );

        if (!items.length) throw new Error("No videos available right now.");
        setYoutubeItems(items);
      } catch {
        setYoutubeError("Unable to load latest YouTube videos right now.");
      } finally {
        setYoutubeLoading(false);
      }
    }

    loadYoutube();
    return () => controller.abort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (portfolioFilter === "All") return projects;
    return projects.filter((project) => project.category === portfolioFilter);
  }, [portfolioFilter]);

  const onContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus("Thanks for your message. Surya will get back to you soon.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/40">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-[min(1120px,92%)] items-center justify-between">
          <a href="#hero" className="text-lg font-semibold tracking-tight">
            Thesuryar
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-cyan-500/60 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/10"
          >
            Download Resume
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 -z-10">
            <img
              src=""
              alt="Modern workspace"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto grid min-h-[92vh] w-[min(1120px,92%)] items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">Thesuryar</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Developer | Founder of Thuari | Investor | Content Creator
              </h1>
              <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
                I build digital products and growth-focused platforms that combine clean development,
                practical design, and strong business direction.
              </p>
              <p className="mt-6 max-w-2xl text-sm italic text-cyan-200 sm:text-base">
                "Do what you love, Dream, Trust, Dedicate 100%."
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-slate-900"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                {heroSocialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-full border border-white/25 p-2.5 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mx-auto w-full max-w-sm"
            >
              <img
                src={heroImageSrc}
                alt="Deepak R portrait"
                onError={() =>
                  setHeroImageSrc(
                    ""
                  )
                }
                className="aspect-[4/5] w-full rounded-2xl border border-white/20 object-cover shadow-2xl shadow-cyan-500/10"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </section>

        <motion.section id="about" {...sectionMotion} className="mx-auto w-[min(1120px,92%)] py-20">
          <SectionTitle
            title="About Me"
            subtitle="A focused builder from Tamil Nadu creating digital experiences that solve real business needs."
          />
          <div className="space-y-5 text-base leading-relaxed text-slate-300">
            <p>
              I am Surya, a Full Stack Developer, UI/UX Designer, and Content Creator from Tamil
              Nadu, India. I enjoy building websites that are simple, modern, and result-driven.
              My work includes WordPress, Shopify, PERN Stack, and UI/UX Design.
            </p>
            <p>
              I come from a humble lower middle-class family of four - my father, mother, elder
              brother, and me. I was born on 30 September 2003 and grew up with strong values,
              discipline, and the desire to create a better future through hard work.
            </p>
            <p>
              Along with development and design, I also enjoy sharing ideas and insights through
              content creation. I believe in learning continuously, growing together, and creating
              value through both work and knowledge.
            </p>
            <p>
              I am also interested in business and investing. Currently, I am working on my
              business idea called Thuari, focused on finding trusted wholesale products and
              reselling them on Amazon.
            </p>
          </div>
        </motion.section>

        <motion.section {...sectionMotion} className="border-y border-slate-800">
          <div className="mx-auto w-[min(1120px,92%)] py-20">
            <SectionTitle
              title="My Specialization"
              subtitle="Focused expertise across design, development, and growth-driven platforms."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {specializations.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <Layers className="mb-4 text-cyan-500" size={22} />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" {...sectionMotion} className="mx-auto w-[min(1120px,92%)] py-20">
          <SectionTitle
            title="Experience"
            subtitle="A practical journey from learning to delivering real-world projects."
          />
          <div className="relative space-y-10 pl-8">
            <span className="absolute left-2 top-2 h-[92%] w-px bg-slate-700" />
            {experience.map((item) => (
              <div key={item.role} className="relative">
                <span className="absolute -left-[1.95rem] top-1 h-4 w-4 rounded-full bg-cyan-500" />
                <p className="text-sm font-medium text-cyan-500">{item.date}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {item.place} - {item.mode}
                </p>
                <p className="mt-3 text-slate-300">{item.summary}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="portfolio" {...sectionMotion} className="border-y border-slate-800">
          <div className="mx-auto w-[min(1120px,92%)] py-20">
            <SectionTitle
              title="Portfolio / My Work"
              subtitle="Projects built for business growth, clean UX, and performance."
            />
            <div className="mb-8 flex flex-wrap gap-3">
              {["All", "WordPress", "Shopify", "PERN Stack", "UI/UX Design"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setPortfolioFilter(filter as "All" | Project["category"])}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    portfolioFilter === filter
                      ? "border-cyan-500 bg-cyan-500 text-white"
                      : "border-slate-800 text-slate-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="space-y-4 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-slate-300">{project.description}</p>
                    <p className="text-sm text-slate-300">Tech: {project.tech.join(" | ")}</p>
                    <div className="flex gap-3 pt-1">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-500 hover:text-cyan-400"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Link <ExternalLink size={15} />
                      </a>
                      
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionMotion} className="mx-auto w-[min(1120px,92%)] py-20">
          <SectionTitle title="Trusted by brands and businesses" />
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <div className="marquee py-6">
              <div className="marquee-track">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client}-${index}`}
                    className="mx-10 text-xl font-semibold tracking-wide text-cyan-500"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionMotion} className="border-y border-slate-800">
          <div className="mx-auto w-[min(1120px,92%)] py-20">
            <SectionTitle title="Awards & Achievements" />
            <div className="grid gap-6 md:grid-cols-2">
              {awards.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionMotion} className="mx-auto w-[min(1120px,92%)] py-20">
          <SectionTitle
            title="Certifications"
            subtitle="Course completion, workshop participation, and internship proof."
          />
          <div className="space-y-12">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Course Completion Certificates</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {certificates.course.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveCertImage(item.image)}
                    className="overflow-hidden rounded-xl border border-slate-800 text-left"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <p className="p-3 text-sm font-medium">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Workshop Certificates</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {certificates.workshop.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveCertImage(item.image)}
                    className="overflow-hidden rounded-xl border border-slate-800 text-left"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <p className="p-3 text-sm font-medium">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Internship Certificate</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {certificates.internship.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveCertImage(item.image)}
                    className="overflow-hidden rounded-xl border border-slate-800 text-left"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <p className="p-3 text-sm font-medium">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionMotion} className="border-y border-slate-800">
          <div className="mx-auto grid w-[min(1120px,92%)] gap-10 py-20 lg:grid-cols-2">
            <div>
              <SectionTitle title="Education" />
              <h3 className="text-2xl font-semibold">The American College, Madurai</h3>
              <p className="mt-3 text-slate-300">Batch: 2021 - 2024</p>
              <p className="text-slate-300">Graduated in 2024</p>
              <img
                src={graduationImageSrc}
                alt="Thesuryar Graduation Day"
                className="mt-6 h-100 w-full rounded-2xl border border-slate-800 object-cover"
                loading="lazy"
                onError={() =>
                  setGraduationImageSrc(
                    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  )
                }
              />
            </div>
            <div>
              <SectionTitle title="Family / Personal Story" />
              <p className="text-slate-300">
                I am the second child in my family and was born on 30.09.2003. We are a family of
                four - my father, mother, elder brother, and me. I come from a lower middle-class
                family, and my family has always been my biggest support and motivation.
              </p>
              <img
                src="./images/family.png"
                alt="Thesuryar Family Group Photo"
                className="mt-6 h-100 w-full rounded-2xl border border-slate-800 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionMotion} className="mx-auto w-[min(1120px,92%)] py-20">
          <SectionTitle title="Passion & Vision" />
          <p className="max-w-4xl text-base leading-relaxed text-slate-300">
            I am passionate about growth, business, investing, and sharing knowledge. Beyond
            development and design, I enjoy learning about money, stock markets, and other forms
            of investment. I share ideas and insights through YouTube because I believe in growing
            together by sharing knowledge. I also started investing at the age of 22 and am
            currently working on my business idea called Thuari, which focuses on finding trusted
            and valuable wholesale products and reselling them on Amazon.
          </p>
        </motion.section>

        <motion.section {...sectionMotion} className="border-y border-slate-800">
          <div className="mx-auto w-[min(1120px,92%)] py-20">
            <SectionTitle title="Instagram Updates" />
            {instagramLoading ? (
              <div className="grid gap-4 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="h-72 animate-pulse rounded-2xl bg-slate-800" />
                ))}
              </div>
            ) : instagramLoopItems.length ? (
              <div className="overflow-hidden rounded-2xl border border-slate-800">
                {instagramError ? (
                  <div className="border-b border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300">
                    {instagramError}
                  </div>
                ) : null}
                <div className="marquee py-5">
                  <div className="marquee-track marquee-track-instagram">
                    {instagramLoopItems.map((item, index) => (
                      <a
                        key={`${item.link}-${index}`}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mx-3 block w-64 overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-80 w-full object-cover"
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.onerror = null;
                              event.currentTarget.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900' viewBox='0 0 900 900'%3E%3Crect width='900' height='900' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' fill='%2394a3b8' font-family='Arial' font-size='34' text-anchor='middle'%3ETwitter Instagram Post%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        ) : (
                          <div className="flex h-80 items-center justify-center bg-slate-900 text-sm text-slate-400">
                            Instagram post
                          </div>
                        )}
                        <p className="line-clamp-2 p-3 text-sm font-medium">{item.title}</p>
                      </a>
                     ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
                <p>Unable to load Instagram posts right now.</p>
                <a
                  href="https://www.instagram.com/thesuryar"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  View latest posts on Instagram <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        </motion.section>

        <motion.section {...sectionMotion} className="mx-auto w-[min(1120px,92%)] py-20">
          <SectionTitle title="Latest YouTube Videos" />
          {youtubeLoading ? (
            <div className="grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-72 animate-pulse rounded-2xl bg-slate-800" />
              ))}
            </div>
          ) : youtubeError ? (
            <p className="text-slate-300">{youtubeError} Please check back shortly.</p>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <div className="marquee py-5">
                <div className="marquee-track">
                  {[...youtubeItems, ...youtubeItems].map((item, index) => (
                    <a
                      key={`${item.link}-${index}`}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-3 block w-80 overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="space-y-2 p-4">
                        <p className="line-clamp-2 text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-slate-300">{formatDate(item.date)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.section>

        <motion.section {...sectionMotion} className="border-y border-slate-800">
          <div className="mx-auto w-[min(1120px,92%)] py-20">
            <SectionTitle title="Testimonials" />
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((quoteText) => (
                <blockquote
                  key={quoteText}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <Quote className="mb-4 text-cyan-500" size={22} />
                  <p className="text-slate-300">{quoteText}</p>
                </blockquote>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" {...sectionMotion} className="mx-auto w-[min(1120px,92%)] py-20">
          <SectionTitle title="Contact" subtitle="Let us build something great together." />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <iframe
                title="Deepak R location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d492.07425045026844!2d78.8530556!3d9.3691479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01bdee6aa2dbe9%3A0x1a79a2e8c720dfce!2sthuari!5e0!3m2!1sen!2sin!4v1775971583364!5m2!1sen!2sin"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <form
              onSubmit={onContactSubmit}
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <label className="block text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-cyan-500"
              />
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-cyan-500"
              />
              <label className="block text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Submit <Send size={16} />
              </button>
              {contactStatus ? <p className="text-sm text-cyan-500">{contactStatus}</p> : null}
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-300">
        Copyright @{new Date().getFullYear()} Thesuryar. All rights reserved.
      </footer>

      {activeCertImage ? (
        <button
          type="button"
          aria-label="Close certificate preview"
          onClick={() => setActiveCertImage(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
        >
          <img
            src={activeCertImage}
            alt="Certificate preview"
            className="max-h-[90vh] max-w-4xl rounded-lg object-contain"
          />
        </button>
      ) : null}
    </div>
  );
}
