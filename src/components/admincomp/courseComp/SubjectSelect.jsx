"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SubjectSelect({ options, selected, onChange, placeholder = "Select items", className, error }) {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value))
    } else {
      onChange([...selected, value])
    }
  }

  // Get the selected items' names for display
  const selectedItems = React.useMemo(() => {
    return options.filter((option) => selected.includes(option._id))
  }, [options, selected])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between font-normal h-auto min-h-10", error && "border-red-500", className)}
          onClick={(e) => {
            e.stopPropagation() // Prevent event bubbling
            setOpen(!open)
          }}
        >
          <div className="flex flex-wrap gap-1 items-center justify-start w-full">
            {selectedItems.length > 0 ? (
              <>
                {selectedItems.map((item) => (
                  <Badge key={item._id} variant="secondary" className="mr-1 mb-1">
                    {item.name}
                  </Badge>
                ))}
              </>
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50 ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-0"
        align="start"
        side="bottom"
        sideOffset={4}
        avoidCollisions={true}
        // Higher z-index to ensure it appears above the Dialog
        style={{ zIndex: 9999 }}
      >
        <Command>
          <CommandInput placeholder="Search..." value={inputValue} onValueChange={setInputValue} />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option._id}
                  value={option.name}
                  onSelect={() => {
                    handleSelect(option._id)
                    setInputValue("")
                  }}
                >
                  <div
                    className={cn(
                      "mr-2 flex size-[18px] items-center justify-center rounded-md border transition-all border-input",
                      selected.includes(option._id) ? "bg-primary text-white" : "opacity-50 [&_svg]:invisible",
                    )}
                  >
                    <Check className="text-white size-3.5" />
                  </div>
                  <span>{option.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
