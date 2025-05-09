import { Button } from "@/components/ui/button"
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
import { FormInputs } from "../studycenComp/CreateStudy"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { SubjectSelect } from "./SubjectSelect"

export function AddCourse({formData, setFormData, subject}) {
    const [isError, setError]=useState(false)
    const [selected, setSelected] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button >Add Course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
          <FormInputs
          name="Name"
          id="name"
          onChange={handleChange}
          value={formData.name}
          error={isError && formData.name === ""}
          />
          
          <SelectTag
          name="Category"
          id="category"
          setFormData={setFormData}
        //   onChange={handleChange}
        formData={formData}
          error={isError && formData.category === ""}
          />
          <FormInputs
          name="Duration"
          id="duration"
          onChange={handleChange}
          value={formData.duration}
          error={isError && formData.duration === ""}
          />

        <div className="grid sm:grid-cols-12 gap-3 sm:gap-5">
        <div className="sm:col-span-3">
          <Label htmlFor="Address" className="col-span-3">
            Subjects
          </Label>
        </div>
        <div className="sm:col-span-9 ">
          <SubjectSelect
            options={subject}
            selected={selected}
            onChange={setSelected}
            placeholder="Select items"
            error={isError && selected.length === 0}
          />
        </div>
      </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


const SelectTag = ({ name, setFormData, formData, error}) => {
  
    const handleStateChange = (category) => {
      setFormData({...formData, category:category});
    };
  
    return (
      <div className="grid sm:grid-cols-12 gap-3 sm:gap-5">
        <div className="sm:col-span-3 ">
          <Label htmlFor={name}>{name}</Label>
        </div>
        <div className="sm:col-span-9">
          {/* State Dropdown */}
          <Select value={formData?.category} onValueChange={handleStateChange}>
            <SelectTrigger className={`w-full py-5 shadow-none ${error && formData.state === "" && "border-red-500"}`}>
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {['Maharashtra', 'Gujarat', 'Rajasthan'].map((item, i) => (
                <SelectItem key={i} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
  
          
        </div>
      </div>
    );
  };