import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import Loader from "@/components/ui/loader"
import { TableComp } from "@/components/admincomp/studycenComp/Table"
import { useStudyCentre } from "@/hooks/tanstackHooks/useStudyCentre"

export function StudyCentre() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [studyCenters, setStudyCenters] = useState([]);
//   const { data, error, isLoading } = useUserList(currentPage, limit);
  const [totalPage, setTotalPage] = useState(0);
  const {data, error, isLoading}=useStudyCentre(currentPage, limit)

  useEffect(() => {
    console.log(data);
    if (data && data.data) {
        setStudyCenters(data.data);
    }
    if (data){
      setTotalPage(data.totalPages);
    }
  }, [data]);

  

  if (isLoading) {
    return <div className="w-full h-full"><Loader/></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Input
            type="text"
            placeholder="Search users..."
            className="max-w-sm"
          />
          <div className="flex gap-2">

          <Select value={limit.toString()} onValueChange={(value) => setLimit(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select rows per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 per page</SelectItem>
              <SelectItem value="10">10 per page</SelectItem>
              <SelectItem value="20">20 per page</SelectItem>
            </SelectContent>
          </Select>
          <Button>Add Study Centre</Button>
          </div>
        </div>
        <div className="rounded-md border">
          <TableComp data={studyCenters}/>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPage}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
            disabled={currentPage === totalPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(totalPage)}
            disabled={currentPage === totalPage}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
