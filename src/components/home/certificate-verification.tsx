"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Shield } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Certificate from "@/components/home/certificate";
export const certificateSchema = z.object({
  certificateId: z.string().min(1, "Certificate ID is required"),
});

type CertificateStatus = "idle" | "loading" | "verified" | "invalid";

export default function CertificateVerification() {
  const [status, setStatus] = useState<CertificateStatus>("idle");

  const form = useForm({
    resolver: zodResolver(certificateSchema),
    defaultValues: {
      certificateId: "",
    },
  });

  const onSubmit = async (data: { certificateId: string }) => {
    setStatus("loading");
    setTimeout(() => {
      if (data.certificateId.toLowerCase().includes("prdx")) {
        setStatus("verified");
      } else {
        setStatus("invalid");
      }
    }, 2000);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto"
      >
        <FormField
          control={form.control}
          name="certificateId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base sm:text-lg mt-2 font-semibold text-slate-700 dark:text-slate-200">
                Certificate ID
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="certificate-id"
                  type="text"
                  placeholder="Enter your certificate ID (e.g., PRDX23M0000)"
                  className="h-10 sm:h-12 text-sm sm:text-lg border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  disabled={status === "loading"}
                />
              </FormControl>
              <FormDescription className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                The Certificate ID can be found at the bottom of your
                certificate. Kindly write to{" "}
                <Link
                  href="mailto:support@iitmparadox.org"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors"
                >
                  support@iitmparadox.org
                </Link>{" "}
                if you find any discrepancies.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <Dialog>
            <DialogTrigger disabled={form.watch("certificateId").length === 0} asChild>
              <ShimmerButton
                type="submit"
                className="w-full h-10 sm:h-12 text-sm sm:text-lg font-semibold disabled:opacity-50"
                shimmerColor="#ffffff"
                background="linear-gradient(135deg, #dcdd10 24%, #180c72 100%)"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  Verify Certificate
                </div>
              </ShimmerButton>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <Certificate />
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </Form>
  );
}
