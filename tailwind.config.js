const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./designs/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx", "./lib/**/*.ts"],
  },
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
        0.75: "0.1875rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
      },
      colors,
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.400"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
      keyframes: {
        shrink: {
          "0% , 100%": {
            height: "0.75rem",
          },
          "50%": {
            height: "0.375rem",
          },
        },
        expand: {
          "0% , 100%": {
            height: "0.375rem",
          },
          "50%": {
            height: "0.75rem",
          },
        },
        "fade-foreground-1": {
          "0%, 16.667%, 100%": {
            opacity: 1,
          },
          "33.333%, 83.333%": {
            opacity: 0,
          },
        },
        "fade-background-1": {
          "0%, 16.667%, 100%": {
            opacity: 0,
          },
          "25%, 91.667%": {
            opacity: 1,
          },
        },
        "fade-foreground-2": {
          "0%, 100%": {
            opacity: 0,
          },
          "33.333%, 50%": {
            opacity: 1,
          },
          "16.667%, 66.667%": {
            opacity: 0,
          },
        },
        "fade-background-2": {
          "0%, to": {
            opacity: 1,
          },
          "33.333%, 50%": {
            opacity: 0,
          },
          "25%, 58.333%": {
            opacity: 1,
          },
        },
        "fade-foreground-3": {
          "0%, 50%, 100%": {
            opacity: 0,
          },
          "66.667%, 83.333%": {
            opacity: 1,
          },
        },
        "fade-background-3": {
          "0%, 58.333%, 91.667%, 100%": {
            opacity: 1,
          },
          "66.667%, 83.333%": {
            opacity: 0,
          },
        },
      },
      animation: {
        shrink: "shrink 1.5s infinite",
        expand: "expand 1.5s infinite",
        "faded-background-1": "fade-background-1 8s infinite",
        "faded-foreground-1": "fade-foreground-1 8s infinite",
        "faded-background-2": "fade-background-2 8s infinite",
        "faded-foreground-2": "fade-foreground-2 8s infinite",
        "faded-background-3": "fade-background-3 8s infinite",
        "faded-foreground-3": "fade-foreground-3 8s infinite",
      },
    },
  },
  variants: {
    typography: ["dark"],
    animation: ["motion-safe"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    // firefox variant
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),
  ],
};
