import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Avatar component that serves as a wrapper for the AvatarPrimitive.Root component.
 * It forwards the ref and accepts additional className and props.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.className - Additional class names for styling.
 * @param {React.Ref} ref - The reference to the DOM element.
 * @returns {JSX.Element} The Avatar component.
 */
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props} />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/**
 * AvatarImage component that serves as a wrapper for the AvatarPrimitive.Image component.
 * It forwards the ref and accepts additional className and props.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.className - Additional class names for styling.
 * @param {React.Ref} ref - The reference to the DOM element.
 * @returns {JSX.Element} The AvatarImage component.
 */
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * AvatarFallback component that serves as a wrapper for the AvatarPrimitive.Fallback component.
 * It forwards the ref and accepts additional className and props.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.className - Additional class names for styling.
 * @param {React.Ref} ref - The reference to the DOM element.
 * @returns {JSX.Element} The AvatarFallback component.
 */
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props} />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
