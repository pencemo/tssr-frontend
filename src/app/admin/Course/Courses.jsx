import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Loader from "@/components/ui/loader";
import { TableComp } from "@/components/admincomp/studycenComp/Table";
import { useStudyCentre } from "@/hooks/tanstackHooks/useStudyCentre";
import { useNavigate } from "react-router-dom";
import AllCourse from "@/components/admincomp/courseComp/AllCourse";
import Batches from "./Batches";
import { AddCourse } from "@/components/admincomp/courseComp/AddCourse";
import { useAllSubjects } from "@/hooks/tanstackHooks/useSubjects";

export function Courses() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null)
  const {data:subjects}=useAllSubjects()
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [course, setCourse] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    duration: "",
    subjects: [],
  });

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1); // Reset to page 1 on new search
    }, 1000); // delay in ms

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const { data, error, isLoading } = useStudyCentre();

  

  useEffect(() => {
    if (data && data.data) {
      setCourse(data.data);
    }
    if (data) {
      setTotalPage(data.totalPages);
    }
  }, [data]);

  if (error) {
    return <div className="w-full h-full flex justify-center items-center font-medium text-muted-foreground">
    Error to fetch data
  </div>;
  }

  return (
    <div className=" w-full h-full">
      {selected ? 
      <div>
        <Batches
        data={selected}
        back={() => setSelected(null)}
        />
        
        </div>
      :<div className="space-y-6 w-full h-full">
        <div className="flex max-sm:flex-col gap-2 justify-between items-center">
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            type="text"
            placeholder="Search users..."
            className="max-w-sm max-sm:max-w-full"
          />
          <div className="max-sm:w-full">
            <AddCourse
            formData={formData}
            setFormData={setFormData}
            subject={subjects?.data}
            />
            {/* <Button className={'max-sm:w-full'} onClick={()=>navigate('/admin/studycentre/add')}>Add Course</Button> */}
          </div>
        </div>

        {isLoading ? (
          <div className="w-full h-full">
            <Loader />
          </div>
        ) : course.length > 0 ? (
          <div className="">
            <AllCourse
              setSelected={setSelected}
              data={['data', 'asdfj', 'asdfja', 'name of course']}
            />
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center font-medium text-muted-foreground">
            No data found
          </div>
        )}
      </div>}
    </div>
  );
}


export default Courses
