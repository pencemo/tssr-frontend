import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/datePicker"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Address from "./Address"

export function AddStudy() {
  const [formData, setFormData] = useState({
    atcId: "",
    name: "",
    centerHead: "",
    email: "",
    phoneNumber: "",
    renewalDate: new Date(),
    state: "",
    city: "",
    place: "",
    pincode: "",
    regNo: "",
    isApproved: false,
    isActive: false,
  });
  const [date, setDate]=useState(new Date())

  const [step, setStep]=useState(1)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add study centre</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-screen overflow-y-auto md:p-8">
        <DialogHeader className={'border-b pb-6'}>
          <DialogTitle>Creat New Study Center</DialogTitle>
          <DialogDescription>
            Create new study center and admin by filling out the form below.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <h1 className="text-lg font-medium">Submit Details</h1>
            <p className="text-sm text-muted-foreground ">Submit details of study centre</p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


