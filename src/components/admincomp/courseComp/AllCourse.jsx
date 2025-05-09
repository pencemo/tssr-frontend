import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen02Icon } from 'hugeicons-react'
import React from 'react'

function AllCourse({data, setSelected}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
      {data.map((item, i) =>{
        return (
          <Card onClick={() => setSelected(item)} key={i} className='hover:bg-zinc-50 hover:shadow-lg shadow-none'>
            <CardHeader className='relative'>
              <CardTitle>{item}</CardTitle>
              <CardDescription>the discriptisn of the cource</CardDescription>
              <div className='absolute right-5'>
                <BookOpen02Icon size={20} strokeWidth={1} className='text-muted-foreground'/>
              </div>
            </CardHeader>
              <CardContent>
                <div className=''>
                  fsd
                </div>
              </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default AllCourse
