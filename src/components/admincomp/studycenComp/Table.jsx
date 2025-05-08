import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { format } from "date-fns"
import { DeleteAlert } from "./DeletAlert"
  
  
  export function TableComp({data, head}) {
    return (
        <Table className={'border-b'}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No</TableHead>
            {head.map((item, i) =>(
              <TableHead key={i} className="">{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user, i) => (
            <TableRow key={i}  >
              <TableCell className="font-medium">{i+1}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.atcId}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell className="">{format(new Date(user.renewalDate), "dd MMM yyyy")}</TableCell>
              <TableCell>{user.isVerified? 'Verified': 'Not Verified'}</TableCell>
              <TableCell className="">Edit</TableCell>
              <TableCell className="">
                <DeleteAlert deleteFn={()=>console.log(user._id)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  