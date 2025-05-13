import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { excelDownload } from "@/lib/ExcelDownload"
import { Download04Icon } from "hugeicons-react"
import { MoreVerticalIcon } from "lucide-react"

export function MenuButtons() {
  return (
    <Popover>
      <PopoverTrigger asChild >
      <Button variant='outline' size='icon' >
              <MoreVerticalIcon/>
            </Button>
      </PopoverTrigger>
      <PopoverContent className="" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Download</h4>
            <p className="text-sm text-muted-foreground">
              Download excel file with all the data
            </p>
          </div>
          <div className="grid gap-2">
            <Button onClick={()=>excelDownload([
                 { id: 1, name: 'John', age: 30 },
                 { id: 2, name: 'Jane', age: 25 },
                 { id: 3, name: 'Doe', age: 40 }
            ])} >
                Download
                <Download04Icon strokeWidth={2}/>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
