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
  
  
  export function TableComp({data}) {
    return (
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No</TableHead>
            <TableHead >
              Name
            </TableHead>
            <TableHead className="" >
              Email
            </TableHead>
            <TableHead className="" >
              Email
            </TableHead>
            <TableHead className="">
            Verified
            </TableHead>
            <TableHead className=" " >
              Date
            </TableHead>
            <TableHead className=" " >
              
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{i+1}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.isVerified? 'Verified': 'Not Verified'}</TableCell>
              <TableCell className="">{format(new Date(user.renewalDate), "dd MMM yyyy")}</TableCell>
              <TableCell className="">Edit</TableCell>
              <TableCell className="">Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  