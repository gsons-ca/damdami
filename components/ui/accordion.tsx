"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { className?: string }
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={`overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5 ${className ?? ""}`}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`flex flex-1 items-center justify-between gap-3 px-6 py-5 text-left text-base font-semibold text-slate-900 transition hover:text-[#002366] ${className ?? ""}`}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 text-slate-500 transition duration-200 radix-state-open:rotate-180" aria-hidden="true" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { className?: string }
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={`data-[state=open]:animate-accordion-down overflow-hidden text-sm text-slate-600 ${className ?? ""}`}
    {...props}
  >
    <div className="px-6 pb-6 pt-0">{props.children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
