import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BorderBeam } from "../ui/border-beam";
import { CertificateData } from "./certificate-verification";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { TYPE } from "@/generated/prisma";

export default function Certificate({ data }: { data: CertificateData | null; }) {
  if (!data) return null;

  const generateType = (type: string) => {
    switch (type) {
      case TYPE.TEAM:
        return "Team";
      case TYPE.CLUB:
        return "Club";
      default:
        return "REGION";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <DialogHeader className="mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            Verified Authentic
          </span>
        </div>
        <DialogTitle className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100">
          Certificate Verification
        </DialogTitle>
        <DialogDescription className="text-center text-slate-600 dark:text-slate-300">
          Certificate successfully verified and authenticated
        </DialogDescription>
      </DialogHeader>

      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2 certificate-print">
        <BorderBeam size={60} duration={12} delay={9} className="no-print" />

        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Paradox Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              Certificate of Appreciation
            </CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              This is to certify that
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">
              {data.name}
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Role
                </p>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {data.position}
                </p>
              </div>

              <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Duration
                </p>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {data.duration}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Roll Number
                </p>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {data.roll_number}
                </p>
              </div>

              <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                  {generateType(data.type)}
                </p>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {data.team_name}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Certificate ID
              </p>
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-800/30 border border-yellow-200 dark:border-yellow-700 rounded-lg px-4 py-2">
                <code className="text-lg font-mono font-bold text-yellow-800 dark:text-yellow-200">
                  {data.certificate_id}
                </code>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Issued by Saranda House
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              This certificate has been digitally verified.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
