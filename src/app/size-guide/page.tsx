import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Kurti Size Guide & Fitting Chart | Ruchika Creation",
  description: "Find your perfect kurti fit with our standard Indian ethnicwear sizing chart (S, M, L, XL, XXL).",
};

export default function SizeGuidePage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Size Guide</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            FIT &amp; SIZING
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Kurti &amp; Sets Size Guide
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Standard Indian sizing measurements in inches (Garment Dimensions).
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm font-sans text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF6F0] text-[#241D1B] border-b border-[#E6DDD3]">
                  <th className="p-3 font-semibold">Size</th>
                  <th className="p-3 font-semibold">Bust (Inches)</th>
                  <th className="p-3 font-semibold">Waist (Inches)</th>
                  <th className="p-3 font-semibold">Hip (Inches)</th>
                  <th className="p-3 font-semibold">Kurti Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DDD3] text-[#514744]">
                <tr>
                  <td className="p-3 font-bold text-[#641C22]">S (Small)</td>
                  <td className="p-3">36&quot;</td>
                  <td className="p-3">32&quot;</td>
                  <td className="p-3">38&quot;</td>
                  <td className="p-3">44&quot;</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#641C22]">M (Medium)</td>
                  <td className="p-3">38&quot;</td>
                  <td className="p-3">34&quot;</td>
                  <td className="p-3">40&quot;</td>
                  <td className="p-3">44&quot;</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#641C22]">L (Large)</td>
                  <td className="p-3">40&quot;</td>
                  <td className="p-3">36&quot;</td>
                  <td className="p-3">42&quot;</td>
                  <td className="p-3">44&quot;</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#641C22]">XL (X-Large)</td>
                  <td className="p-3">42&quot;</td>
                  <td className="p-3">38&quot;</td>
                  <td className="p-3">44&quot;</td>
                  <td className="p-3">45&quot;</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#641C22]">XXL (2X-Large)</td>
                  <td className="p-3">44&quot;</td>
                  <td className="p-3">40&quot;</td>
                  <td className="p-3">46&quot;</td>
                  <td className="p-3">45&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 border-t border-[#E6DDD3] space-y-2 text-xs text-[#817771]">
            <h3 className="font-semibold text-[#241D1B] text-sm">How to Measure:</h3>
            <p>• <strong>Bust:</strong> Measure around the fullest part of your chest with measuring tape level across your back.</p>
            <p>• <strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</p>
            <p>• <strong>Hip:</strong> Measure around the fullest part of your hips.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
