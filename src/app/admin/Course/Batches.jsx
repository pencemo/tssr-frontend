import { AddCourse } from "@/components/admincomp/courseComp/AddCourse";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUpdateCourse } from "@/hooks/tanstackHooks/useCourse";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { NewBatch } from "./NewBatch";
import { Button } from "@/components/ui/button";
import { useBatchesOfCourse, useUpdateStatusOfBatch } from "@/hooks/tanstackHooks/useBatch";
import Loader from "@/components/ui/loader";
import { Switch } from "@/components/ui/switch";

function Batches({ data, back, subjects,  }) {
  const [selected, setSelected] = useState([]);
  const [batch, setBatch] = useState([])
  const { mutate } = useUpdateCourse();
  const {mutate : updateStatusOfBatch} = useUpdateStatusOfBatch()
  const { data: batches, error, isLoading } = useBatchesOfCourse(data._id);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    duration: "",
    subjects: [],
  });

  useEffect(() => {
    setFormData({ ...formData, ...data });
    setSelected([...data.subjects]);
  }, [data]);

  useEffect(() =>{
    if(batches?.data){
      setBatch(batches.data)
    }
  }, [batches])

  const handleUpdateCourse = () => {
    // if(formData.name === '')
    mutate(
      { formData, id: data._id },
      {
        onSuccess: (data) => {
          if (data.success) {
            toast("Course updated", {
              description: "Course updated successfully",
            });
            setData(data.data);
            // handleCancel()
          } else {
            toast("Somthing went wrong", {
              description: data.message,
            });
            setError(data.message);
          }
        },
      }
    );
  };
  const handleUpdateStatus = (value, id) => {
    // return console.log(value);
    // if(formData.name === '')
    updateStatusOfBatch(
      { data: {isAdmissionStarted: value}, batchId: id },
      {
        onSuccess: (data) => {
          if (data.success) {
            toast("Batch updated", {
              description: "Batch updated successfully",
            });
          } else {
            toast("Somthing went wrong", {
              description: data.message,
            });
          }
        },
      }
    );
  };

  return (
    <div className="w-full border rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full  py-8 md:px-6 border-b flex max-md:flex-col justify-between bg-muted px-4">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold">{data.name}</h1>
          <p className="text-muted-foreground">{data.category}</p>
          <p className="text-muted-foreground">{data.duration}</p>
        </div>
        <div className="flex flex-col gap-1">
          <Button variant='outline' onClick={back}>Back</Button>
          <AddCourse
            formData={formData}
            setFormData={setFormData}
            subject={subjects?.data}
            submit={handleUpdateCourse}
            type="edit"
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <div className="py-8 px-6 ">
        <div className="flex justify-between items-center mb-4 max-md:flex-col">
          <h1 className="text-xl font-semibold">Available batches</h1>
          <NewBatch id={data._id} name={data.name} />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <div className="w-full h-full">
              <Loader />
            </div>
          ) : error ? (
            <div>Error to load batches</div>
          ) : (
            batch?.map((item, i) => {
              return (
                <Card
                  onClick={() => setSelected(item)}
                  key={i}
                  className={`${
                    item.isAdmissionStarted && "border-green-600 bg-green-50"
                  } shadow-none`}
                >
                  <CardHeader className="relative">
                    <CardTitle >Batch No : {i + 1}</CardTitle>
                    {/* <CardDescription>{item._id}</CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col ">
                      <h1 className="text-2xl font-medium">{item.month}</h1>
                      <div className="w-full mt-2 border py-2 bg-white px-3 flex items-center justify-between rounded-xl">
                        <div>
                          <h1 className="font-medium">Admission</h1>
                          <p className="text-sm text-muted-foreground">
                            Make it on to take admission
                          </p>
                        </div>
                        <Switch
                          className={'cursor-pointer'}
                          checked={item.isAdmissionStarted}
                          onCheckedChange={(value) => handleUpdateStatus(value, item._id)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Batches;
