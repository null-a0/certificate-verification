"use client";
import React, { useEffect, useState } from "react";
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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Certificate from "@/components/home/certificate";
import { useSearchParams } from "next/navigation";
import { veryfyCertificate } from "@/action/verify-certificate";
import { TYPE } from "@/generated/prisma";
export const certificateSchema = z.object({
  certificate_id: z.string().min(1, "Certificate ID is required"),
});

export type CertificateData = {
  certificate_id: string;
  name: string;
  position: string;
  duration: string;
  roll_number: string;
  type: TYPE;
  team_name: string;
};

type CertificateStatus = "idle" | "loading" | "verified" | "invalid";

export default function CertificateVerification() {
  const [status, setStatus] = useState<CertificateStatus>("idle");
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);
  const searchParams = useSearchParams();
  const initialCertificateId = searchParams.get("cert") || "";

  const form = useForm({
    resolver: zodResolver(certificateSchema),
    defaultValues: {
      certificate_id: "",
    },
  });

  useEffect(() => {
    if (initialCertificateId) {
      form.setValue("certificate_id", initialCertificateId);
    }
  }, [form, initialCertificateId]);

  const onSubmit = async (data: z.infer<typeof certificateSchema>) => {
    const { certificate_id } = data;
    setStatus("loading");
    try {
      const response = await veryfyCertificate(certificate_id);
      if (response.success) {
        setCertificateData(response.data);
        setStatus("verified");
        form.reset();
      } else {
        setStatus("invalid");
        form.setError("certificate_id", {
          type: "manual",
          message: response.message || "Certificate not found or invalid.",
        });
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      setStatus("invalid");
      form.setError("certificate_id", {
        type: "manual",
        message: "An error occurred while verifying the certificate.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto"
      >
        <FormField
          control={form.control}
          name="certificate_id"
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
                  placeholder="Enter your certificate ID (e.g., SHXXAAXX)"
                  className="h-10 sm:h-12 text-sm sm:text-lg border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  disabled={status === "loading"}
                />
              </FormControl>
              <FormDescription className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                The Certificate ID can be found at the bottom of your
                certificate. Kindly write to{" "}
                <Link
                  href="mailto:saranda-sec@ds.study.iitm.ac.in"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors"
                >
                  saranda-sec@ds.study.iitm.ac.in
                </Link>{" "}
                if you find any discrepancies.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <ShimmerButton
            type="submit"
            className="w-full h-10 sm:h-12 text-sm sm:text-lg font-semibold disabled:opacity-50"
            shimmerColor="#ffffff"
            background="linear-gradient(135deg, #d3b95f 24%, #0a0a0a 100%)"
            disabled={status === "loading"}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              Verify Certificate
            </div>
          </ShimmerButton>
        </div>

        <Dialog open={status === "verified"} onOpenChange={(open) => !open && setStatus("idle")}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <Certificate data={certificateData} />
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
