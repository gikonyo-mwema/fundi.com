import * as React from "react";
import { cva } from "class-variance-authority"; // Importing the class variance authority for handling class variants

import { cn } from "@/lib/utils"; // Importing a utility function for class names

// Define badge variants using cva
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Badge component definition
function Badge({
  className, // Additional class names
  variant, // Variant of the badge
  ...props // Other props
}) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)} // Combine variant classes with additional class names
      {...props} // Spread other props onto the div
    />
  );
}

export { Badge, badgeVariants }; // Export Badge component and badgeVariants