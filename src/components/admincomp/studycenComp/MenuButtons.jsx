"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { excelDownload } from "@/lib/ExcelDownload";
import { Download04Icon } from "hugeicons-react";
import { MoreVerticalIcon } from "lucide-react";
import { useGetStudyCenterForExcel } from "@/hooks/tanstackHooks/useStudyCentre";
import { studyCentreService } from "@/API/services/studyCenterService";

export function MenuButtons() {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const { data, error, isLoading } = useGetStudyCenterForExcel();

  const handleDownload = async () => {
    setLoading(true);
    try {
      excelDownload(data.data);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to fetch study center data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" disabled={loading}>
          <MoreVerticalIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Download</h4>
            <p className="text-sm text-muted-foreground">
              Download Excel file with all study center data.
            </p>
          </div>
          <div className="grid gap-2">
            <Button onClick={handleDownload} disabled={loading}>
              {loading ? "Downloading..." : "Download"}
              <Download04Icon className="ml-2" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
