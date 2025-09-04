import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md u-strong ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Original variants with new design system
        default: "bg-[#563AF0] text-white hover:bg-white hover:text-[#563AF0] border-2 border-[#563AF0] transition-all duration-300 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        
        // New CTA variants - hierarchy system
        "cta-primary": "bg-gradient-telegram text-white u-strong shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:ring-primary/30 rounded-full",
        "cta-secondary": "border-2 border-primary bg-transparent text-primary u-strong hover:bg-primary hover:text-white focus:ring-primary/30 rounded-full",
        "cta-tertiary": "bg-secondary/60 text-foreground u-strong hover:bg-secondary/80 border border-white/20 backdrop-blur-sm rounded-full",
        
        // Specialized variants
        "glass-breath": "relative u-strong bg-[#563AF0] text-white border-2 border-[#563AF0] hover:bg-white hover:text-[#563AF0] transition-all duration-300 hover:scale-105 focus:ring-white/30 rounded-full",
        "form-submit": "bg-gradient-telegram text-white u-strong shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] focus:ring-primary/30 rounded-full",
        "hero-accent": "bg-white text-foreground u-strong shadow-md hover:bg-secondary hover:shadow-lg hover:scale-[1.01] focus:ring-primary/30 rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 py-2 text-xs rounded-xl",
        lg: "h-12 px-6 py-3 text-base rounded-xl",
        xl: "h-14 px-8 py-4 text-lg rounded-2xl",
        icon: "h-10 w-10",
        "touch": "min-h-[44px] min-w-[44px] px-4 py-3 text-sm rounded-xl", // Mobile optimized
      },
      state: {
        default: "",
        loading: "cursor-wait",
        success: "cursor-default",
        error: "cursor-pointer",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  success?: boolean
  error?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state, asChild = false, loading, success, error, icon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Determine button state
    const buttonState = loading ? "loading" : success ? "success" : error ? "error" : state || "default"
    const isDisabled = disabled || loading || success
    
    // Dynamic content based on state
    const renderContent = () => {
      if (loading) {
        return (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
            <span>Загрузка...</span>
          </>
        )
      }
      
      if (success) {
        return (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Готово!</span>
          </>
        )
      }
      
      if (error) {
        return (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
            </svg>
            <span>Повторить</span>
          </>
        )
      }
      
      return (
        <>
          {icon && icon}
          {children}
        </>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, state: buttonState, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {renderContent()}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
